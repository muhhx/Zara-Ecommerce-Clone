import { useState, useEffect } from 'react'
import './styles.css'

export default function Cores({ counter, obj, productState, addColorsRefresh, refresh, setRefresh }) {
    const [colorNameInput, setColorNameInput] = useState()
    const [rgbInput, setRgbInput] = useState()

    const [sizeNameInput, setSizeNameInput] = useState()
    const [sizeStorageInput, setSizeStorageInput] = useState()

    useEffect(() => {
        console.log('teste')
        if(addColorsRefresh === true) {
            console.log(obj)
            console.log(colorNameInput)
            obj.color = colorNameInput
            if(rgbInput) {
                const r = parseInt(rgbInput.substr(1,2), 16)
                const g = parseInt(rgbInput.substr(3,2), 16)
                const b = parseInt(rgbInput.substr(5,2), 16)
                obj.rgb = `rgb(${r},${g},${b})`
            }
        }
    }, [addColorsRefresh])

    return (
        <div className='add_color-container'>
            <span>COLOR {counter + 1}</span>
            <div className='add_info'>
                <span>Name:</span>
                <input className='add_input' type="text" onChange={(e) => setColorNameInput(e.target.value)}/>
            </div>
            <div className='add_info'>
                <span>Rgb:</span>
                <input type="color" onChange={(e) => setRgbInput(e.target.value)}/>
            </div>
            <div>
                <span>Images</span>
                <button className='add_button'>Add Image</button>
            </div>
            <div className='add_estoque-section'>
                <div className='add_estoque-container'>
                    <div className='add_info'>
                        <span>Tamanho:</span>
                        <input className='add_input-estoque' type="text" onChange={(e) => setSizeNameInput(e.target.value)}/>
                    </div>
                    <div className='add_info'>
                        <span>Estoque:</span>
                        <input className='add_input-estoque' type="number" onChange={(e) => setSizeStorageInput(e.target.value)}/>
                    </div>
                </div>
            </div>
            <button className='add_estoque-button'>+</button>
        </div>
    )
}