import { useState, useContext, createContext } from 'react'
import { db } from '../Config/firebase'
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'

const DatabaseContext = createContext()

export function useDatabase() {
    return useContext(DatabaseContext)
}

export function DatabaseProvider(props) {
    function handleAdd(reference, objectData) {
        const collectionRef = collection(db, reference)
        return addDoc(collectionRef, objectData)
    }

    function handleGet(reference) {
        const collectionRef = collection(db, reference)
        return getDocs(collectionRef)
    }
    
    function handleUpdate(reference, id, objectData) {
        const documentReference = doc(db, reference, id)
        return updateDoc(documentReference, objectData)
    }
    
    function handleDelete(reference, id) {
        const documentReference = doc(db, reference, id)
        return deleteDoc(documentReference)
    }

    const value = {
        handleAdd,
        handleGet,
        handleDelete,
        handleUpdate
    }

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}