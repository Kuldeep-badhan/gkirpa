import logo from "./images/logof.jpg";

const Header = () => {
	return (
		<header>
			<div className="header-top-bar">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<ul className="top-bar-info list-inline-item pl-0 mb-0">
								<li className="list-inline-item">
									<a href="mailto:gurukirpahealthcarehospital86@gmail.com">
										<i className="icofont-support-faq mr-2"></i>
										gurukirpahealthcarehospital86@gmail.com
									</a>
								</li>
								<li className="list-inline-item">
									<i className="icofont-location-pin mr-2"></i>
									Nainwan Road Pojewal Saran -144524
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<div className="text-lg-right top-right-bar mt-2 mt-lg-0">
								<a href="tel:9041093921">
									<span>Call Now : </span>
									<span className="h4">+91 90410-93921</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navigation" id="navbar">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img src={logo} alt="" className="img-fluid logo" />
					</a>

					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarmain"
						aria-controls="navbarmain"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="icofont-navigation-menu"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarmain">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active ">
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/course">
									Institute
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/checkstudent">
									CheckStudent
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
