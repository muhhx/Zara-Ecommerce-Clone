import { useAlert } from '../../Context/alert'
import './styles.css'

export default function Alert() {
    const { setShowAlert, alertMessage } = useAlert()

    return (
        <div className='alert_container'>
            <div className='alert_wrapper'>
                <h1>AVISO</h1>
                <p>{alertMessage}</p>
                <button onClick={() => setShowAlert(false)}>FECHAR</button>
            </div>
        </div>
    )
}