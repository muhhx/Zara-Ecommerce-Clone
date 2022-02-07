import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import './styles.css'

export default function Login() {
    return (
        <section className='login_section'>
            <LoginForm />
            <div className='login_register-container'>
                <div className='login_register-info'>
                    <h1>REGISTRE-SE</h1>
                    <p>SE AINDA NÃO TEM UMA CONTA DE USUÁRIO DE ZARA.COM, UTILIZE ESTA OPÇÃO PARA ACESSAR O FORMULÁRIO DE REGISTRO.</p>
                    <p>SOLICITAREMOS A VOCÊ AS INFORMAÇÕES IMPRESCINDÍVEIS PARA AGILIZAR O PROCESSO DE COMPRA.</p>
                </div>
                <Link to={'/signup'}>
                    <button className='login_register-button'>CRIAR CONTA</button>
                </Link>
            </div>
        </section>
    )
}