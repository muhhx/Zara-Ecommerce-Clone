import { useCart } from '../../../Context/cart'
import './styles.css'

export default function Artigos() {
    const { cart } = useCart()
    
    return (
        <div>
            <h1>Artigos</h1>
            <div className='artigos_images'>
                {cart.map(cartItem => (
                    <div key={Math.random()} className='artigos_image'>
                        <img src={cartItem.color.images[0]} alt="Product image" />
                    </div>
                ))}
            </div>
        </div>
    )
}