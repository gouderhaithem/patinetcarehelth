import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import Layout from '../../components/Layout';
import { Patient } from '../../interfaces';
import ListDetail from '../../components/Patient/ListDetail';
import { useUser } from '../../context/UserContext';
import { db } from '../../config/firebase'; // Adjust the import path as needed
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const PatientDetailPage = () => {
    const { user } = useUser();
    const router = useRouter();
    const { id } = router.query;

    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPatient = async (patientId: string) => {
            try {
                const patientDoc = await getDoc(doc(db, 'Patient', patientId));
                
                if (patientDoc.exists()) {
                    const patientData = patientDoc.data() as Patient;

                    // Convert Firestore timestamps to serializable formats
                    const convertTimestamps = (data: any) => {
                        for (const key in data) {
                            if (data[key] instanceof Object && 'seconds' in data[key] && 'nanoseconds' in data[key]) {
                                data[key] = new Date(data[key].seconds * 1000).toISOString();
                            } else if (Array.isArray(data[key])) {
                                data[key] = data[key].map(item => convertTimestamps(item));
                            } else if (typeof data[key] === 'object') {
                                data[key] = convertTimestamps(data[key]);
                            }
                        }
                        return data;
                    };

                    const serializedPatient = convertTimestamps(patientData);
                    serializedPatient.idPatient = patientDoc.id;
                    setPatient(serializedPatient);
                } else {
                    setError('Patient not found');
                }
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient(id as string);
        }
    }, [id]);

    if (loading) {
        return (
            <Layout title="Loading..." user={user}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh' 
                }}>
                    <Spin 
                        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} 
                    />
                </div>
            </Layout>
        );
    }

    if (error) {
        return <Layout title="Error" user={user}><p>{error}</p></Layout>;
    }

    return (
        <Layout title={`${patient?.personalInfo?.firstName} ${patient?.personalInfo?.lastName}`} user={user}>
            <ListDetail patient={patient} />
        </Layout>
    );
};

export default PatientDetailPage;
