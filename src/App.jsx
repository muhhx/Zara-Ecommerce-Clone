import { BrowserRouter } from 'react-router-dom'
import Routing from './Routes/routing'

import { useCart } from './Context/cart'
import { useAlert } from './Context/alert'
import { useNavigation } from './Context/navigation'
import { useConfirmation } from './Context/confirmation'
import { useEdit } from './Context/edit'

import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Alert from './Components/Alert'
import Edit from './Components/Edit'
import SidebarCart from './Components/SidebarCart'
import Buy from './Pages/Checkout/Buy'
import './App.css'

export default function App() {
  const { showConfirmation } = useConfirmation()
  const { showCart } = useCart()
  const { showAlert } = useAlert()
  const { showEdit } = useEdit()
  const { isOpen } = useNavigation()

  document.body.style.overflow = showAlert || isOpen || showCart || showConfirmation || showEdit === true ? 'hidden' : 'initial'

  return (
    <>
      <BrowserRouter>
        <main>
          {showConfirmation === true ? <Buy /> : ''}
          {showAlert === true ? <Alert /> : ''}
          {showCart === true ? <SidebarCart /> : ''}
          {showEdit === true ? <Edit /> : ''}
          {isOpen === true ? <Navigation /> : ''}
          <Header />
          <Routing />
          {/* <Footer /> */}
        </main>
      </BrowserRouter>
    </>
  )
}