import { useState } from 'react'
import './styles.css'

export default function PedidosUnicos({ pedido }) {
    const [isShown, setIsShown] = useState(false)

    return (
        <>
            <span style={{fontWeight: 'bold', cursor: 'pointer'}} key={pedido.id} onClick={() => setIsShown(isShown === true ? false : true)}>USER EMAIL: {pedido.userEmail}   USER ID: {pedido.id}</span>
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '30px'}}>
                {pedido.pedidos.map(pedidoUnico => (
                    <div key={Math.random()} style={{display: 'flex', gap: '20px'}}>
                        <span style={{display: isShown === true ? 'initial' : 'none'}}>{pedidoUnico.name}</span>
                        <span style={{display: isShown === true ? 'initial' : 'none'}}>QNT: {pedidoUnico.quantity}</span>
                        <span style={{display: isShown === true ? 'initial' : 'none'}}>PRICE: R${pedidoUnico.price}</span>
                        <span style={{display: isShown === true ? 'initial' : 'none'}}>TOTAL: R${pedidoUnico.quantity * pedidoUnico.price}</span>
                    </div>
                ))}
            </div>
        </>
    )
}