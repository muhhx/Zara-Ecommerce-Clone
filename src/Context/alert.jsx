import { useState, useContext, createContext } from "react";

const AlertContext = createContext()

export function useAlert() {
    return useContext(AlertContext)
}

export function AlertProvider(props) {
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState()

    const value = {
        showAlert,
        setShowAlert,
        alertMessage,
        setAlertMessage
    }

    return (
        <AlertContext.Provider value={value}>
            {props.children}
        </AlertContext.Provider>
    )
}