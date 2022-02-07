import { useState, useEffect } from 'react'
import { useCurrentProduct } from '../../Context/currentProduct'
import { useProducts } from '../../Context/products'

import Information from './Information'
import Images from './Images'
import Description from './Desciption'
import Color from './Color'
import Button from './Button'
import SaveItem from './SaveItem'
import './styles.css'

export default function Item() {
    const { productsAll } = useProducts()
    const { currentProduct, setCurrentProduct, currentProductIndex, setCurrentProductIndex } = useCurrentProduct()
    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState([])

    useEffect(() => {
        if(productsAll && !currentProduct) {
            const categoryId = window.location.pathname.split('').slice(9).join('')
            const categoryEl = productsAll.filter(product => product.id === categoryId)
            setCurrentProduct(categoryEl[0])
            setCurrentProductIndex(0)
        }
    }, [productsAll])

    useEffect(() => {
        if(currentProduct) {
            setSelectedColor(currentProduct.colors[currentProductIndex])
        }
    }, [currentProduct])

    return (
        <section className="item_container">
            <Information />
            <Images images={selectedColor?.images} />
            <aside className="item_details">
                <div className="item_details-header">
                    <h1>{currentProduct?.name}</h1>
                    <SaveItem currentProduct={currentProduct} />
                </div>
                <Description message={currentProduct?.description}/>
                <div className="item_details-colors">
                    {currentProduct?.colors.map(color => (
                        <Color key={color.id} color={color} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
                    ))}
                </div>
                <span>{selectedColor?.color}</span>
                <span>R$ {currentProduct?.price}</span>
                <div className="item_details-estoque">
                    {selectedColor?.tamanhos.map((key, i) => selectedColor?.estoque[i] > 0 ? (
                        <p key={key} onClick={() => setSelectedSize([key, selectedColor?.estoque[i]])} style={{fontWeight: selectedSize[0] === key ? '700' : '400'}}>{key}</p>
                    ) : <p key={key} style={{color:'grey', cursor: 'default'}}>{key}</p>)}
                </div>
                <Button currentProduct={currentProduct} selectedColor={selectedColor} selectedSize={selectedSize}/>
            </aside>
        </section>
    )
}