import React from 'react';
import Link from 'next/link';
import { Patient } from '../../interfaces';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Adjust the import path as needed

type Props = {
    patient: Patient;
};

const PatientListItem: React.FC<Props> = ({ patient }) => {
    const router = useRouter();

    console.log('Patient in ListItem:', patient); // Log the patient data

    const handleDelete = async () => {
        console.log('Delete user:', patient.idPatient);

        const confirmDelete = confirm(`Are you sure you want to delete patient ${patient.personalInfo.firstName} ${patient.personalInfo.lastName}?`);
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, 'Patient', patient.idPatient));
            alert('Patient deleted successfully');
            router.push('/patients'); // Redirect to the patients list page
        } catch (error) {
            console.error('Error deleting patient:', error);
            alert('Failed to delete patient. Please try again.');
        }
    };

    return (
        <div style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            margin: '20px auto',
            maxWidth: '600px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center'
        }}>
            
            <div style={{ marginRight: '130px' }}>
                <Image src='/images/default-person.jpg' alt="Default" width={160} height={160} />
            </div>
            <div>
                <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '5px' }}>
                    {patient.personalInfo.lastName} {patient.personalInfo.firstName}
                </h2>
                <h3 style={{ fontSize: '18px', color: '#666', marginBottom: '5px' }}>{patient.personalInfo.phoneNumber}</h3>
                <h3 style={{ fontSize: '18px', color: '#666', marginBottom: '5px' }}>{patient.personalInfo.email}</h3>
                <h3 style={{ fontSize: '18px', color: '#666', marginBottom: '5px' }}>{patient.personalInfo.socialSecurityNumber}</h3>

                <p>{patient.personalInfo.dateOfBirth + " " + patient.personalInfo.placeOfBirth}</p>
                <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>{patient.personalInfo.address}</p>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link href={`/update-patient/${patient.idPatient}`}>
                        <a style={{ marginRight: '20px', color: '#007bff', textDecoration: 'none' }}>Accéder au dossier</a>
                    </Link>
                    <a href="#" onClick={handleDelete}
                        style={{ color: '#dc3545', textDecoration: 'none', cursor: 'pointer' }}><FaTrash size={24} /></a>
                </div>

                <Link href="/patients"><a style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>Retour à la liste des patients</a></Link>
            </div>
        </div>
    );
};

export default PatientListItem;
