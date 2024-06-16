// pages/create-user.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CreateUserForm, {ChampsFormulaireUtilisateur} from '../components/Forms/CreateUserForm';
import {useRouter} from "next/router";
import { useUser } from '../context/UserContext';

const CreateUserPage = () => {
    const router = useRouter();
    const { user } = useUser();
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user === null) {
            // Redirect to the sign-in page if no user is found
            router.push('/signin');
        } else {
            // User data is available, stop loading
            setLoading(false);
        }
    }, [user, router]);

    if (loading) {
        return <p>Loading...</p>; // You can replace this with a better loading indicator
    }

    const handleCreateUser = (user: ChampsFormulaireUtilisateur) => {
        console.log('Creating user:', user);
        router.push('/users');
    };

    return (
        <Layout title="Create User | Admin Dashboard" user={user}>

            <h1>Create User</h1>
            <CreateUserForm onSubmit={handleCreateUser} />
        </Layout>
    );
};

export default CreateUserPage;
