import React from 'react';
import { Patient } from '../../interfaces';
import PatientListItem from './ListItems';
import PaginationControls from '../../utils/pagination-controls';

type Props = {
    patients: Patient[]
}

const List = ({ patients }: Props) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const patientsPerPage = 10;
    const totalPages = Math.ceil(patients.length / patientsPerPage);

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const styles = {
        table: {
            width: '100%',
            borderCollapse: 'collapse' as 'collapse',
            overflowX: 'auto' as 'auto',
            tableLayout: 'fixed' as 'fixed'
        },
        th: {
            backgroundColor: '#f2f2f2',
            color: '#333',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            fontSize: '14px',
            textAlign: 'left' as 'left',
            whiteSpace: 'nowrap',
        }
    };

    return (
        <>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Identifiant</th>
                        <th style={styles.th}>Nom</th>
                        <th style={styles.th}>Prénom</th>
                        <th style={{    backgroundColor: '#f2f2f2',
            color: '#333',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            fontSize: '14px',
            textAlign: 'left' as 'left',
            whiteSpace: 'nowrap',
            width:"160px"}}>Date de naissance</th>
                        <th style={styles.th}>Adresse</th>
                        <th style={{    backgroundColor: '#f2f2f2',
            color: '#333',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            fontSize: '14px',
            textAlign: 'left' as 'left',
            whiteSpace: 'nowrap',
            width:"70px"}}>Sexe</th>
                        <th style={styles.th}>№ de téléphone</th>
                       
                        <th style={styles.th}>№ de s sociale</th>
                        <th style={styles.th}> profile</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPatients.map((patient, index) => (
                        <PatientListItem key={patient.idPatient} patient={patient} index={indexOfFirstPatient + index} />
                    ))}
                </tbody>
            </table>
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default List;
