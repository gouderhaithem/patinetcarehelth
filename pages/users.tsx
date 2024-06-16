import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import List from '../components/User/List';
import { User } from '../interfaces';
import { useUser } from '../context/UserContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const WithClientSideFetch = () => {
    const { user } = useUser();
    const router = useRouter();
    const [items, setItems] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
   
    


    useEffect(() => {
        if (user === null) {
            // Redirect to the sign-in page if no user is found
            router.push('/signin');
        } 
    }, [user, router]);



    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, 'users');
                const usersSnapshot = await getDocs(usersCollection);
                const fetchedItems: User[] = usersSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as User));

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
                setFilteredUsers(serializedItems);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        setFilteredUsers(searchTerm ? items.filter(user =>
            user.firstname.toLowerCase().includes(lowerCaseSearchTerm) ||
            user.lastname.toLowerCase().includes(lowerCaseSearchTerm)
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
console.log(items)
    return (
        <Layout title="Liste des utilisateurs" user={user}>
            <h1>Liste des Utilisateurs</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Rechercher par nom ou prénom..."
                style={styles.searchInput}
            />
            {searchTerm && (
                <div>
                    {filteredUsers.map((user, index) => (
                        <Link key={user.id} href={`/user/${user.id}`}>
                            <a style={styles.dropdownItem}>
                                {index + 1}. {user.firstname} {user.lastname}
                            </a>
                        </Link>
                    ))}
                </div>
            )}
            <List users={filteredUsers.map((user, index) => ({ ...user, index: index + 1 }))} />

        </Layout>
    );
};

export default WithClientSideFetch;
