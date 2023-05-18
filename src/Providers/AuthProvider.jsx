import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext('null');
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signOut, onAuthStateChanged   } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, useLoader] = useState(true);
    const createUser = (email, password) => {
        useLoader(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email, password) => {
        useLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = (provider) => {
        useLoader(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            useLoader(false);
        })
         return () => {
             unsubscribe();
         }
     },[])
    const logOut = () => {
        useLoader(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        userLogin,
        googleSignIn,
        logOut,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;