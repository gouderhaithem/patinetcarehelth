import { useRouter } from 'next/router';
import PatientUpdateContainer from '../../components/Forms/PatientUpdateContainer';
import Layout from '../../components/Layout';
import { useUser } from '../../context/UserContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const PatientUpdatePage = () => {
    const router = useRouter();
    const { user } = useUser();
    const { id } = router.query;

    if (!id) {
        return (
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
        );
    }

    return (
        <Layout title={`${"update"} ${"patient"}`} user={user}>
            <PatientUpdateContainer patientId={id as string} />
        </Layout>
    );
};

export default PatientUpdatePage;
