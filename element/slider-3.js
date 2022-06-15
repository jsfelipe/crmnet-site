import Link from "next/link";
import Slider from "react-slick";
import Image from 'next/image';

function Slider3 () {
    return (
      <>
        
		<div className="banner-three">
			<div className="container">
				<div className="">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="center-mob" data-aos="fade-right" data-aos-duration="0">
								<Image src="/images/banner/chamada-home.png" alt="" width={467} height={576} />
							</div>
						</div>
						<div className="col-md-6">
							<div className="banner-content text-white">
								{/* <h1 className="m-b20 crm-mais" data-aos="fade-up" data-aos-duration="300">CRM <img src="images/banner/mais.png" data-aos="fade-up" data-aos-duration="500" alt=""/></h1> */}
								<h1 className="m-b20 c-at center-mob" data-aos="fade-right" data-aos-duration="100">CRM Whitelabel com central de vendas e atendimento</h1>
								<h6 className="sub-title text-primary mt-2 center-mob" data-aos="fade-right" data-aos-duration="200">Tenha o melhor dos dois mundos: Central e CRM em um único software.</h6>
								<ul className="d-flex icons-social center-mob">
									<li className="move-4"><Image src="/images/icon/home-instagram.png" width={46} height={46} /></li>
									<li className="move-4"><Image src="/images/icon/home-messenger.png" width={46} height={46} /></li>
									<li className="move-4"><Image src="/images/icon/home-whatsapp.png" width={46} height={46} /></li>
									{/* <li><img src="images/icon/home-telegram.png" data-aos="fade-up" data-aos-duration="600" alt=""/></li> */}
									<li className="move-4"><Image src="/images/icon/home-jivochat.png" width={46} height={46}/></li>
								</ul>
								<div class="d-flex center-mob">
								<a href="teste-gratis" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary mr-3 btn-round">Começar agora</a>
								<a href="https://api.whatsapp.com/send?phone=5581992971917" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-light btn-round">Solicitar apresentação</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider3;