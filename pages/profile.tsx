import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { User } from '../interfaces';
import { useUser } from '../context/UserContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const ProfilePage = () => {
    const { user } = useUser();
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        password: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstname: user.prenom || '',
                lastname: user.nom || '',
                email: user.email || '',
                role: user.role || '',
                password: '',
            });
        }
    }, [user]);

    console.log(user);
    
    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const getProfileImage = () => {
       /* if (!user) return '';
        const role = user.role.toLowerCase();
        const sex = user.sex.toLowerCase();
        return `${sex}${role}.jpg`; */
    };
console.log(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSaveChanges = async (e: React.FormEvent) => {
        e.preventDefault();
       /* if (user) {
            const userRef = doc(db, 'users', user.uid);
            const updatedData = { ...formData };
            delete updatedData.password;

            await updateDoc(userRef, updatedData);

            // If password is changed, update it in Firebase Auth
            if (formData.password) {
                try {
                    const currentUser = auth.currentUser;
                    if (currentUser) {
                        await (currentUser as firebas.User).updatePassword(formData.password);
                    }
                } catch (error) {
                    console.error("Error updating password:", error);
                }
            }

            const updatedUser = { ...user, ...updatedData };
            setFormData({
                ...updatedUser,
                password: ''
            });
            handleEditToggle();
        }*/
    };

    const styles = {
        cardContainer: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        header: {
            fontSize: '24px',
            color: '#2a2a2a',
            marginBottom: '20px',
            textAlign: 'center' as 'center',
        },
        info: {
            marginBottom: '10px',
            fontSize: '16px',
        },
        button: {
            padding: '10px 15px',
            margin: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        input: {
            width: '100%',
            padding: '8px',
            margin: '5px 0',
            display: 'block',
            boxSizing: 'border-box' as 'border-box',
        },
        formLabel: {
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        profileImage: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: 'auto',
            display: 'block',
            marginBottom: '20px',
        },
    };

    return (
        <Layout title="Profil" user={user}>
            <div style={styles.cardContainer}>
                <h1 style={styles.header}>Profil</h1>
                <img src={`/images/profile/${getProfileImage()}`} alt="Profil" style={styles.profileImage}/>
                {!editing ? (
                    <>
                        <p style={styles.info}>Prénom: {user?.prenom}</p>
                        <p style={styles.info}>Nom: {user?.nom}</p>
                        <p style={styles.info}>Email: {user?.email}</p>
                        <p style={styles.info}>Rôle: {user?.role}</p>
                        <button onClick={handleEditToggle} style={styles.button}>Modifier le profil</button>
                    </>
                ) : (
                    <form onSubmit={handleSaveChanges}>
                        <label style={styles.formLabel}>
                            Prénom:
                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required style={styles.input}/>
                        </label>
                        <label style={styles.formLabel}>
                            Nom:
                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required style={styles.input}/>
                        </label>
                        <label style={styles.formLabel}>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input}/>
                        </label>
                        <label style={styles.formLabel}>
                            Mot de passe (laisser vide pour ne pas changer):
                            <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input}/>
                        </label>
                        <label style={styles.formLabel}>
                            Rôle:
                            <input type="text" name="role" value={formData.role} onChange={handleChange} disabled style={styles.input}/>
                        </label>
                        <button type="submit" style={styles.button}>Sauvegarder les modifications</button>
                        <button type="button" onClick={handleEditToggle} style={styles.button}>Annuler</button>
                    </form>
                )}
            </div>
        </Layout>
    );
};

export default ProfilePage;
