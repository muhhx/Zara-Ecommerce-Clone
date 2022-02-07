import { useState, useContext, createContext } from 'react'

const EditContext = createContext()

export function useEdit() {
    return useContext(EditContext)
}

export function EditProvider(props) {
    const [showEdit, setShowEdit] = useState(false)
    const [editProduct, setEditProduct] = useState()


    const value = {
        showEdit,
        setShowEdit,
        editProduct,
        setEditProduct
    }

    return (
        <EditContext.Provider value={value}>
            {props.children}
        </EditContext.Provider>
    )
}