import { useDatabase } from '../../../Context/database'
import './styles.css'

export default function SavedFrame({ item, wishlist, setUpdate, update }) {
    const { handleUpdate } = useDatabase()
    
    function handleDeleteWishlist() {
        const newArr = wishlist.products.filter(prod => prod.id !== item.id)
        const newObj = {
            id: wishlist.id,
            userEmail: wishlist.userEmail,
            products: [...newArr]
        }
        handleUpdate("wishlist", wishlist.id, newObj)
        setUpdate(update + 1)
    }

    return (
        <div className='savedframe_container'>
            <div className='savedframe_image'>
                <img src={item.colors[0].images[0]} alt="Clothing image" />
            </div>
            <span>{item.name}</span>
            <div className='savedframe_info'>
                <span>R$ {item.price}</span>
                <button onClick={() => handleDeleteWishlist()}>X</button>
            </div>
        </div>
    )
}