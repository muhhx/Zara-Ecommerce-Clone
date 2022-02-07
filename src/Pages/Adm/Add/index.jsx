import { useState, useEffect } from 'react'

import Cores from './Cores'
import './styles.css'

export default function Add() {
    const [nameInput, setNameInput] = useState()
    const [descInput, setDescInput] = useState()
    const [priceInput, setPriceInput] = useState()
    const [newInput, setNewInput] = useState(true)
    const [sectionInput, setSectionInput] = useState(0)
    const [categoryInput, setCategoryInput] = useState()

    const [productState, setProductState] = useState()
    const [refresh, setRefresh] = useState(0)
    const [addColorsRefresh, setAddColorsRefresh] = useState(false)

    useEffect(() => {
        const productObject = {
            name: '',
            description: '',
            price: 0,
            isNew: true,
            colors: []
        }
        setProductState(productObject)
    }, [])

    function handleAddProduct() {
        setRefresh(refresh + 1)
        setAddColorsRefresh(true)
        productState.name = nameInput
        productState.description = descInput
        productState.price = priceInput
        productState.isNew = newInput
        console.log(productState)
    }

    function handleAddColor() {
        const colorObject = {
            color: '',
            productId: '',
            rgb: '',
            images: [],
            tamanhos: [],
            estoque: []
        }
        productState.colors.push(colorObject)
        setRefresh(refresh + 1)
    }

    return (
        <div className='add_container'>
            <h1>Adicionar produto</h1>
            <div className='add_info-basic'>
                <div className='add_info-container'>
                    <span className='add_title'>Informações básicas</span>
                    <div className='add_info'>
                        <span>Nome:</span>
                        <input className='add_input' type="text" onChange={(e) => setNameInput(e.target.value)}/>
                    </div>
                    <div className='add_info'>
                        <span>Descrição:</span>
                        <input className='add_input' type="text" onChange={(e) => setDescInput(e.target.value)}/>
                    </div>
                    <div className='add_info'>
                        <span>Preço:</span>
                        <input className='add_input' type="number" onChange={(e) => setPriceInput(e.target.value)}/>
                    </div>
                    <div className='add_info'>
                        <span>Is New:</span>
                        <div className='add_info-boolean'>
                            <span onClick={() => setNewInput(true)} style={{fontWeight: newInput === true ? '700' : 'initial' }}>True</span>    
                            <span onClick={() => setNewInput(false)} style={{fontWeight: newInput === false ? '700' : 'initial' }}>False</span>    
                        </div>
                    </div>
                </div>
                <div className='add_info-container'>
                    <span className='add_title'>Categoria</span>
                    <div className='add_info-boolean'>
                        <span onClick={() => setSectionInput(0)} style={{fontWeight: sectionInput === 0 ? '700' : 'initial' }}>Fem</span>    
                        <span onClick={() => setSectionInput(1)} style={{fontWeight: sectionInput === 1 ? '700' : 'initial' }}>Masc</span>    
                        <span onClick={() => setSectionInput(2)} style={{fontWeight: sectionInput === 2 ? '700' : 'initial' }}>Kids</span>    
                    </div>
                    <div className='add_info'>
                        <span>Category:</span>
                        <input className='add_input' type="text" onChange={(e) => setCategoryInput(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div>
                <span className='add_title'>Cores e Estoque</span>
                <div className='add_color-section'>
                    {productState?.colors.map((color, i) => (
                        <Cores key={Math.random()} counter={i} obj={color} productState={productState} addColorsRefresh={addColorsRefresh} refresh={refresh} setRefresh={setRefresh}/>
                    ))}
                    <button className='add_color-button' onClick={handleAddColor}>+</button>
                </div>
            </div>
            <button className='enviar_button' onClick={handleAddProduct}>Add Poduct</button>
        </div>
    )
}

//Objeto base contendo 1 cor e 1 estoque para essa cor
//QUando você clica em adicionar cor, add uma array
//QUando voce clica em adicionar estoque, add uma array de tamanho e me 

//Quando você clicar em adicionar, vai criar um objeto global pegando todos os inputs
//Vai handleAdd e adicionar esses produtos