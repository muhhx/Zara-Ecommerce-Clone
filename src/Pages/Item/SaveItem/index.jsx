import { useAuth } from '../../../Context/auth'
import { useDatabase } from '../../../Context/database'
import { useNavigate } from 'react-router-dom'

import saveSvg from '../../../Assets/save.svg'
import './styles.css'

export default function SaveItem({ currentProduct }) {
    const { currentUser } = useAuth()
    const { handleUpdate, handleGet } = useDatabase()
    const navigate = useNavigate()

    async function handleSaveItem() {
        if(currentUser) {
            const wishlistRaw = await handleGet("wishlist")
            const wishlistFiltered = wishlistRaw.docs.map(doc => ({...doc.data(), id: doc.id}))
            const wishlistFinal = wishlistFiltered.filter(item => item.userEmail === currentUser?.email)

            const alreadyExists = wishlistFinal[0]?.products.filter(product => product.id === currentProduct.id)
            if(alreadyExists?.length !== 0) {
                return navigate('/cart')
            }

            const newObject = {
                userEmail: wishlistFinal[0].userEmail,
                products: [...wishlistFinal[0].products, currentProduct]
            }

            await handleUpdate("wishlist", wishlistFinal[0].id, newObject)
            navigate('/cart')
        } else {
            navigate('/login')
        }
    }

    return (
        <button className='item_details-save' onClick={handleSaveItem}>
            <img src={saveSvg} alt="Save button" />
        </button>
    )
}