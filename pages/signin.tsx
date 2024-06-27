import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../public/styles/SignInForm.module.css';
import { FiMail, FiLock } from 'react-icons/fi';
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaGlobe, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { useUser } from '../context/UserContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const SignInPage = ({ members }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user, login, logout } = useUser();

    useEffect(() => {
        if (user) {
            redirectToRolePage(user.role);
        }
    }, [user, router]);
    
    const redirectToRolePage = (role) => {
        switch (role) {
            case 'admin':
            case 'infirmière':
            case 'docteur':
                router.push('/dashboard');
                break;
            default:
                setError('Role non reconnu');
                logout();  // If role is not recognized, log out the user
        }
    };

    const handleClick = (link) => {
        // Handle social media link clicks
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const user = await login(email, password);
            redirectToRolePage(user.role);
        } catch (error) {
            setError('Adresse e-mail ou mot de passe invalide');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title="À Propos & Connexion | Patientcare">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                maxWidth: '1200px',
                minWidth: "800px",
                margin: '0 auto'
            }}>
                {/* Left Column for About Section */}
                <div style={{
                    textAlign: 'center',
                    paddingRight: '55px',
                    paddingLeft: '55px',
                    paddingTop: '50px',
                    flex: "50%",
                }}>
                    <h1>À propos </h1>
                    <p style={{ fontSize: '18px' , paddingBottom:"1rem" }}>
                    Patientcare est une application  innovante pour la gestion des dossiers médicaux en Algérie, développée par des étudiants. Chaque patient reçoit un code QR unique pour un accès sécurisé à ses informations médicales. L'application inclut un système intelligent aidant les médecins dans le diagnostic, améliorant ainsi l'efficacité des soins. Nous sommes les premiers en Algérie à proposer cette solution, visant à rendre les consultations plus fluides et moins stressantes.
                    </p>
                  
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        {members.map(member => (
                            <div key={member.id} style={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '20px',
                                margin: '10px',
                                textAlign: 'center',
                                flex: '1 0 200px'
                            }}>
                                <img src={`/images/${member.image}`} alt={`${member.firstName} ${member.lastName}`}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        marginBottom: '10px'
                                    }} />
                                <div style={{ marginBottom: '10px' }}>
                                    <div>{member.firstName} {member.lastName}</div>
                                    <div>{member.role} - {member.university}, {member.masters}</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                    {Object.entries(member.socialMedia).map(([platform, link]) => (
                                        <a key={platform} href={platform === 'email' ? `mailto:${link}` : link} onClick={() => handleClick(link)} style={{
                                            color: '#007bff',
                                            textDecoration: 'none',
                                            fontSize: '24px',
                                            cursor: 'pointer'
                                        }}>
                                            {platform === 'linkedin' && <FaLinkedin />}
                                            {platform === 'email' && <FaEnvelope />}
                                            {platform === 'phone' && <FaPhone />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column for SignIn Section */}
                <div className={styles.container} style={{ flex: "50%", marginBottom: "10rem" }}>
                    <div className={styles.logo}>
                        <Image src="/images/logo.jpg" alt="Logo" width={250} height={250} />
                    </div>
                    <h1 className={styles.title}>Connexion</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <FiMail className={styles.icon} size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <FiLock className={styles.icon} size={20} />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={styles.input}
                            />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        <button type="submit" className={styles.button} disabled={loading}>
                            {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Se connecter'}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const membersData = await import('../public/data/members.json');
    const members = membersData.default;
    return { props: { members } };
};

export default SignInPage;
