import { Link } from 'react-router-dom'
import { useCart } from '../../Context/cart'

import closeSvg from '../../Assets/close_menu.svg'
import Frame from './Frame'
import './styles.css'

export default function SidebarCart() {
    const { setShowCart, cart } = useCart()
    
    return (
        <section className='sidebarcart_background'>
            <div className='sidebarcart_exit' onClick={() => setShowCart(false)}/>
            <aside className='sidebarcart_container'>
                <button onClick={() => setShowCart(false)} className='sidebarcart_exitbutton'>
                    <img src={closeSvg} alt="Close button" />
                </button>
                <h1>CESTO</h1>
                <div className='sidebarcart_items'>
                    {cart.map(item => (
                        <Frame key={Math.random()} item={item} />
                    ))}
                </div>
                <Link to={'/cart'}>
                    <button className='sidebarcart_cartbutton' onClick={() => setShowCart(false)}>
                        IR PARA A SACOLA
                    </button>
                </Link>
            </aside>
        </section>
    )
}