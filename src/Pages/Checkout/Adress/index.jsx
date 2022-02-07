import { useAuth } from '../../../Context/auth'
import './styles.css'

export default function Adress() {
    const { currentUser } = useAuth()

    return (
        <div className='checkout_enderecos-container'>
            <h1>Endereço</h1>
            <div className='checkout_enderecos-enderecos'>
                {currentUser?.enderecos.map((endereco, i) => (
                    <div key={i} className='checkout_enderecos-pins'>
                        <span>CPF: {endereco.cep}</span>
                        <span>Estado: {endereco.estado}</span>
                        <span>Cidade: {endereco.cidade}</span>
                        <span>Bairro: {endereco.bairro}</span>
                        <span>Endereço: {endereco.endereco}</span>
                        {endereco.complemento ? <span>Complemento: {endereco.complemento}</span> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}