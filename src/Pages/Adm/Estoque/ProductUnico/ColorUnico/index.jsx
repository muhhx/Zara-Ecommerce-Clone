import { useState } from 'react'
import './styles.css'

export default function ColorUnico({ isShown, color }) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div style={{display: isShown === true ? 'initial' : 'none', paddingLeft: '100px'}}>
            <span style={{cursor: 'pointer'}} onClick={() => setIsOpen(isOpen === true ? false : true)}>{color.color}</span>
            {color.tamanhos.map((tamanho, i) => (
                <div key={Math.random()} style={{display: 'flex', gap: '10px', paddingLeft: '50px'}}>
                    <span style={{display: isOpen === true ? 'initial' : 'none'}}>{tamanho}</span>
                    <span style={{display: isOpen === true ? 'initial' : 'none', color: 'blue'}}>{color.estoque[i]}</span>
                </div>
            ))}
        </div>
    )
}