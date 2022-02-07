import { useState, useContext, createContext } from 'react'

const NavigationContext = createContext()

export function useNavigation() {
    return useContext(NavigationContext)
}

export function NavigationProvider(props) {
    const [isOpen, setIsOpen] = useState(false)

    const value = {
        isOpen,
        setIsOpen
    }

    return (
        <NavigationContext.Provider value={value}>
            {props.children}
        </NavigationContext.Provider>
    )
}