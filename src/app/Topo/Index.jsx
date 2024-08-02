import Logo from '@/app/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import estilo from './topo.module.css'

export default function Topo(){
    return(
   <>
   <div className={estilo.fundo}>
    <div>
    <Image className={estilo.imagem} src={Logo} alt="logomarca"/>
    </div>
    <div className={estilo.lista_links}>
        
       <Link className={estilo.links} href="/">Home</Link>
       <Link className={estilo.links} href="/Sabores">Sabores</Link>
       <Link className={estilo.links} href="/Sobre">Sobre</Link>
        
    </div>
    
   
    </div>
   </>
     
    

    )
}