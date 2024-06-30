import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import List from '../components/Patient/List';
import { Patient } from '../interfaces';
import { useUser } from '../context/UserContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'; // Ensure this path is correct
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const WithClientSideFetch = () => {
    const { user } = useUser();
    const router = useRouter();
    const [items, setItems] = useState<Patient[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
   
   
   

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const patientsCollection = collection(db, 'Patient');
                const patientsSnapshot = await getDocs(patientsCollection);
                const fetchedItems: Patient[] = patientsSnapshot.docs.map(doc => ({
                    idPatient: doc.id, // Ensure idPatient is included
                    ...doc.data()
                } as Patient));

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

                const serializedItems = fetchedItems.map(item => convertTimestamps(item));
                setItems(serializedItems);
                setFilteredPatients(serializedItems);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        setFilteredPatients(searchTerm ? items.filter(patient =>
            (patient.personalInfo?.firstName?.toLowerCase().includes(lowerCaseSearchTerm) ||
            patient.personalInfo?.lastName?.toLowerCase().includes(lowerCaseSearchTerm)||patient.personalInfo?.phoneNumber.toLowerCase().includes(lowerCaseSearchTerm) )
        ) : items);
    }, [searchTerm, items]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const styles = {
        searchInput: {
            width: '40%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        },
        dropdownItem: {
            display: 'block',
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'white',
            borderBottom: '1px solid #eee',
            transition: 'background-color 0.3s',
        },
        dropdownItemHover: {
            backgroundColor: '#f0f0f0'
        }
    };

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

    return (
        <Layout title="Liste des patients" user={user}>
            <h1>Liste des Patients</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Rechercher par nom ou prénom..."
                style={styles.searchInput}
            />
            {searchTerm && (
                <div>
                    {filteredPatients.map(patient => (
                        <Link key={patient.idPatient} href={`/patient/${patient.idPatient}`}>
                            <a style={styles.dropdownItem}>{patient.personalInfo?.firstName || patient.firstName} {patient.personalInfo?.lastName || patient.lastName}</a>
                        </Link>
                    ))}
                </div>
            )}
            <List patients={filteredPatients} />
        </Layout>
    );
};

export default WithClientSideFetch;
