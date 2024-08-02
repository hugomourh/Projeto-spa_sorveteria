import Topo from "../Topo/Index"
import estilo from './Sabores.module.css'
import Image from "next/image"
import Imagem1 from '@/app/public/sabor-oreo.jpg'
import Imagem2 from '@/app/public/sabor-pistache.png'
import Imagem3 from '@/app/public/sabor-cookies-avela.png'
import Imagem4 from '@/app/public/sorbet-kiwi.png'
import Imagem5 from '@/app/public/sorbet-morango.png'
import Imagem6 from '@/app/public/sorbet-limao.png'
 import Rodape from "../Roda_pe"

export default function Sabores(){
    return(
        <>

        <Topo />
       
        <div className={estilo.fundo_sabores}>
            <h1 className={estilo.titulo}>NOSSOS SABORES</h1>
        </div>

        <h2 className={estilo.subtitulo}>SABORES DE SORVETE</h2>

        <div className={estilo.bloco}>
        
        <div className={estilo.bloco_sabor}>
       <Image className={estilo.imagem_sabor} src={Imagem1} alt="sabor oreo" />

       <div>
        <h3>Sorvete de oreo</h3>
        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
       </div>
        </div>

         <div className={estilo.bloco_sabor}>
        <Image className={estilo.imagem_sabor} src={Imagem2} alt="sabor pistache"/>
        
        <div>
            <h3>Sorvete pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.
            </p>
        </div>
 
         </div>
            
         <div className={estilo.bloco_sabor}>
         <Image  className={estilo.imagem_sabor} src={Imagem3} alt="Sorvete de avelã" />
          
          <div>
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.
            </p>
          </div>
        </div>
        </div>

        <div className={estilo.bloco} >

        <div className={estilo.bloco_sabor_1}>
            <Image className={estilo.imagem_sabor} src={Imagem4} alt="Sabor kiwi" />
        
        <div >
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
        </div>
         </div>  
       
        <div className={estilo.bloco_sabor_1}>
        <Image  className={estilo.imagem_sabor} src={Imagem5} alt="sorverte morango"/>

        <div>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.
            </p>
        </div>
            </div>
        
        <div className={estilo.bloco_sabor_1}>
      <Image className={estilo.imagem_sabor} src={Imagem6}  alt="Sabor limão"/>
      <div>
        <h3>Sorvete de Limão Siciliano</h3>
        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
      </div>
        </div>





        </div>
        
        
   



    <Rodape />

    </>
)}