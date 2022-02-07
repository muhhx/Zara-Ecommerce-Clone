import { useState } from 'react'
import { useAlert } from '../../../Context/alert'
import { useCart } from '../../../Context/cart'
import './styles.css'

export default function Button({ currentProduct, selectedSize, selectedColor }) {
    const { setShowAlert, setAlertMessage } = useAlert()
    const { cart, addItem, setShowCart } = useCart()
    const [isAdding, setIsAdding] = useState(false)
    console.log(cart)

    function addToCart() {
        setIsAdding(true)
        if(selectedSize.length !== 0) {
            const { name, price, description, discountPrice, id} = currentProduct
            const { color, id: colorId, images, productId, rgb, } = selectedColor
            const filteredProduct = {
                name, price, description, discountPrice, id, quantity: 1, color: {
                    color, colorId, images, productId, rgb, size: selectedSize
                }
            }
            addItem(filteredProduct)
            setShowCart(true)
        } else {
            setAlertMessage('DEVE SELECIONAR UM TAMANHO.')
            setShowAlert(true)
        }
        setIsAdding(false)
    }

    return (
        <button disabled={isAdding} className="item_details-button" onClick={() => addToCart()}>{isAdding === true ? 'ADICIONANDO' : 'ADICIONAR À SACOLA'}</button>
    )
}

//Caso quantity do cart === estoque, impedir de adicionar (apresentar aviso "vc atingiu limite") -- fazer isso aqui e na pagina de carrinho