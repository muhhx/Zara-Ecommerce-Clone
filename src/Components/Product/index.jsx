import { Link } from 'react-router-dom'
import { useCurrentProduct } from '../../Context/currentProduct'
import './styles.css'

export default function Product({ product, colorIndex, photo, range }) {
    const { setCurrentProduct, setCurrentProductIndex } = useCurrentProduct()

    function handleProduct() {
        setCurrentProduct(product)
        setCurrentProductIndex(colorIndex)
    }

    return (
        <div className="product_container">
            <Link className="product_container-link" to={`/product/${product.id}`} onClick={() => handleProduct()}>
                <div className="product_image-container">
                    <img src={photo} alt="Product Image"/>
                </div>
                <div className={`product_description-${range}`}>
                    <span>{product.name}</span>
                    <span>{`R$${product.price}`}</span>
                </div>
            </Link>
        </div>
    )
}