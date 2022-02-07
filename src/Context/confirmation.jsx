import { useState, useContext, createContext } from "react";

const ConfirmationContext = createContext()

export function useConfirmation() {
    return useContext(ConfirmationContext)
}

export function ConfirmationProvider(props) {
    const [showConfirmation, setShowConfirmation] = useState(false)

    const value = {
        showConfirmation,
        setShowConfirmation
    }

    return (
        <ConfirmationContext.Provider value={value}>
            {props.children}
        </ConfirmationContext.Provider>
    )
}