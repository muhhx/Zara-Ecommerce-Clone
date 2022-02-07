import { useState, useEffect } from 'react'
import { useDatabase } from '../../../Context/database'

import PedidosUnicos from './PedidosUnicos'
import './styles.css'

export default function Controle() {
    const [pedidos, setPedidos] = useState()
    const { handleGet } = useDatabase()

    useEffect(() => {
        async function getData() {
            const dataRaw = await handleGet("pedidos")
            const dataFilter = dataRaw.docs.map(doc => ({...doc.data(), id: doc.id}))
            setPedidos(dataFilter)
        }
        getData()
    }, [])

    return(
        <div>
            <h1>Pedidos</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {pedidos?.map(pedido => (
                    <PedidosUnicos key={pedido.id} pedido={pedido}/>
                ))}
            </div>
        </div>
    )
}