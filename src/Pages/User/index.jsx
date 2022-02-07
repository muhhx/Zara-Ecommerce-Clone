import { useEffect, useState } from 'react'
import { useAuth } from '../../Context/auth'
import { useNavigate } from 'react-router-dom'

import Options from './Options'
import Pedidos from './Pedidos'
import Perfil from './Perfil'
import Sair from './Sair'
import './styles.css'

export default function User() {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const [selectedSection, setSelectedSection] = useState(0)
    let section
    const options = {
        selectedSection,
        setSelectedSection
    }

    switch(selectedSection) {
        case 0: section = <Pedidos />; break;
        case 1: section = <Perfil />; break;
        case 2: section = <Sair />
    }

    useEffect(() => {
        if(currentUser.type === 'Adm') {
            navigate('/adm')
        }
    }, [currentUser])

    return (
        <section className='user_section'>
            <main className='user_container'>
                <div className='user_options'>
                    <Options options={options} value={0} message={'PEDIDOS'}/>
                    <Options options={options} value={1} message={'PERFIL'}/>
                    <Options options={options} value={2} message={'SAIR'}/>
                </div>
                <div className='user_content'>
                    {section}
                </div>
            </main>
        </section>
    )
}