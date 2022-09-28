function Footer() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer" id="footer">
		<div className="footer-top">
            <div className="container">
				<div className="row">
					
					{/* <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Empresa</h5>
							<ul className="center-mob">
								<li><a href="/sobre">Sobre</a></li>
								<li><a href="https://blog.meets.com.br/" target="_blank">Blog</a></li>
								<li><a href="/parceiros">Afiliados</a></li>
								<li><a href="/fale-conosco">Fale Conosco</a></li>
								<li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
							</ul>
						</div>
                    </div> */}
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Soluções</h5>
							<ul className="center-mob">
								<li><a href="/solucoes/crm-para-infoprodutos">CRM para Infoprodutos</a></li>
								<li><a href="/solucoes/crm-para-agencias">CRM para Agências</a></li>
								<li><a href="/solucoes/crm-para-pme">CRM para PME</a></li>
								<li><a href="/solucoes/crm-para-clinicas">CRM para Clínicas</a></li>
								<li><a href="/solucoes/crm-para-imobiliarias">CRM para Imobiliárias</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget style-1 center-mob">
						   <h5 className="footer-title">CRM</h5>
							<ul className="center-mob">
								{/* <li><a href="https://apidoc.meets.com.br/" target="_blank">API CRM.Net</a></li> */}
								<li><a href="/duvidas-frequentes">Dúvidas Frequentes</a></li>
								<li><a href="/termos-e-condicoes">Termos e condições</a></li>
								<li><a href="/termos-de-uso-whatsapp">Termos de uso whatsapp</a></li>
								<li><a href="/politica-de-privacidade">Política de privacidade</a></li>
								<li><a href="/lgpd">LGPD</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Suporte</h5>
							<ul className="center-mob">
								{/* <li><a href="https://ajuda.meets.com.br/" target="_blank">Ajuda</a></li> */}
								{/* <li><a href="mailto:contato@crm.net.br">contato@crm.net.br</a></li> */}
								<li>+55 (81) 3787-3999</li>
								<li>Av. Rio Branco, 139 - Recife, PE, 50030-310</li>
								
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget_about">
							{/* <div className="dlab-social-icon center-mob">
								<h5 className="footer-title">Social</h5>
								<ul className="center-mob">
									<li><a className="fa fa-facebook" href="https://www.facebook.com/meetscrm/?ref=br_rs" target="_blank"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrm/" target="_blank"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/" target="_blank"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/meets_crm" target="_blank"></a></li>
									<li><a className="fa fa-youtube" href="https://www.youtube.com/c/CRM.NetBr" target="_blank"></a></li>
									<li><a className="fa fa-pinterest" href="https://br.pinterest.com/meetscrm1/" target="_blank"></a></li>
								</ul>
							</div> */}
							<div className="footer-logo center-mob">
								<img src="images/logo/aws.png" alt=""/>
								<img src="images/logo/google-safe-browsing.png" alt=""/>
							</div>
						</div>
                    </div>
                </div>
            </div>
		</div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center"> 
						<span className="copyright-text">Copyright © 2022 CRM.Net Todos os direitos reservados.</span> 
					</div>
                </div>
            </div>
        </div>
	
		
	    
		
		
		
		
	
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;