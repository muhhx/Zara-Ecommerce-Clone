import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigation } from '../../Context/navigation'
import { useCurrentCatalog } from '../../Context/currentCatalog'
import { useCart } from '../../Context/cart'
import { useAuth } from '../../Context/auth'

import navbarSvg from '../../Assets/navbar_menu.svg'
import logoSvg from '../../Assets/logo_zara.svg'
import cartSvg from '../../Assets/cart.svg'
import './styles.css'

export default function Header() {
    const { currentUser } = useAuth()
    const { cartQuantity } = useCart()
    const { setIsOpen } = useNavigation()
    const { gridRange, setGridRange } = useCurrentCatalog()
    const locationURL = useLocation().pathname.slice(0, 8)

    return (
        <header>
            <div className='header'>
                <div className="header_left">
                    <button onClick={() => setIsOpen(true)}>
                        <img src={navbarSvg} alt="Navigation bar" />
                    </button>
                    <Link to={'/'}>
                        <div>
                            <img src={logoSvg} alt="Zara logo" />
                        </div>
                    </Link>
                </div>
                <div className="header_right">
                    <div className='header_right-main'>
                        <Link to={'/search'}>
                            <button className='header_search'>PESQUISA</button>
                        </Link>
                        <div>
                            {currentUser ? <Link to={'/user'}><button>{currentUser.firstName.toUpperCase()}</button></Link> : <Link to={'/login'}><button>LOGIN</button></Link>}
                            <button>AJUDA</button>
                            <Link to={'/cart'}>
                                <button className='header_cart'>
                                    <img src={cartSvg} alt="Shopping cart" />
                                        <span>{cartQuantity}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='header_right-sub'>
                        {locationURL === '/catalog' ? <input onChange={(e) => setGridRange(e.target.value)} value={gridRange} type="range" name="Grid Range" min={1} max={2}/> : ''}
                    </div>
                </div>
            </div>
        </header>
    )
}

//COntexto que retorna se a página de catalogo está aberta = caso esteja, display filter
//Retorna Range escolhido