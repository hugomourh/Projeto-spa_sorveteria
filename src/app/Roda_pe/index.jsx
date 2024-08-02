import Logo from '@/app/public/logo.png'
import estilo from './Roda_pe.module.css'
import Image from 'next/image'

export default function Rodape(){
return(
    <>
    
    <div className={estilo.fundo_rodape}>
        <div className={estilo.bloco_rodape}>

        <Image className={estilo.image} src={Logo} alt="Logo" />
            
            <div >
                <h3 className={estilo.bloco}>ENDEREÇO</h3>
                <p>Av.Bernardinho<br/>de campos, 98 <br/> SP-São Paulo</p>
            </div>

            <div>
                <h3 className={estilo.bloco}>CONTATO</h3>
                <p>info@meusite</p>
                <p>(55)666-666</p>
            </div>

            <div >
                <h3 className={estilo.bloco}>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>

               
            </div>
        </div>
        
        </div>

    
    
    
    
    
    
    </>
)
}