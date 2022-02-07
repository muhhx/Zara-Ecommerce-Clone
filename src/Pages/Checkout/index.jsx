import { useConfirmation } from '../../Context/confirmation'
import Adress from './Adress'
import Artigos from './Artigos'
import './styles.css'

export default function Checkout() {
    const { setShowConfirmation } = useConfirmation()

    return (
        <section className='checkout_section'>
            <main className='checkout_container'>
                <Adress />
                <Artigos />
                <button className='checkout_button' onClick={() => setShowConfirmation(true)}>COMPRAR</button>
            </main>
        </section>
    )
}
