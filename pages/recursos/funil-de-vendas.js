import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';
import Head from "next/head";

function FunilDeVendas() {
  return (
    <>
     <Head>
    <title>Funil de Vendas | B2 CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="atendimento">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                <div className="row align-items-center center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/produtividade.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Aumente a produtividade do seu time e alavanque os resultados do seu negócio.</h2>
                      <p>O benefício de um funil de vendas personalizadoé a capacidade de criar uma jornada única para cada cliente em potencial, permitindo que você atenda às suas necessidades específicas em cada etapa do processo de vendas. Aqui estão alguns dos principais benefícios de um funil de vendas personalizado:</p>
                      <p>Melhor compreenção do cliente: Com um funil de vendas personalizado, você pode segmentar e entender melhor o seu público-alvo. Isso significa que você pode adaptar suas estratégias de marketing e vendas para atender às necessidades específicas de cada segmento, proporcionando uma experiência mais personalizadas para os seus clientes em potencial. Além de você aumentar as chances de converter leads em clientes reais.</p>
                    </div>    
                </div>

                <div className="row align-items-center flex-row-reverse center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/estreitar.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Estreite a relação entre as equipes da sua empresa</h2>
                      <p>O funil ajuda, também, a estreitar a relação entre os times de marketing e vendas da sua empresa, na medida em que eles dependem diretamente de informações um do outro para estruturar melhor a jornada do cliente e saber o momento certo para fechar as oportunidades. </p>
                    </div>
                </div>

                <div className="row align-items-center center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/performance.png" alt="" width={460} height={460} />
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <h2>Melhore a performance da sua empresa com os funis</h2>
                      <p>Crie os seus funis de vendas no nosso CRM cadastrando todas as etapas que você e a sua equipe comercial vão seguir, definindo os passos até chegar na venda final.</p>
                      <p>Além disso, com a B2 CRM você também pode criar múltiplos funis de atendimento para organizar melhor seu fluxo de vendas e atendimento. Ou mesmo usar alguns modelos que já temos disponível.</p>
                      <p>Você pode visualizar as suas oportunidades em grade e ficar por dentro de todas elas. Visualizando cada uma, você pode mudar uma oportunidade de etapa no seu funil de vendas, tudo muito rápido e com total praticidade de uma ação arraste e solte.</p>
                    </div> 
                </div> 
                    
            </div>     

        </section> 

        <div className="pt-5 pb-5"><Cta /></div>
       
      </div>
      <Footer />
    </>
  );
}

export default FunilDeVendas;
