import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Error() {
    const navigate = useNavigate()

    return (
        <section className='error_section'>
            <main className='error_container'>
                <h1>PÁGINA NÃO ENCONTRADA</h1>
                <p>LAMENTAMOS, MAS ESTA PÁGINA JÁ NÃO ESTÁ DISPONÍVEL NO NOSSO SITE.</p>
                <button className='error_bttn' onClick={() => navigate('/')}>VOLTAR À PÁGINA INICIAL</button>
            </main>
        </section>
    )
}