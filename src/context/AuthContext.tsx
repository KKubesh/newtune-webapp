import { signInAnonymously } from "firebase/auth";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

type AuthProps = {
    children: ReactNode;
}

type AuthContextState = {
    currentUser: any;
    setCurrentUser: any;
    signup: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
    authenticateAnonymously: () => void;
}

export const AuthContext = createContext<AuthContextState | undefined>(undefined);

export const AuthProvider = ({
    children,
}: AuthProps) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const authenticateAnonymously = async () => {
        return await signInAnonymously(auth);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            // if (!user) {
            //     console.log("Now Authenticating")
            //     authenticateAnonymously();
            // }
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                signup,
                login,
                logout,
                authenticateAnonymously,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used within the AuthProvider Context",
        );
    }
    return context;
}