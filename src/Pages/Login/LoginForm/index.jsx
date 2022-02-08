import { useState, useEffect } from 'react'
import { useAuth } from '../../../Context/auth'
import { useAlert } from '../../../Context/alert'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const { handleLogin, currentUser } = useAuth()
    const { setAlertMessage, setShowAlert } = useAlert()
    const navigate = useNavigate() 

    async function verification(e) {
        e.preventDefault()

        if(email && password) {
            if(password.length < 6) {
                setAlertMessage('A senha precisa ter no mínimo 6 caracteres')
                return setShowAlert(true)
            }
        } else {
            setAlertMessage('Preencha todos os dados')
            return setShowAlert(true)
        }

        try {
            setIsLoading(true)
            await handleLogin(email, password)
        } catch(error) {
            setAlertMessage('Não foi possível fazer o login')
            setShowAlert(true)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if(currentUser) {
            navigate('/user')
        }
    }, [currentUser])
    
    return (
        <aside className='login_container'>
            <h1>INICIE SESSÃO</h1>
            <form className='login_form'>
                <input type="text" placeholder='E-MAIL' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='SENHA' onChange={(e) => setPassword(e.target.value)}/>
                <button disabled={isLoading} onClick={(e) => verification(e)}>INICIAR SESSÃO</button>
            </form>
        </aside>
    )
}