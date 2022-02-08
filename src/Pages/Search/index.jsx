import { useState } from 'react'
import { useProducts } from '../../Context/products'
import Product from './Product'
import './styles.css'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const { productsAll } = useProducts()

    return (
        <section className='search_section'>
            <main className='search_container'>
                <div className='search_header'>
                    <input type="text" placeholder='ESCREVA PARA PESQUISAR' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}/>
                </div>
                <div className='search_results'>
                    {productsAll?.filter((product => {
                        if(searchTerm === "") {
                            return product
                        } else if(product.name.toUpperCase().includes(searchTerm)) {
                            return product
                        }
                    })).map((product, key) => (
                        <Product key={key} name={product.name} price={product.price} image={product.colors[0].images[0]} />
                    ))}
                </div>
            </main>
        </section>
    )
}