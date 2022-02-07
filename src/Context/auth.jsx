import { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../Config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useDatabase } from '../Context/database'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { handleGet } = useDatabase()
    const [currentUser, setCurrentUser] = useState()


    function handleSignup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function handleLogin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function handleLogout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            async function getData() {
                const data = await handleGet("users")
                const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
                const filteredUser = users.filter(databaseUser => databaseUser.email === user?.email)
                setCurrentUser(!user ? null : filteredUser[0])
            }
            getData()
        })
        return unsubscribe
    }, [])

    const value = {
        handleSignup,
        handleLogin,
        handleLogout,
        currentUser
    }


    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}