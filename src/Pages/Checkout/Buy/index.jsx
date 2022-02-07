import { useDatabase } from '../../../Context/database'
import { useAuth } from '../../../Context/auth'
import { useCart } from '../../../Context/cart'
import { useConfirmation } from '../../../Context/confirmation'
import './styles.css'

export default function Buy() {
    const { setShowConfirmation } = useConfirmation()
    const { handleUpdate, handleGet } = useDatabase()
    const { currentUser } = useAuth()
    const { cart, setCart } = useCart()

    async function handlePedido() {
        //Adicionar pedido
        const pedidosRaw = await handleGet("pedidos")
        const pedidosFiltered = pedidosRaw.docs.map(doc => ({...doc.data(), id: doc.id}))
        const pedidosUser = pedidosFiltered.filter(pedido => pedido.userEmail === currentUser.email)

        const newArr = [...pedidosUser[0].pedidos]
        cart.forEach(item => newArr.push(item))
        const newPedido = {
            userEmail: pedidosUser[0].userEmail,
            pedidos: newArr
        }
        
        await handleUpdate("pedidos", pedidosUser[0].id, newPedido)
        
        //Atualizar estoque
        const estoqueRaw = await handleGet("estoque")
        const estoqueFiltered = estoqueRaw.docs.map(doc => ({...doc.data(), id: doc.id}))

        cart.forEach(item => {
            async function update() {
                const estoqueItem = estoqueFiltered.filter(estoque => estoque.optionId === item.color.colorId)
                const newEstoque = {...estoqueItem[0]}
                newEstoque[item.color.size[0]] = item.color.size[1] - item.quantity
                const estoqueId = newEstoque.id
                delete newEstoque.id

                await handleUpdate("estoque", estoqueId, newEstoque)
            }
            update()
        })

        //Side effects (limpar carrinho, mostrar aviso, redirecionar)
        setShowConfirmation(false)
        setCart([])
        location.reload()
    }

    return (
        <section className='buy_container'>
            <main className='buy_wrapper'>
                <span className='buy_close' onClick={() => setShowConfirmation(false)}>X</span>
                <h1>Confirmar compra</h1>
                <span>Deseja efetuar a compra?</span>
                <button onClick={handlePedido}>CONFIRMAR</button>
            </main>
        </section>
    )
}