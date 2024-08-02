import Topo from "./Topo/Index";
import  estilo from "./page.module.css";
import Image from "next/image";
import Imagem1 from '@/app/public/banner-sabores.jpg'
import Imagem2 from '@/app/public/eventos-image.jpg'
import Imagem3 from '@/app/public/sobre-image.jpg'
import Rodape from "./Roda_pe";

export default function Home() {
  return (
   <>
   <div>
   <Topo />
   </div>

   <div className={estilo.cor_fundo}>

   <div className={estilo.fundo_imagem}>
   <h1 className={estilo.titulo}>SORVETE ARTESANAL</h1>
    
     </div>
   </div>
   
  

   <div className={estilo.banner}>
     <Image className={estilo.imagem}  src={Imagem1} alt="sabores"/>

     <div className={estilo.mensagem}>
      <h1 className={estilo.primeiro}>NOSSOS SABORES</h1>
      <h3>Novos e deliciosos</h3>
      <p className={estilo.descricao}>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
      </p>
     </div>
     </div>

      <div className={estilo.banner}>

      <div className={estilo.mensagem}>
      <h1 className={estilo.primeiro}>NOSSOS EVENTOS</h1>
      <h3>Delicias com sorvete!</h3>
      <p className={estilo.descricao}>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
      </p>
      </div>

      <Image className={estilo.imagem} src={Imagem2} alt="Imagem evento"/>
      </div>

      <div className={estilo.banner}>
        <Image className={estilo.imagem}  src={Imagem3} alt="Sobre imagem"/>

      <div className={estilo.mensagem}>
        <h1  className={estilo.primeiro}>SOBRE NÓS</h1>
        <h3>Alegria em cada casquinha!</h3>
        <p className={estilo.descricao}>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
        </p>
      </div>
    
    </div>

    <Rodape />


   
   </>
  );
}
