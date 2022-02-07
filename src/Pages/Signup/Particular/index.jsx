import '../styles.css'

export default function Particular({ information, verification, isLoading }) {

    return (
        <div className='signup_particular-container'>
            <form className='signup_particular-form'>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setEmail(e.target.value)} required type="text" placeholder='E-MAIL' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setPassword(e.target.value)} required type="password" placeholder='SENHA' className='signup_input'/>
                    <input onChange={(e) => information.setPasswordConfirm(e.target.value)} required type="password" placeholder='REPITA SENHA' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setFirstName(e.target.value)} required type="text" placeholder='NOME' className='signup_input'/>
                    <input onChange={(e) => information.setLastName(e.target.value)} type="text" placeholder='SOBRENOME' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setCpf(e.target.value)} required type="text" placeholder='CPF' className='signup_input' max='3'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setCep(e.target.value)} required type="text" placeholder='CEP' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setEndereco(e.target.value)} required type="text" placeholder='ENDEREÇO E NUMERO' className='signup_input'/>
                    <input onChange={(e) => information.setComplemento(e.target.value)} type="text" placeholder='COMPLEMENTO' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setEstado(e.target.value)} required type="text" placeholder='ESTADO' className='signup_input'/>
                    <input onChange={(e) => information.setCidade(e.target.value)} required type="text" placeholder='CIDADE' className='signup_input'/>
                </div>
                <div className='signup_particular-wrapper'>
                    <input onChange={(e) => information.setBairro(e.target.value)} required type="text" placeholder='BAIRRO' className='signup_input'/>
                    <span>Brasil</span>
                </div>
                <div className='signup_particular-tel'>
                    <input onChange={(e) => information.setDdd(e.target.value)} type="text" placeholder='DDD' className='signup_input-ddd'/>
                    <input onChange={(e) => information.setTelefone(e.target.value)} type="text" placeholder='TELEFONE' className='signup_input-tel'/>
                </div>
                <button className='signup-button' disabled={isLoading} onClick={(e) => verification(e)}>CRIAR CONTA</button>
            </form>
        </div>
    )
}