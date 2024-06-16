import React from 'react';
import Link from 'next/link';
import { User } from '../../interfaces';
import { FaEye } from "react-icons/fa";

type Props = {
    data: any
};

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

const ListItems = ({ data }: Props) => {
    const formatDate = (timestamp: string) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    };
  
    return (
    
    <tr>
        <td style={styles.td}>{data.index}</td>
        <td style={styles.td}>{data.nom} {data.prenom}</td>
        <td style={styles.td}>{data.email}</td>
        <td style={styles.td}>{data.role}</td>
        <td style={styles.td}>{data.statut}</td>
        <td style={styles.td}>{formatDate(data.created_at)}</td>
      <td style={styles.td}>{formatDate(data.updated_at)}</td>
        <td style={ {
        padding: '20px 20px',
        border: '1px solid #e0e0e0',
        textAlign: 'left' as 'left',
        fontSize: '12px',
        height:"100%",
        display:"flex" , alignItems:"center" , justifyContent:"center"
    }}>
            
            <Link href={`/user/${data.id}`}>
                <FaEye style={{cursor:"pointer"}} size={20} />
            </Link>
        </td>
    </tr>
);
};

export default ListItems;