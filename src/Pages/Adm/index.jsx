import { useState } from 'react'

import Controle from './Controle'
import Estoque from './Estoque'
import Add from './Add'
import Logout from './Logout'
import './styles.css'

export default function Adm() {
    const [currentSection, setCurrentSection] = useState(0)
    
    let section
    switch(currentSection) {
        case 0: section = <Estoque />; break;
        case 1: section = <Controle />; break;
        case 3: section = <Logout />
    }

    return (
        <section className='adm_section'>
            <main className='adm_container'>
                <div className='adm_options'>
                    <span onClick={() => setCurrentSection(0)} style={{fontWeight: currentSection === 0 ? '700' : 'initial'}}>ESTOQUE</span>
                    <span onClick={() => setCurrentSection(1)}  style={{fontWeight: currentSection === 1 ? '700' : 'initial'}}>PEDIDOS</span>
                    <span onClick={() => setCurrentSection(3)}  style={{fontWeight: currentSection === 3 ? '700' : 'initial'}}>SAIR</span>
                </div>
                <div className='adm_content'>
                    {section}
                </div>
            </main>
        </section>
    )
}
