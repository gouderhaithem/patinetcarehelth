import React from 'react';
import Link from 'next/link';
import { Patient } from '../../interfaces';
import { FaEye } from "react-icons/fa";

type Props = {
    patient: Patient,
    index: number
}

const styles = {
    td: {
        padding: '10px 15px',
        border: '1px solid #e0e0e0',
        textAlign: 'left' as 'left',
        fontSize: '12px',
    },
    link: {
        color: '#065ea2',
        textDecoration: 'none'
    }
};

const PatientListItem = ({ patient, index }: Props) => (
    <tr>
        {console.log(patient.personalInfo)}
        <td style={styles.td}>{index + 1}</td>
        <td style={styles.td}>{patient.personalInfo?.firstName || patient.firstName}</td>
        <td style={styles.td}>{patient.personalInfo?.lastName || patient.lastName}</td>
        <td style={styles.td}>{patient.personalInfo?.dateOfBirth || patient.dateOfBirth}</td>
        <td style={styles.td}>{patient.personalInfo?.address || patient.address}</td>
        <td style={styles.td}>{patient.personalInfo?.sex || patient.sex}</td>
        <td style={styles.td}>{patient.personalInfo?.phoneNumber || patient.phoneNumber}</td>
        <td style={styles.td}>{patient.personalInfo?.socialSecurityNumber || patient.socialSecurityNumber}</td>
        <td style={styles.td}>
            <Link href={`/patient/${patient.idPatient}`}>
                <a style={styles.link}>
                    <FaEye />
                </a>
            </Link>
        </td>
    </tr>
);

export default PatientListItem;
