import { useState, useEffect } from 'react'
import { useAuth } from '../../../Context/auth'
import { useDatabase } from '../../../Context/database'

import Pedido from './Pedido'
import './styles.css'

export default function Pedidos() {
    const [pedidosUser, setPedidosUser] = useState()
    const { handleGet } = useDatabase()
    const { currentUser } = useAuth()

    useEffect(() => {
        if(currentUser.type !== 'Adm') {
            async function getData() {
                const dataRaw = await handleGet("pedidos")
                const dataFilter = dataRaw.docs.map(doc => ({...doc.data(), id: doc.id}))
                const dataFinal = dataFilter.filter(data => data.userEmail === currentUser.email)
                setPedidosUser(dataFinal)
            }
            getData()
        }
    }, [])

    return (
        <div className='profile_container'>
            {pedidosUser?.[0]?.pedidos?.map(pedido => (
                <Pedido key={Math.random()} pedido={pedido} />
            ))}
        </div>
    )
}