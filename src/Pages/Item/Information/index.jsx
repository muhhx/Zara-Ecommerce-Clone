import { useState } from 'react'
import detailSvg1 from '../../../Assets/product_details1.svg'
import detailSvg2 from '../../../Assets/product_details2.svg'
import detailSvg3 from '../../../Assets/product_details3.svg'
import detailSvg4 from '../../../Assets/product_details4.svg'
import detailSvg5 from '../../../Assets/product_details5.svg'
import './styles.css'

export default function Information() {
    const [hidden, setHidden] = useState(false)

    return (
        <div className='information_container-wrapper'>
            <div className='information_container' style={{overflowY: hidden === false ? 'hidden' : 'scroll', height: hidden===false ? '40vh' : '50vh'}}>
                <h5>MATERIAIS, CUIDADOS E ORIGEM</h5>
                <h5>MATERIAIS</h5>
                <p>Trabalhamos com programas de acompanhamento para garantir o cumprimento das normas de segurança, de saúde e de qualidade dos nossos produtos.</p>
                <p>A norma Green to Wear 2.0 tem como objetivo minimizar o impacto ambiental da produção têxtil. Para tal, desenvolvemos o programa The List da Inditex que nos ajuda a garantir tanto a limpeza dos processos produtivos como a segurança e a saúde das nossas peças de vestuário.</p>
                <p>EXTERIOR<br/>100% POLIÉSTER</p>
                <h5>CARE</h5>
                <h5>CUIDAR DAS SUAS PEÇAS DE ROUPA É CUIDAR DO AMBIENTE.</h5>
                <p>Para manter os seus casacos limpos, basta arejá-los e passar-lhes um pano ou uma escova para roupa. Este processo é mais delicado para os tecidos e, além disso, evita o consumo de água e de energia dos processos de lavagem.</p>
                <div className='information_container-icons'>
                    <div>
                        <img src={detailSvg1} alt="Detail icon 1" />
                        <p>Lavar à máquina max. 30 °C centrifugação curta</p>
                    </div>
                    <div>
                        <img src={detailSvg2} alt="Detail icon 2" />
                        <p>Não usar descolorante/branqueador</p>
                    </div>
                    <div>
                        <img src={detailSvg3} alt="Detail icon 3" />
                        <p>Passar máximo 110 °C</p>
                    </div>
                    <div>
                        <img src={detailSvg4} alt="Detail icon 4" />
                        <p>Não limpar a seco</p>
                    </div>
                    <div>
                        <img src={detailSvg5} alt="Detail icon 5" />
                        <p>Não usar secadora</p>
                    </div>
                </div>
                <h5>ORIGEM</h5>
                <p>Trabalhamos com os nossos fornecedores, colaboradores, sindicatos e com organismos internacionais para desenvolver uma cadeia de abastecimento em que se respeitem e promovam os direitos humanos, contribuindo para os Objetivos de Desenvolvimento Sustentável das Nações Unidas.</p>
                <p>Além disso, graças à colaboração contínua com os nossos fornecedores, desenvolvemos um programa de rastreabilidade que nos permite saber onde e como são confeccionadas as nossas peças.</p>
                <button className='information_container-button' onClick={() => setHidden(false)}>Ver menos</button>
            </div>
            <button className='information_container-button' onClick={() => setHidden(true)} style={{display: hidden === false ? 'block' : 'none'}}>Ver mais</button>
        </div>
    )
}