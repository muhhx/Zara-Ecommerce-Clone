import { db } from '../Config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect, useContext, createContext } from 'react'

const CategoriesContext = createContext()

export function useCategories() {
    return useContext(CategoriesContext)
}

export function CategoriesProvider(props) {
    const [categories, setCategories] = useState()
    const [categoriesMasc, setCategoriesMasc] = useState()
    const [categoriesFem, setCategoriesFem] = useState()
    const [categoriesKids, setCategoriesKids] = useState()
    const categoriasCollectionReferece = collection(db, "categorias")

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(categoriasCollectionReferece)
            const results = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setCategories(results)
            setCategoriesMasc(results.filter(result => result.type === 'MASCULINO'))
            setCategoriesFem(results.filter(result => result.type === 'FEMININO'))
            setCategoriesKids(results.filter(result => result.type === 'INFANTIL'))
        }
        getData()
    }, [])

    const value = {
        categories,
        categoriesMasc,
        categoriesFem,
        categoriesKids
    }

    return (
        <CategoriesContext.Provider value={value}>
            {props.children}
        </CategoriesContext.Provider>
    )
}