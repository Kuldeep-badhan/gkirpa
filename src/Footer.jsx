import logo from "./images/logof.jpg";
const Footer = () => {
	return (
		<div>
			<footer className="footer section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mr-auto col-sm-6">
							<div className="widget mb-5 mb-lg-0">
								<div className="logo mb-4">
									<img
										src={logo}
										alt=""
										className="logo place"
									/>
								</div>
								<p>
									Your health is our priority: Experience
									compassionate care at Guru Kirpa Health
									Care.
								</p>

								<ul className="list-inline footer-socials mt-4">
									<li className="list-inline-item">
										<a href="#">
											<i className="icofont-facebook"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="#">
											<i className="icofont-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="#">
											<i className="icofont-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="widget mb-5 mb-lg-0">
								<h4 className="text-capitalize mb-3">
									Department
								</h4>
								<div className="divider mb-4"></div>

								<ul className="list-unstyled footer-menu lh-35">
									<li>
										<a href="#!">Surgery </a>
									</li>
									<li>
										<a href="#!">Women&apos; Health</a>
									</li>
									<li>
										<a href="#!">Cardioc</a>
									</li>
									<li>
										<a href="#!">Medicine</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-6 col-sm-6">
							<div className="widget mb-5 mb-lg-0">
								<h4 className="text-capitalize mb-3">
									Support
								</h4>
								<div className="divider mb-4"></div>

								<ul className="list-unstyled footer-menu lh-35">
									<li>
										<a href="#!">Terms & Conditions</a>
									</li>
									<li>
										<a href="#!">Privacy Policy</a>
									</li>
									<li>
										<a href="#!">Company Support </a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="widget widget-contact mb-5 mb-lg-0">
								<h4 className="text-capitalize mb-3">
									Get in Touch
								</h4>
								<div className="divider mb-4"></div>

								<div className="footer-contact-block mb-4">
									<div className="icon d-flex align-items-center">
										<i className="icofont-email mr-3"></i>
										<span className="h6 mb-0">
											Support Available for 24/7
										</span>
									</div>
									<h4 className="mt-2">
										<a
											href="mailto:gurukirpahealthcarehospital86@gmail.com"
											className="font-size"
										>
											gurukirpahealthcarehospital86@gmail.com
										</a>
									</h4>
								</div>

								<div className="footer-contact-block">
									<div className="icon d-flex align-items-center">
										<i className="icofont-support mr-3"></i>
										<span className="h6 mb-0">
											Mon to Fri : 08:30 - 18:00
										</span>
									</div>
									<h4 className="mt-2">
										<a href="tel:9041093921">
											+91 90410-93921
										</a>
									</h4>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-btm py-4 mt-5">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-6">
								<div className="copyright">
									Copyright &copy; 2021, Designed &amp;
									Developed by <a href="#">Ik Solution</a>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-4">
								<a
									className="backtop scroll-top-to"
									href="#top"
								>
									<i className="icofont-long-arrow-up"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- 
    Essential Scripts
    =====================================--> */}
			<script src="./plugins/jquery/jquery.js"></script>
			<script src="./plugins/bootstrap/bootstrap.min.js"></script>
			<script src="./plugins/slick-carousel/slick/slick.min.js"></script>
			<script src="./plugins/shuffle/shuffle.min.js"></script>

			{/* <!-- Google Map --> */}
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA"></script>
			<script src="./plugins/google-map/gmap.js"></script>

			<script src="./js/script.js"></script>
		</div>
	);
};

export default Footer;
