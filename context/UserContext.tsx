import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useRouter } from 'next/router';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                const userDoc = await getDoc(doc(db, 'users', authUser.uid));
                if (userDoc.exists()) {
                    const userData = { ...authUser, ...userDoc.data() };
                    setUser(userData);
                    sessionStorage.setItem('user', JSON.stringify(userData));
                }
            } else {
                setUser(null);
                sessionStorage.removeItem('user');
            }
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const authUser = userCredential.user;
            const userDoc = await getDoc(doc(db, 'users', authUser.uid));
            if (userDoc.exists()) {
                const userData = { ...authUser, ...userDoc.data() };
                sessionStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                console.log(userData);
                
                return userData;
            } else {
                throw new Error("User data not found");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;  // Re-throw the error to handle it in the component
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            sessionStorage.removeItem('user');
            setUser(null);
            router.push('/signin');  // Redirect to the sign-in page
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const value = { user, login, logout };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};