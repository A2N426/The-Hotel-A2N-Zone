import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const UserContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)


    const registerWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const registerWithGit = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const verification = (user) => {
        return sendEmailVerification(user)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const userInfo = {
        registerWithGoogle,
        registerWithGit,
        register,
        verification,
        logIn,
        resetPassword,
        logOut,
        user,
        loading
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;