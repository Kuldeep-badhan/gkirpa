import about from "./images/service/aboutT.jpg";
import yoga from "./images/service/yoga.jpg";
import healthOffice from "./images/service/healthOffice.jpg";
import acu from "./images/ear.jpg";


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
                                <img src={about} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        {" "}
                                        Diploma in laboratory
                                    </h4>
                                    <div className="time">
                                        <span>Duration,</span>
                                        <span># Years # months</span>
                                    </div>
                                    <p className="mb-4 gray justify">
                                        A Diploma in Laboratory Science is a program that equips students with the knowledge and skills needed to work in various laboratory settings. It covers topics like scientific techniques, equipment operation, and data analysis, preparing individuals for careers in research, healthcare, or quality control.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img src={yoga} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2  title-color">
                                        {" "}
                                        Diploma in Yoga Instructor
                                    </h4>
                                    <div className="time">
                                        <span>Duration, </span>
                                        <span># Years # months</span>
                                    </div>
                                    <p className="mb-4 gray justify">
                                        A Diploma in Yoga focuses on the principles of yoga, including postures, breathing techniques, and meditation. This program helps students become certified yoga instructors or practitioners, promoting physical and mental well-being.
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
                                        Diploma in First Aid
                                    </h4>
                                    <div className="time">
                                        <span>Duration, </span>
                                        <span># Years # months</span>
                                    </div>
                                    <p className="mb-4 gray justify">
                                        A Diploma in First Aid teaches essential life-saving skills such as CPR, wound care, and emergency response. Graduates are prepared to provide immediate assistance in medical emergencies, making them valuable in both personal and professional settings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src={acu} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        Diploma in Auricular Therapy
                                    </h4>
                                    <div className="time">
                                        <span>Duration, </span>
                                        <span># Years # months</span>
                                    </div>
                                    <p className="mb-4 gray justify">
                                        A Diploma in Auricular Therapy involves the study of ear reflex points for holistic healing. It's a complementary therapy that uses ear acupuncture to address a variety of health concerns, promoting overall wellness and pain management.
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
