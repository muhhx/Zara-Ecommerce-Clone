import { useState, useContext, createContext} from 'react'

const CurrentCatalogContext = createContext()

export function useCurrentCatalog() {
    return useContext(CurrentCatalogContext)
}

export function CurrentCatalogProvider(props) {
    const [currentCatalog, setCurrentCatalog] = useState()
    const [gridRange, setGridRange] = useState(1)

    const value = {
        currentCatalog,
        setCurrentCatalog,
        gridRange,
        setGridRange
    }

    return (
        <CurrentCatalogContext.Provider value={value}>
            {props.children}
        </CurrentCatalogContext.Provider>
    )
}