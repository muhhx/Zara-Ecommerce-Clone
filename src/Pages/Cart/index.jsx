import { useState, useEffect } from 'react'
import { useCart } from '../../Context/cart'
import { useAuth } from '../../Context/auth'
import { useDatabase } from '../../Context/database'
import { useNavigate } from 'react-router-dom'

import CartFrame from './CartFrame'
import SavedFrame from './SavedFrame'
import './styles.css'

export default function Cart() {
    const [update, setUpdate] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)
    const [wishlist, setWishlist] = useState()
    const { cartQuantity, cart } = useCart()
    const { currentUser } = useAuth()
    const { handleGet } = useDatabase()
    const navigate = useNavigate()

    useEffect(() => {
        calculatesTotalPrice()
    }, [])

    useEffect(() => {
        if(currentUser) {
            async function getData() {
                const wishlistRaw = await handleGet("wishlist")
                const wishlistFiltered = wishlistRaw.docs.map(doc => ({...doc.data(), id: doc.id}))
                const wishlistFinal = wishlistFiltered.filter(item => item.userEmail === currentUser.email)
                setWishlist(wishlistFinal)
            }
            getData()
        }
    }, [currentUser, update])

    function calculatesTotalPrice() {
        const result = cart.reduce((counter, cartItem) => {
            return counter += (cartItem.price * cartItem.quantity)
        }, 0)
        setTotalPrice(result)
    }

    return (
        <>
            <section className='cartpage_section'>
                <div className='cartpage_container'>
                    <div className='cartpage_option'>
                        <span className='cartpage_header' onClick={() => setSelectedOption(0)} style={{fontWeight: selectedOption === 0 ? '700' : 'initial'}}>SACOLA DE COMPRAS ({cartQuantity})</span>
                        {currentUser ? <span className='cartpage_header' onClick={() => setSelectedOption(1)} style={{fontWeight: selectedOption === 1 ? '700' : 'initial'}}>LISTA DE DESEJOS</span> : ''}
                    </div>
                    {selectedOption === 0 ? <div>
                        {cartQuantity === 0 ?
                            <div className='cartpage_empty'>A sua sacola está vazia</div> :
                            <div className='cartpage_itens'>
                                {cart.map(item => <CartFrame key={Math.random()} item={item} calculatesTotalPrice={calculatesTotalPrice}/>)}
                            </div>
                        } </div> :
                        <div>
                            {wishlist[0].products.length === 0 ? 
                                <div className='cartpage_empty'>NÃO EXISTEM ARTIGOS GUARDADOS NA SUA WISHLIST</div> :
                                <div className='cartpage_itens'>{wishlist[0].products?.map(item => <SavedFrame update={update} setUpdate={setUpdate}wishlist={wishlist[0]} item={item}/>)}</div>
                            }
                        </div>
                    }
                </div>
            </section>
            {cartQuantity === 0 ? '' : <div className='cartpage_bar'>
                <span>TOTAL R${totalPrice}</span>
                <button className='checkout_bttn' onClick={() => navigate('/checkout')}>CONTINUAR</button>    
            </div>}
        </>
    )
}