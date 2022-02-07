import { useState, useContext, createContext } from 'react'

const CurrentProductContext = createContext()

export function useCurrentProduct() {
    return useContext(CurrentProductContext)
}

export function CurrentProductProvider(props) {
    const [currentProduct, setCurrentProduct] = useState()
    const [currentProductIndex, setCurrentProductIndex] = useState()

    const value = {
        currentProduct,
        setCurrentProduct,
        currentProductIndex,
        setCurrentProductIndex
    }

    return (
        <CurrentProductContext.Provider value={value}>
            {props.children}
        </CurrentProductContext.Provider>
    )
}