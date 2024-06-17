import { User } from "../../interfaces";
import { useState } from "react";
import ListItems from "./ListItems";
import PaginationControls from "../../utils/pagination-controls";

type Props = {
    users: User[];
};

const UsersList = ({ users }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const totalPages = Math.ceil(users.length / usersPerPage);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
                        <th style={styles.th}>Index</th>
                        <th style={styles.th}>Name</th>
                        <th style={{backgroundColor:'#f2f2f2',color: '#333',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            fontSize: '14px',
            textAlign: 'left' as 'left',
            whiteSpace: 'nowrap', width:"20rem"}}>Email</th>
                        <th style={styles.th}>Role</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Created At</th>
                        <th style={styles.th}>Updated At</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <ListItems key={user.id} data={user} />
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

export default UsersList;
