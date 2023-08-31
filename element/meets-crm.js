import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function OsRecursos() {
    return (
      <>
        <section className="content-inner pb-5">
			<div className="container">
				<div className="row align-items-center">
				<div className="">
						<div className="section-head style-3 text-center">
							<h2 className="title">Por que escolher a B2 CRM?</h2>
							<h3 className="sub-title m-b20">temos soluções de negócios  que se encaixam muito bem nas suas necessidades.</h3>
						</div>
						<div className="row">
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/servicos.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h4 class="dlab-tilte text-capitalize">Simplicidade</h4>
										<p>Muitos usuários chamam a B2 CRM do Iphone dos CRMs por sua simplicidade e facilidade de usar.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/vendas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h4 class="dlab-tilte text-capitalize">Vendas</h4>
										<p>Equipe de vendas preparada para te dar a atenção que precisa e tirar todas as suas dúvidas.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/marketing.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1300">
										<h4 class="dlab-tilte text-capitalize">Sucesso do Cliente</h4>
										<p>Acompanhamento permanente visando as melhores práticas e ajustes para o seu negócio.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/estrutura.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h4 class="dlab-tilte text-capitalize">Estrutura</h4>
										<p>Servidores escalável com suporte e tecnologia da Amazon. Adaptados e organizados de acordo com a LGPD.</p>
									</div>
								</div>
							</div>
						</div>
				</div>
				</div>
			</div>
		</section>
    </>
  );
}
  
  export default OsRecursos;