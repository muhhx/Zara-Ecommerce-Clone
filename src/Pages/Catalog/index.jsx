import { useEffect } from 'react'
import { useCategories } from '../../Context/categories'
import { useCurrentCatalog } from '../../Context/currentCatalog'
import { useProducts } from '../../Context/products'

import Product from '../../Components/Product'
import './styles.css'

export default function Catalog() {
    const { categories } = useCategories()
    const { currentCatalog, setCurrentCatalog, gridRange } = useCurrentCatalog()
    const { productsFiltered } = useProducts()

    //Seta o currentCatalog a patir do URL (caso o usuário entre diretamente pelo link)
    useEffect(() => {
        if (categories && !currentCatalog) {
            const categoryId = window.location.pathname.split('').slice(9).join('')
            const categoryEl = categories.filter(category => category.id === categoryId)
            setCurrentCatalog(categoryEl[0])
        }
    }, [categories])

    return (
        <section className="catalog_container">
            <div className={`catalog_description-${gridRange}`}>
                <h1>{currentCatalog?.name}</h1>
                <p>{currentCatalog?.description}</p>
            </div>
            <div className={`catalog_grid-${gridRange}`}>
                {productsFiltered ? productsFiltered.map(product => (
                    product.colors.map(color => (
                        color.images.slice(0,3).map(image => (
                            <Product key={image} product={product} colorIndex={product.colors.indexOf(color)} range={gridRange} photo={image}/>
                        ))
                    ))
                )): 'Carregando'}
            </div>
        </section>
    )
}