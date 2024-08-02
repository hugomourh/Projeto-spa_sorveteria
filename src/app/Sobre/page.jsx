import Topo from "../Topo/Index"
import Rodape from "../Roda_pe"
import estilo from './Sobre.module.css'
import Image from "next/image"
import Imagem1 from '@/app/public/sorveteria.jpg'
import Imagem2 from '@/app/public/sobre-image.jpg'



export default function Sobre(){
    return(
        <>
    <Topo />
    
        
        <div className={estilo.imagem_sobre}>
        <h1 className={estilo.titulo}>A GELATERIA</h1>
        </div>

        <div className={estilo.sobre_nos}>
            <h2 className={estilo.margem} >Sobre nós</h2>
            <h2 className={estilo.subtitulo}>Nós simplesmente amamos sorvete!!</h2>
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
<br/>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
</p>
        </div>
        
        <div className={estilo.imagem}>
            <Image className={estilo.tamanho_imagem} src={Imagem1} alt="sorveteria"/>
            <Image  className={estilo.tamanho_imagem} src={Imagem2}  alt="Sobre imagem"/>
        </div>



      <Rodape />
        </>
    )
}