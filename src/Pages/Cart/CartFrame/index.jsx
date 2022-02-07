import { useState, useEffect } from 'react'
import { useCart } from '../../../Context/cart'
import plusSvg from '../../../Assets/plus.svg'
import minusSvg from '../../../Assets/minus.svg'
import './styles.css'

export default function CartFrame({ item, calculatesTotalPrice }) {
    const [counterState, setCounterState] = useState()
    const { deleteItem, sumItem, subItem } = useCart()

    useEffect(() => {
        setCounterState(item?.quantity)
    }, [])

    useEffect(() => {
        calculatesTotalPrice()
    }, [deleteItem, handleAdd, handleSub])

    function handleAdd() {
        sumItem(item)
        setCounterState(counterState+1)
    }   

    function handleSub() {
        subItem(item)
        setCounterState(counterState-1)
    }

    return (
        <div className='cartframe_container'>
            <span>{item?.name}</span>
            <div className='cartframe_wrapper'>
                <div className='cartframe_image'>
                    <img src={item?.color.images[0]} alt="Clothing image" />
                </div>
                <div className='cartframe_info'>
                    <div className='cartframe_upper'>
                        <span>{item?.color.color}</span>
                        <span>{item?.color.size[0]}</span>
                        <div className='cartframe_additem'>
                            <button onClick={() => handleSub()}>
                                <img src={minusSvg} alt="Minus" />
                            </button>
                            <span>{counterState}</span>
                            <button onClick={() => handleAdd()}>
                                <img src={plusSvg} alt="Plus" />
                            </button>
                        </div>
                    </div>
                    <span>R$ {item?.price}</span>
                    <button className='cartframe_deletebttn' onClick={() => deleteItem(item)}>ELIMINAR</button>
                </div>
            </div>
        </div>
    )
}