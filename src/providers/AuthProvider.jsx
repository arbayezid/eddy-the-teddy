import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])




    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;