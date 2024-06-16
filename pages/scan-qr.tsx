import React, { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from '../components/UI/modal';
import { useUser } from '../context/UserContext';
import { QrReader } from 'react-qr-reader';
import Layout from '../components/Layout';

const ScanQRPage = () => {
    const router = useRouter();
    const { user } = useUser();
    const [showModal, setShowModal] = useState(false);
    const [scannedUrl, setScannedUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false); // Change initial state to false
    const [errorMessage, setErrorMessage] = useState('');

   
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

    const handleScan = (data: string | null) => {
        if (data) {
            setIsScanning(false);
            try {
                const url = data
                
                if (url) {
                    setScannedUrl(data);
                    console.log(data);
                    
                    setShowModal(true);
                } else {
                    alert('Patient not found.');
                    setIsScanning(true);
                }
            } catch (error) {
                alert('Invalid QR code format.');
                setIsScanning(true);
            }
        }
    };

    const handleError = (err: any) => {
        setErrorMessage('Error scanning QR code');
        console.error(err);
    };

    const viewPatientProfile = () => {
        setShowModal(false);
        router.push(`update-patient/${scannedUrl}`);
    };

    const cancelAction = () => {
        setShowModal(false);
        setIsScanning(false);
    };
    const toggleQRReader = () => {
        setIsScanning(!isScanning);
    };

    const styles = {
        header: {
            fontSize: '24px',
            color: '#333',
            textAlign: 'center' as const,
            margin: '20px 0'
        },
        button: {
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            position: 'relative' as const,
        },
        image: {
            width: '400px',
            height:"400px",
            maxWidth: '400px',
            position:"absolute",
            display: 'block',
            left:"20px",
            margin: 'auto',
        },
        modalContent: {
            textAlign: 'center' as const,
            marginBottom: '20px',
        }
    };

    return (
        <Layout title="Scanner le QR Code" user={user}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1 style={styles.header}>Scanner le QR Code</h1>
                <button onClick={toggleQRReader} style={styles.button}>
                    {isScanning ? 'Arrêter le scan' : 'Commencer le scan'}
                </button>
                {isScanning && (
                    <div style={{ width: "400px", height: "400px", position:"relative" , marginBottom:"10rem"}}>
                         <img src="/images/scanning.gif" alt="Scanning..."  style={{width:"400px", height:"400px" , position:"absolute", zIndex:"1000"}}/>
                        <QrReader
                            scanDelay={300}
                            onResult={(result) => {
                                if (result) {
                                    handleScan(result?.getText());
                                }
                            }}
                            constraints={{ facingMode: 'environment' }}
                        />
                        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                    </div>
                )}
                {showModal && (
                    <Modal>
                        <p style={styles.modalContent}>Patient Found:</p>
                        <button onClick={viewPatientProfile} style={styles.button}>View Profile</button>
                        <button onClick={cancelAction} style={styles.button}>Cancel</button>
                    </Modal>
                )}
            </div>
        </Layout>
    );
};

export default ScanQRPage;
