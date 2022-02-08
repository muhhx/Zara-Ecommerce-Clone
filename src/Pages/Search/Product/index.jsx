import './styles.css'

export default function Product({ name, price, image }) {
    return (
        <div className='productsearch_container'>
            <div className='productsearch_image'>
                <img src={image} alt="Product Image" />
            </div>
            <div className='productsearch_description'>
                <span className='productsearch_name'>{name}</span>
                <span>R${price}</span>
            </div>
        </div>
    )
}