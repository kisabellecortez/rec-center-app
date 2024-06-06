import { useContext, createContext, useState, useEffect } from 'react'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanges, deleteUser } from 'firebase/auth'
import { auth, db } from '../Firebase.js'

const AuthContext = createContext(); 

export const AuthContextProvider = ({ children }) => {
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const delUser = (user) => {
        return deleteUser(user)
    }

    const createUser = async(email, password, firstName, lastName) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    return(
        <AuthContext.Provider value = {{ signIn, logOut, delUser, createUser }}>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}