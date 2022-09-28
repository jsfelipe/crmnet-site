import { useEffect } from "react";
import CRMNetCrm from "../element/meets-crm";
import Clients2 from "../element/clients-2";
import SliderSolucoes from "../element/slider-solucoes";
import BoxRecursos from "../element/box-recursos";
import BoxCentral from "../element/box-central";
import LeadChat from "../element/lead-chat";
import BoxAutomatize from "../element/box-automatize";
import BoxIntegracoes from "../element/box-integracoes";
import Slider3 from "../element/slider-3";
import Counter2 from "../element/counter2";
import SliderDepoimentos from "../element/slider-depoimentos";
import Cta from "../element/cta";
import Footer from "../layout/footer"
import Header from '../layout/header';


// import "../css/skin/skin-1.css"


function Index2() {
 
  return (
    <>
      <Header />
      <div className="page-content">
        <Slider3 />
        <BoxCentral />
        {/* <LeadChat /> */}
        <SliderSolucoes />
        <BoxRecursos />
        <CRMNetCrm />
        <BoxAutomatize />
        <div id="action-home">
        <Cta />
        </div>
        <BoxIntegracoes />
        <Counter2 />
        {/* <SliderDepoimentos /> */}
        <Clients2 />
        
        
      </div>
      
      <Footer />
    </>
  );
}

export default Index2;
