import { Link } from 'react-router-dom'
import { useNavigation } from '../../../Context/navigation'
import { useCurrentCatalog } from '../../../Context/currentCatalog'
import './styles.css'

export default function Category({ info }) {
    const { setIsOpen } = useNavigation()
    const { setCurrentCatalog } = useCurrentCatalog()

    function handleNavigationChanges() {
        setIsOpen(false)
        setCurrentCatalog(info)
    }

    return (
        <Link to={`/catalog/${info.id}`} onClick={() => handleNavigationChanges()} className='category_text'>
            <p>{info.name}</p>
        </Link>
    )
}