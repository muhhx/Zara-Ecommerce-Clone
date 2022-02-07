import { useAuth } from '../../../Context/auth'
import './styles.css'

export default function Sair() {
    const { handleLogout } = useAuth()

    return (
        <div>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}