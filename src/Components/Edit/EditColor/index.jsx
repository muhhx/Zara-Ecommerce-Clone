import { useEffect, useState } from 'react'
import './styles.css'

export default function EditColor({ color, newProduct, refreshed, setRefreshed }) {
    const [editColorName, setEditColorName] = useState(false)
    const [editRgb, setEditRgb] = useState(false)

    const [colorNameChange, setColorNameChange] = useState()
    const [rgbChange, setRgbChange] = useState()

    const [realTimeStorage, setRealTimeStorage] = useState()
    const [refresh, setRefresh] = useState(0)
    
    useEffect(() => {
        if(color) {
            setRealTimeStorage(color.estoque)
        }
    }, [color, refresh])

    function handleColorNameChange() {
        color.color = colorNameChange
        setEditColorName(false)
    }

    function handleRgbChange() {
        if(rgbChange) {
            const r = parseInt(rgbChange.substr(1,2), 16)
            const g = parseInt(rgbChange.substr(3,2), 16)
            const b = parseInt(rgbChange.substr(5,2), 16)
            const result = `rgb(${r},${g},${b})`
            color.rgb = result
        }
        setEditRgb(false)
    }

    function storageChangePlus(n, i) {
        const newNumber = n + 1
        color.estoque[i] = newNumber
        setRefresh(refresh + 1)
    }

    function storageChangeMinus(n, i) {
        if(n > 0) {
            const newNumber = n - 1
            color.estoque[i] = newNumber
            setRefresh(refresh + 1)
        } 
    }

    function deleteColor() {
        const newColors = newProduct.colors.filter(colorProd => colorProd.id !== color.id)
        newProduct.colors = newColors
        setRefreshed(refreshed + 1)
    }

    function handleDeleteImage(imageSelected) {
        const newImages = color.images.filter(imageFilter => imageFilter !== imageSelected)
        color.images = newImages
        setRefreshed(refreshed + 1)
    }

    return (
        <div className='editcolor_section'>
            <div className='editcolor_container'>
                <div className='edit_content-container'>
                    <span className='edit_title'>COLOR NAME:</span>
                    {
                        editColorName === false ?
                        <span className='edit_name' onClick={() => setEditColorName(true)}>{color.color}</span> :
                        <div className='edit_content-wrapper'>
                            <input className='edit_input' onChange={(e) => setColorNameChange(e.target.value)}></input>
                            <button className='edit_button' onClick={handleColorNameChange}>CONFIRM</button>
                        </div>
                    }
                </div>

                <div className='edit_content-container'>
                    <span className='edit_title'>RGB:</span>
                    {
                        editRgb === false ?
                        <div className='rgb_edit' style={{backgroundColor: `${color.rgb}`}} onClick={() => setEditRgb(true)}></div> :
                        <div className='edit_content-wrapper'>
                            <input className='edit_rgbinput' type="color" onChange={(e) => setRgbChange(e.target.value)}/>
                            <button className='edit_button' onClick={handleRgbChange}>CONFIRM</button>
                        </div>
                    }
                </div>

                <div>
                    <span className='edit_title'>ESTOQUE:</span>
                    <div className='edit_content-estoque'>
                        {realTimeStorage?.map((storage, i) => (
                            <div className='edit_content-class' key={color.tamanhos[i]}>
                                <span className='edit_title'>{color.tamanhos[i]}:</span>
                                <div className='edit_content-flex'>
                                    <button onClick={() => storageChangeMinus(color.estoque[i], i)}>-</button>
                                    <span className='edit_title'>{storage}</span>
                                    <button onClick={() => storageChangePlus(color.estoque[i], i)}>+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className='edit_delcolor' onClick={deleteColor}>DELETAR</button>
            </div>
            <div className='editcolor_imagesection'>
                {color.images.map(image => (
                    <div key={image} className='imageedit_container'>
                        <div className='imageedit_image'>
                            <img src={image} alt="" />
                        </div>
                        <button onClick={() => handleDeleteImage(image)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}