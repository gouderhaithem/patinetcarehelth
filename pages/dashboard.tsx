import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import { useUser } from "../context/UserContext";
import { DashboardAdmin } from '../components/RoleDashboards/DashboardAdmin';
import { DashboardNurse } from '../components/RoleDashboards/DashboardNurse';
import { DashboardDoctor } from './../components/RoleDashboards/DashboardDoctor';

const DashboardPage = () => {
    const { user } = useUser();
    const router = useRouter();
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

    const renderDashboard = () => {
        if (!user) {
            return;
        }
        switch (user.role) {
            case 'admin':
                return <DashboardAdmin firstName={user.nom} lastName={user.prenom} />;
            case 'infirmière':
                return <DashboardNurse firstName={user.nom} lastName={user.prenom}/>;
            case 'docteur':
                return  <DashboardDoctor firstName={user.nom} lastName={user.prenom}/>;
            default:
                return <p>Role not recognized.</p>;
        }
    };



    if (loading) {
        return <p>Loading...</p>; // You can replace this with a better loading indicator
    }

    return (
        <Layout title="Patientcare" user={user}>

                   {renderDashboard()}
              
        </Layout>
    );
};

export default DashboardPage;
