import { useEffect, useState } from 'react'
import { useAuth } from '../../Context/auth'
import { useAlert } from '../../Context/alert'
import { useEdit } from '../../Context/edit'
import { useDatabase } from '../../Context/database'
import EditColor from './EditColor'
import './styles.css'

export default function Edit() {
    const [editName, setEditName] = useState(false)
    const [editDesc, setEditDesc] = useState(false)
    const [editPrice, setEditPrice] = useState(false)

    const [nameChange, setNameChange] = useState()
    const [descChange, setDescChange] = useState()
    const [priceChange, setPriceChange] = useState()
    const [isNewChange, setIsNewChange] = useState()

    const [newProduct, setNewProduct] = useState()
    const [refreshed, setRefreshed] = useState(0)
    const { setShowEdit, editProduct } = useEdit()
    const { handleUpdate, handleDelete} = useDatabase()
    const { currentUser } = useAuth()
    const { setShowAlert, setAlertMessage } = useAlert()

    useEffect(() => {
        setNewProduct(editProduct)
    }, [refreshed])

    function handleNameChange() {
        newProduct.name = nameChange.toUpperCase()
        setEditName(false)
    }

    function handleDescChange() {
        newProduct.description = descChange.toUpperCase()
        setEditDesc(false)
    }

    function handlePriceChange() {
        newProduct.price = priceChange
        setEditPrice(false)
    }

    function handleIsNewChange() {
        newProduct.isNew = newProduct.isNew === true ? false : true
        setIsNewChange(newProduct.isNew)
    }

    async function updateItem() {
        const produtoUpdated = {
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            isNew: newProduct.isNew
        }
        await handleUpdate("produtos", newProduct.id, produtoUpdated)

        newProduct.colors.forEach(colorItem => {
            const optionsUpdated = {
                color: colorItem.color,
                images: colorItem.images,
                productId: colorItem.productId,
                rgb: colorItem.rgb
            }
            async function addHandleUpdate() {
                await handleUpdate("options", colorItem.id, optionsUpdated)
            }
            addHandleUpdate()

            const estoqueUpdated = {
                optionId: colorItem.id
            }
            colorItem.tamanhos.forEach((tamanho, i) => {
                estoqueUpdated[tamanho] = colorItem.estoque[i]
            })
            async function addEstoqueUpdate() {
                await handleUpdate("estoque", colorItem.estoqueId, estoqueUpdated)
            }
            addEstoqueUpdate()
        })

        setShowEdit(false)
    }

    async function deleteItem() {
        if(currentUser.email === 'murilo@gmail.com') {
            await handleDelete("produtos", newProduct.id)
            setAlertMessage('Produto deletado!')
            setShowAlert(true)
            setShowEdit(false)
        } else {
            setAlertMessage('Apenas o criador do site pode deletar produtos!')
            setShowAlert(true)
        }
    }

    return (
        <section className='edit_section'>
            <main className='edit_container'>
                <button className='edit_close' onClick={() => setShowEdit(false)}>X</button>
                <h1>Product: {newProduct?.id}</h1>
                <div className='edit_content'>
                    <div className='edit_content-container'>
                        <span className='edit_title'>NAME:</span>
                        {
                        editName === false ?
                        <span className='edit_name' onClick={() => setEditName(true)}>{newProduct?.name}</span> :
                        <div className='edit_content-wrapper'>
                            <input className='edit_input' onChange={(e) => setNameChange(e.target.value)}></input>
                            <button className='edit_button' onClick={handleNameChange}>CONFIRM</button>
                        </div>
                        }
                    </div>

                    <div className='edit_content-container'>
                        <span className='edit_title'>DESCRIPTION:</span>
                        {
                        editDesc === false ?
                        <span className='edit_name' onClick={() => setEditDesc(true)}>{newProduct?.description}</span> :
                        <div className='edit_content-wrapper'>
                            <input className='edit_input' onChange={(e) => setDescChange(e.target.value)}></input>
                            <button className='edit_button' onClick={handleDescChange}>CONFIRM</button>
                        </div>
                        }
                    </div>

                    <div className='edit_content-container'>
                        <span className='edit_title'>PRICE:</span>
                        {
                        editPrice === false ?
                        <span className='edit_name' onClick={() => setEditPrice(true)}>{newProduct?.price}</span> :
                        <div className='edit_content-wrapper'>
                            <input className='edit_input' onChange={(e) => setPriceChange(e.target.value)}></input>
                            <button className='edit_button' onClick={handlePriceChange}>CONFIRM</button>
                        </div>
                        }
                    </div>

                    <div className='edit_content-container'>
                        <span className='edit_title'>IS NEW:</span>
                        <span className='edit_name' onClick={handleIsNewChange}>{isNewChange === true ? 'TRUE' : 'FALSE'}</span>
                    </div>
                    <div className='edit_colors'>
                        {newProduct?.colors.map(color => (
                            <EditColor key={color.id} color={color} newProduct={newProduct} setRefreshed={setRefreshed} refreshed={refreshed}/>
                        ))}
                    </div>
                </div>
                <div className='edit_buttons'>
                    <button className='edit_confirm' onClick={updateItem}>CONFIRMAR MUDANÇAS</button>
                    <button className='edit_confirm' onClick={deleteItem}>DELETAR PRODUTO</button>
                </div>
            </main>
        </section>
    )
}

//Quando você muda, cria um objeto novo com os valores atualizados. Porém so vai mudar no banco de dados quando você clicar em confirmar