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

    const updatePassword = () => {
        // return auth.confirmPasswordReset();
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
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
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthState must be used within the AuthProvider Context",
        );
    }
    return context;
}