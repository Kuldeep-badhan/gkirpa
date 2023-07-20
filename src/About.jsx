import about4 from "./images/about/About4.jpg";
import sign from "./images/about/sign.png";
import about1 from "./images/about/about-1.jpg";
import mannSir from "./images/team/Maan_sir.jpg";
import about2 from "./images/about/about-2.jpg";
import about3 from "./images/about/about-3.jpg";
import founderMam from "./images/team/Founder_mam.jpg";
const About = () => {
	return (
		<div>
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">About Us</span>
								<h1 className="text-capitalize mb-5 text-lg">
									About Us
								</h1>

								{/* <!-- <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">About Us</a></li>
          </ul> --> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section about-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<h2 className="title-color">
								Personal care for your healthy living
							</h2>
						</div>
						<div className="col-lg-8">
							<p>
								Personal care is an essential component of
								healthy living. some key aspects of personal
								care include proper nutrition, regular exercise,
								good hygiene, stress management, and getting
								enough sleep. Maintaining a healthy and balanced
								diet that includes a variety of fruits,
								vegetables, whole grains, lean proteins, and
								healthy fats can help prevent chronic diseases
								and promote overall health. Engaging in regular
								physical activity, such as walking, running, or
								yoga, can help improve cardiovascular health,
								increase energy levels, and reduce stress.
							</p>
							<img src={sign} alt="" className="img-fluid" />
						</div>
					</div>
				</div>
			</section>

			<section className="fetaure-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="about-block-item mb-5 mb-lg-0">
								<img
									src={about1}
									alt=""
									className="img-fluid w-100"
								/>
								<h4 className="mt-3">Healthcare for Kids</h4>
								<p className="justify">
									Our organization provide regular medical
									check-ups and preventative care to childern
									to ensure that they are healthy and
									thriving. Healthcare for kids includes a
									wide range of services, from routine
									check-ups to specialized care. Contact us
									today to know more.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="about-block-item mb-5 mb-lg-0">
								<img
									src={about2}
									alt=""
									className="img-fluid w-100"
								/>
								<h4 className="mt-3">Medical Counseling</h4>
								<p className="justify">
									Our team of experienced healthcare
									professionals, including doctors, nurses,
									psychologists, and licensed therapists, work
									together to provide personalized medical
									counseling services to patient. Our goal is
									to help patients improve their quality of
									life.
								</p>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-6"
							style={{ marginTop: "2%" }}
						>
							<div className="about-block-item mb-5 mb-lg-0">
								<img
									src={about3}
									alt=""
									className="img-fluid w-100"
								/>
								<h4 className="mt-3">Modern Equipments</h4>
								<p className="justify">
									we are committed to providing our patients
									with the most advanced medical technologies
									available, to ensure optimal patient health.
									The use of advance technology enables our
									healthcare providers to quickly identify and
									respond to any changes in a patient&apos;s
									condition.
								</p>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-6"
							style={{ marginTop: "2%" }}
						>
							<div className="about-block-item">
								<img
									src={about4}
									alt=""
									className="img-fluid w-100"
								/>
								<h4 className="mt-3">Qualified Doctors</h4>
								<p className="justify">
									In this institution our top priority is to
									provide our patients with the best possible
									healthcare services. We are proud to have a
									team of highly skilled and experienced
									doctors who are dedicated to delivering
									high-quality medical care to our patients.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section team gray-bg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title text-center">
								<h2 className="mb-4">Our Team</h2>
								<div className="divider mx-auto my-4"></div>
								<p></p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 extra">
							<div className="team-block mb-5 mb-lg-0">
								<img
									src={founderMam}
									alt=""
									className="img-fluid w-100"
								/>

								<div className="content">
									<h4 className="mt-4 mb-0">
										<a href="#">Dr. Baby Raj</a>
									</h4>
									<p>Head Doctor/Founder</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 extra">
							<div className="team-block mb-5 mb-lg-0">
								<img
									src={mannSir}
									alt=""
									className="img-fluid w-100"
								/>

								<div className="content">
									<h4 className="mt-4 mb-0">
										<a href="#">Sukhvir Maan</a>
									</h4>
									<p>Public Relations Officer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
