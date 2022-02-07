import { useEffect, useState, useContext, createContext } from 'react'
import { useAlert } from './alert'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider(props) {
    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const { setAlertMessage, setShowAlert } = useAlert()

    useEffect(() => {
        let contador = 0
        cart.forEach(cartItem => {
            contador += cartItem.quantity
        })
        setCartQuantity(contador)
    }, [addItem, deleteItem, subItem, sumItem])

    function addItem(item) {
        let contador=0
        cart.forEach(cartItem => {
            if(cartItem.color.colorId === item.color.colorId && cartItem.color.size[0] === item.color.size[0]) {
                if (cartItem.quantity === cartItem.color.size[1]) {
                    setAlertMessage('LIMITE DE ESTOQUE DO PRODUTO ATINGIDO!')
                    return setShowAlert(true)
                } else {
                    return cartItem.quantity++
                }
            }
            contador++
        })
        if(contador === cart.length) {
            setCart([...cart, item])
        }
    }

    function deleteItem(item) {
        const filteredIndex = cart.findIndex(cartItem => cartItem.color.colorId === item.color.colorId && cartItem.color.size[0] === item.color.size[0])
        const filteredArray = cart.filter(cartItem => cart.indexOf(cartItem) !== filteredIndex)
        setCart(filteredArray)
    }

    function subItem(item) {
        cart.forEach(cartItem => {
            if(cartItem.color.colorId === item.color.colorId && cartItem.color.size[0] === item.color.size[0]) {
                if (cartItem.quantity === 1) {
                    deleteItem(item)
                } else {
                    cartItem.quantity--
                }
            }
        })
    }

    function sumItem(item) {
        cart.forEach(cartItem => {
            if(cartItem.color.colorId === item.color.colorId && cartItem.color.size[0] === item.color.size[0]) {
                if (cartItem.quantity === cartItem.color.size[1]) {
                    setAlertMessage('LIMITE DE ESTOQUE DO PRODUTO ATINGIDO!')
                    setShowAlert(true)
                } else {
                    cartItem.quantity++
                }
            }
        })
    }

    const value = {
        cart,
        cartQuantity,
        showCart,
        setShowCart,
        addItem,
        deleteItem,
        sumItem,
        subItem,
        setCart
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}
