import { useNavigate } from 'react-router-dom'
import banner from '../../Assets/home_banner.jpg'
import './styles.css'

export default function Home() {
    const navigate = useNavigate()

    return (
        <section className='home_section'>
            <main className='home_container' onClick={() => navigate('/catalog/RYj5X63dbzBi50tU4SHm')}>
                <img src={banner} alt="Banner" />
            </main>
        </section>
    )
}