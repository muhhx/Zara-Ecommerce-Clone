import { useState, useEffect } from 'react'
import { useNavigation } from '../../Context/navigation'
import { useCategories } from '../../Context/categories'

import logoSvg from '../../Assets/logo_zara.svg'
import closeSvg from '../../Assets/close_menu.svg'
import Category from './Category'
import './styles.css'

export default function Navigation() {
    const [currentCategory, setCurrentCategory] = useState()
    const [currentFont, setCurrentFont] = useState('F')
    const { setIsOpen } = useNavigation()
    const { categoriesMasc, categoriesFem, categoriesKids } = useCategories()

    useEffect(() => {
        setCurrentCategory(categoriesFem)
    }, [])

    function handleFemaleCategories() {
        setCurrentCategory(categoriesFem)
        setCurrentFont('F')
    }

    function handleMaleCategories() {
        setCurrentCategory(categoriesMasc)
        setCurrentFont('M')
    }

    function handleKidsCategories() {
        setCurrentCategory(categoriesKids)
        setCurrentFont('I')
    }

    return (
        <div className='navigation_background'>
            <aside className="navigation_container">
                <div className="navigation_header">
                    <button onClick={() => setIsOpen(false)}>
                        <img src={closeSvg} alt="Navigation bar" />
                    </button>
                    <div>
                        <img src={logoSvg} alt="Zara logo" />
                    </div>
                </div>
                <div className="navigation_options">
                    <button onClick={() => handleFemaleCategories()} style={{fontWeight: currentFont === 'F' ? '700' : '400'}}>MULHER</button>
                    <button onClick={() => handleMaleCategories()} style={{fontWeight: currentFont === 'M' ? '700' : '400'}}>HOMEM</button>
                    <button onClick={() => handleKidsCategories()} style={{fontWeight: currentFont === 'I' ? '700' : '400'}}>INFANTIL</button>
                </div>
                <div className="navigation_categories">
                    {currentCategory?.map(category => (
                        <Category key={category.id} info={category}/>
                    ))}
                </div>
                    
            </aside>
            <aside className="navigation_leave" onClick={() => setIsOpen(false)}/>
        </div>
    )
}