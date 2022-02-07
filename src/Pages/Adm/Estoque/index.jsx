import { useProducts } from '../../../Context/products'
import ProductUnico from './ProductUnico'
import './styles.css'

export default function Estoque() {
    const { productsAll } = useProducts()


    return(
        <div>
            <h1>Estoque</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {productsAll.map(product => (
                    <ProductUnico key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}