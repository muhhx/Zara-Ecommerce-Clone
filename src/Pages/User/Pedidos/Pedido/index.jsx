import './styles.css'

export default function Pedido({ pedido }) {
    return (
        <div className='profile_pedidos'>
            <span style={{paddingRight: '50px'}}>{pedido.id}</span>
            <span style={{paddingRight: '50px'}}>{pedido.quantity}</span>
            <span style={{paddingRight: '50px'}}>R${pedido.price * pedido.quantity}</span>
            <span style={{paddingRight: '50px'}}>{pedido.color.size[0]}</span>
            <span style={{paddingRight: '50px'}}>{pedido.color.color}</span>
            <span style={{paddingRight: '50px'}}>{pedido.name}</span>
        </div>
    )
}