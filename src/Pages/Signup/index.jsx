import { useAuth } from '../../Context/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDatabase } from '../../Context/database'

import Particular from './Particular'
import Empresa from './Empresa'
import './styles.css'

export default function Signup() {
    const navigate = useNavigate()
    const { handleSignup } = useAuth()
    const { handleAdd } = useDatabase()
    const [inputType, setInputType] = useState('Particular')
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setPasswordConfirm] = useState()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [cpf, setCpf] = useState()
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()
    const [complemento, setComplemento] = useState()
    const [estado, setEstado] = useState()
    const [cidade, setCidade] = useState()
    const [bairro, setBairro] = useState()
    const [ddd, setDdd] = useState()
    const [telefone, setTelefone] = useState()

    const [cnpj, setCnpj] = useState()
    const [ie, setIe] = useState()
    const [nomeEmpresa, setNomeEmpresa] = useState()

    const information = {
        setEmail,
        setPassword,
        setPasswordConfirm,
        setFirstName,
        setLastName,
        setCpf,
        setCep,
        setEndereco,
        setComplemento,
        setEstado,
        setCidade,
        setBairro,
        setDdd,
        setTelefone,
        setCnpj,
        setIe,
        setNomeEmpresa
    }

    async function verification(e) {
        e.preventDefault()
        //Default values
        const defaultLastName = lastName || null
        const defaultComplemento = complemento || null
        const defaultDdd = ddd || null
        const defaultTelefone = telefone || null
        const defaultCnpj = cnpj || null
        const defaultIe = ie || null
        const defaultNomeEmpresa = nomeEmpresa || null

        //Verifications
        if(email && password && confirmPassword && firstName && cpf && cep && endereco && estado && cidade && bairro) {
            if(password !== confirmPassword) {
                return console.log('Passwords don\'t match!')
            }
            
            if(password.length < 6) {
                return console.log('Passwords gotta be at least 6 characters long')
            }
    
            if(cpf.length !== 11) {
                return console.log('Digite um CPF válido!')
            }
    
            if(cep.length !== 8) {
                return console.log('Digite um CEP válido!')
            }
        } else {
            return console.log('Preencha todos os campos!')
        }

        const userData = {
            type: inputType,
            email,
            firstName,
            lastName: defaultLastName,
            cpf,
            ddd: defaultDdd,
            telefone: defaultTelefone,
            cnpj: defaultCnpj,
            ie: defaultIe,
            nomeEmpresa: defaultNomeEmpresa,
            enderecos: [{
                cep,
                endereco,
                complemento: defaultComplemento,
                estado,
                cidade,
                bairro,
            }],
            pagamentos: []
        }

        const userWishlist = {
            userEmail: email,
            products: []
        }

        const userPedidos = {
            userEmail: email,
            pedidos: []
        }

        try {
            setIsLoading(true)
            await handleSignup(email, password)
            await handleAdd("users", userData)
            await handleAdd("wishlist", userWishlist)
            await handleAdd("pedidos", userPedidos)
            navigate('/user')
        } catch(error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    function reset() {
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
        setFirstName('')
        setLastName('')
        setCpf('')
        setCep('')
        setEndereco('')
        setComplemento('')
        setEstado('')
        setCidade('')
        setBairro('')
        setDdd('')
        setTelefone('')
        setCnpj('')
        setIe('')
        setNomeEmpresa('')
    }

    function handleFormChange(text) {
        setInputType(text)
        reset()
    }

    return (
        <section className='signup_section'>
            <h1>DADOS PESSOAIS</h1>
            <div className='signup_checker'>
                <div className='signup_checker-container' onClick={() => handleFormChange('Particular')}>
                    <div className='signup_checker-circle' style={{backgroundColor: inputType === 'Particular' ? 'black' : 'transparent'}}></div>
                    <span>PARTICULAR</span>
                </div>
                <div className='signup_checker-container' onClick={() => handleFormChange('Empresa')}>
                    <div className='signup_checker-circle' style={{backgroundColor: inputType === 'Empresa' ? 'black' : 'transparent'}}></div>
                    <span>EMPRESA</span>
                </div>
            </div>
            <main>
                {inputType === 'Particular' ? <Particular information={information} verification={verification} isLoading={isLoading}/> : <Empresa information={information} verification={verification} isLoading={isLoading}/>}
            </main>
        </section>
    )
}