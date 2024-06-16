import React, { useState } from 'react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../config/firebase';
import styles from '../../public/styles/CreateUserForm.module.css';

export type ChampsFormulaireUtilisateur = {
    prenom: string;
    nom: string;
    email: string;
    motDePasse: string;
    role: 'admin' | 'docteur' | 'infirmière';
    sex: string;
    statut: 'actif' | 'inactif';
};

type Props = {
    onSubmit: (utilisateur: ChampsFormulaireUtilisateur) => void;
};

const FormulaireCreationUtilisateur: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ChampsFormulaireUtilisateur>({
        prenom: '',
        nom: '',
        email: '',
        motDePasse: '',
        role: 'admin',  // Default role
        sex: '',
        statut: 'actif',
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            // Create user with email and password in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.motDePasse);
            const user = userCredential.user;

            // Add user to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                prenom: formData.prenom,
                nom: formData.nom,
                email: formData.email,
                role: formData.role,  // Use the selected role
                sex: formData.sex,
                statut: formData.statut,
                created_at: serverTimestamp(), // Set the created_at timestamp
                updated_at: serverTimestamp(), // Set the updated_at timestamp
            });

            onSubmit(formData); // Call the onSubmit prop function
        } catch (error) {
            setError('Error creating user: ' + error.message);
            console.error('Error adding user: ', error);
        }
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.header}>Créer Utilisateur</h1>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.formLabel}>Prénom:</label>
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Nom:</label>
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Mot de Passe:</label>
                    <input
                        type="password"
                        name="motDePasse"
                        value={formData.motDePasse}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Rôle:</label>
                    <select name="role" value={formData.role} onChange={handleChange} required className={styles.select}>
                        <option value="admin">Admin</option>
                        <option value="docteur">Docteur</option>
                        <option value="infirmière">Infirmière</option>
                    </select>
                </div>
                <div>
                    <label className={styles.formLabel}>Sexe:</label>
                    <select name="sex" value={formData.sex} onChange={handleChange} required className={styles.select}>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>
                <div>
                    <label className={styles.formLabel}>Statut:</label>
                    <select name="statut" value={formData.statut} onChange={handleChange} required className={styles.select}>
                        <option value="actif">Actif</option>
                        <option value="inactif">Inactif</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Créer</button>
            </form>
        </div>
    );
};

export default FormulaireCreationUtilisateur;
