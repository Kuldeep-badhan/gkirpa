import service3 from "./images/service/service-3.jpg";
import about from "./images/service/aboutT.jpg";
import yoga from "./images/service/yoga.jpg";
import healthOffice from "./images/service/healthOffice.jpg";
import acu from "./images/service/acu.jpg";
import sw from "./images/service/sw.jpg";
import service2 from "./images/service/service-2.jpg";
import dental from "./images/service/dental.jpg";
import hear from "./images/service/hear.jpg";
const Course = () => {
	return (
		<div>
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<h1 className="text-capitalize mb-5 text-lg">
									Our Institution
								</h1>
								<span className="text-white">
									Learn by Doing with our experts
								</span>

								{/* <!-- <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">Our services</a></li>
          </ul> --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section service-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5">
								<img src={about} alt="" className="img-fluid" />
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										{" "}
										Diploma in Medical Lab Technician
									</h4>
									<div className="time">
										<span>Duration,</span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										In this course students learn to operate
										and maintain laboratory equipment,
										interpret test results, and communicate
										findings to physicians and other members
										of the healthcare team. They also learn
										about laboratory safety procedures and
										ethical considerations related to
										laboratory work.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5">
								<img src={yoga} alt="" className="img-fluid" />
								<div className="content">
									<h4 className="mt-4 mb-2  title-color">
										{" "}
										Diploma in Yoga Instructor
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										This course is designed to provide
										students with a comprehensive
										understanding of yoga philosophy,
										theory, and practice. The course covers
										a wide range of topics, including yoga
										history, anatomy and physiology,
										meditation techniques, pranayama,
										asanas, and teaching methodology.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5">
								<img
									src={healthOffice}
									alt=""
									className="img-fluid"
								/>
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Health Office Adminstration
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										{" "}
										In this course students will be
										introduced to the skills necessary as a
										member of the health care team in health
										offices and clinics. The student will
										become familiar with time management,
										telephone skills, information
										management, registration, scheduling,
										and triage common to health offices.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5 mb-lg-0">
								<img src={acu} alt="" className="img-fluid" />
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Acupressure Medical System
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										In this course student will learn
										various methods of administering
										acupressure, and clinical precautions
										associated with each demonstrate
										acupoint protocols for the management of
										pain, wellbeing, and administration of
										acupoint therapy.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5 mb-lg-0">
								<img src={sw} alt="" className="img-fluid" />
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Diploma in Social Work
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										In the end of this course the student
										will gain a greater understanding of
										social work practices, and the impact of
										policy on key social services. And they
										also have the chance to explore the
										social work profession from expert
										faculty.
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-block mb-5 mb-lg-0">
								<img src={hear} alt="" className="img-fluid" />
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Diploma in hearing Impairment
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										The course covers topics such as
										audiology, anatomy and physiology of the
										ear, hearing aids and assistive devices,
										and counseling for individuals with
										hearing loss. By the end of the course
										student can assist people with hearing
										problems.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-lg-4 col-md-6 col-sm-6"
							style={{ marginTop: "50px" }}
						>
							<div className="service-block mb-5 mb-lg-0">
								<img
									src={dental}
									alt=""
									className="img-fluid"
								/>
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Diploma in Dental Hygienist
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										This course covers a variety of topics
										related to dental hygiene, including
										dental anatomy, patient assessment, oral
										hygiene techniques, radiography,
										periodontics, and dental materials. In
										the end of this course student will be
										able to assist with a dental doctor.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-lg-4 col-md-6 col-sm-6"
							style={{ marginTop: "50px" }}
						>
							<div className="service-block mb-5 mb-lg-0">
								<img
									src={service3}
									alt=""
									className="img-fluid"
								/>
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Diploma in Operation Theater Technology
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										This course trains students to work as
										operation theatre technicians in
										hospitals. This course covers a range of
										topics related to surgical procedures,
										surgical instrumentation, patient
										positioning, and anesthesia techniques.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-lg-4 col-md-6 col-sm-6"
							style={{ marginTop: "50px" }}
						>
							<div className="service-block mb-5 mb-lg-0">
								<img
									src={service2}
									alt=""
									className="img-fluid"
								/>
								<div className="content">
									<h4 className="mt-4 mb-2 title-color">
										Diploma in Health Education And
										Community Services
									</h4>
									<div className="time">
										<span>Duration, </span>
										<span>1 Years 6 months</span>
									</div>
									<p className="mb-4 gray justify">
										This course provides students with the
										knowledge and skills necessary to work
										in the field of public health. This
										course covers topics such as health
										promotion, community development, health
										education, health policy, and healthcare
										management.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section cta-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="cta-content">
								<div className="divider mb-4"></div>
								<h2 className="mb-5 text-lg">
									We are pleased to offer you the{" "}
									<span className="title-color">
										chance to make other healthy
									</span>
								</h2>
								<a
									href="tel:9041093921"
									className="btn btn-main-2 btn-round-full"
								>
									Contact Us
									<i className="icofont-simple-right  ml-2"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Course;
