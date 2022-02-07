import { useState } from 'react'
import { useEdit } from '../../../../Context/edit'
import ColorUnico from './ColorUnico'
import './styles.css'

export default function ProductUnico({ product }) {
    const [isShown, setIsShown] = useState(false)
    const { setShowEdit, setEditProduct } = useEdit()

    function handleProduct() {
        setShowEdit(true)
        setEditProduct(product)
    }

    return (
        <>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <button onClick={handleProduct} className='edit_editbttn'>EDIT</button>
                <span key={product.id} style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={() => setIsShown(isShown === true ? false : true)}>{product.name}</span>
            </div>
            {product.colors.map(color => (
                <ColorUnico key={Math.random()} color={color} isShown={isShown} />
            ))}
        </>
    )
}