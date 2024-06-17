import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import Layout from '../../components/Layout';
import { User } from '../../interfaces';
import ListDetail from '../../components/User/ListDetail';
import { useUser } from '../../context/UserContext';
import { db } from '../../config/firebase';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const UserDetailPage = () => {
    const { user } = useUser();
    const router = useRouter();
    const { id } = router.query;

    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async (userId: string) => {
            try {
                const userDoc = await getDoc(doc(db, 'users', userId));
                
                if (userDoc.exists()) {
                    const userData = userDoc.data() as User;

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

                    const serializedUser = convertTimestamps(userData);
                    serializedUser.id = userDoc.id;
                    setUserData(serializedUser);
                } else {
                    setError('User not found');
                }
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUser(id as string);
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
        <Layout title={`${userData?.nom} ${userData?.prenom}`} user={user}>
            {userData && <ListDetail item={userData} />}
        </Layout>
    );
};

export default UserDetailPage;
