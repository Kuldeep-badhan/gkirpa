const contact = () => {
	return (
		<div>
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">Contact Us</span>
								<h1 className="text-capitalize mb-5 text-lg">
									Get in Touch
								</h1>

								{/* <!-- <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">Contact Us</a></li>
          </ul> --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- contact form start --> */}

			<section className="section contact-info pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-live-support"></i>
								<h5>Call Us</h5>
								<span>+91 90410-93921</span>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-support-faq"></i>
								<h5>Email Us</h5>
								<span>
									gurukirpa11114444@gmail.com
								</span>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-location-pin"></i>
								<h5>Location</h5>
								<span>Nainwan Road, Pojewal Saran -144524</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<br />
			<br />
			<br />
			<div className="google-map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.8104141357476!2d76.2870141664245!3d31.247713077188635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ab7af5d69539d%3A0x815b43c387ab969f!2sGuru%20Kirpa%20Health%20Care%20hospital%2C%20Nainwan%20Road%2C%20Pojewal%20Saran%2C%20144524!5e0!3m2!1sen!2sin!4v1677738767624!5m2!1sen!2sin"
					width="100%"
					height="456"
					style={{ border: "0" }}
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</div>
		</div>
	);
};

export default contact;
