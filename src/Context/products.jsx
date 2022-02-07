import { db } from '../Config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState, useContext, createContext } from 'react'
import { useCurrentCatalog } from './currentCatalog'

const ProductsContext = createContext()

export function useProducts() {
    return useContext(ProductsContext)
}

export function ProductsProvider(props) {
    const { currentCatalog } = useCurrentCatalog()
    const productsCollectionReference = collection(db, "produtos")
    const optionsCollectionReference = collection(db, "options")
    const estoqueCollectionReference = collection(db, "estoque")

    const [products, setProducts] = useState()
    const [options, setOptions] = useState()
    const [estoque, setEstoque] = useState()

    const [productsAll, setProductsAll] = useState()
    const [productsFiltered, setProductsFiltered] = useState()

    //Importa os produtos > opções > estoque
    useEffect(() => {
        async function getProducts() {
            const data = await getDocs(productsCollectionReference)
            const results = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(results)
        }
        async function getOptions() {
            const data = await getDocs(optionsCollectionReference)
            const results = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setOptions(results)
        }
        async function getEstoque() {
            const data = await getDocs(estoqueCollectionReference)
            const results = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setEstoque(results)
        }
        getProducts()
        getOptions()
        getEstoque()
    }, [])
    
    //Cria objeto único, contento todas as informações de cores e estoque para cada produto (usado para ter controle de estoque ADM e Pesquisa usuario)
    useEffect(() => {
        if(products && options && estoque) {
            let arr = [];
            products.forEach(product => {
                const cores = options.filter(option => option.productId === product.id)
                const newCores = cores.map(cor => {
                    const [stock] = estoque.filter(est => est.optionId === cor.id)
                    const keys = Object.keys(stock).filter(key => key !== 'optionId' && key !== 'id')
                    const values = Object.values(stock).filter(key => typeof key !== 'string')
                    const corFinal = { ...cor, tamanhos: keys, estoque: values, estoqueId: stock.id }
                    return corFinal
                })
                const produtoFinal = { ...product, colors: newCores }
                arr.push(produtoFinal)
            })
            setProductsAll(arr)
        }
    }, [products, options, estoque])

    //Filtra os produtos de acordo com a categoria atual selecionada
    useEffect(() => {
        if(currentCatalog) {
            let arr = []
            currentCatalog.productsId.forEach(item => {
                const [filtered] = productsAll.filter(product => product.id === item)
                arr.push(filtered)
            })
            setProductsFiltered(arr)
        }
    }, [currentCatalog])

    //Filtrar os produtos novos (criar objeto no bd do produto)


    const value = {
        productsAll,
        productsFiltered
    }

    return (
        <ProductsContext.Provider value={value}>
            {props.children}
        </ProductsContext.Provider>
    )
}