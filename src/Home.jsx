import img1 from "./images/about/img-1.jpg";
import drSaab from "./images/about/dr_saab.jpg";

const Home = () => {
    return (
        <div>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3"></div>
                                <span className="text-uppercase text-sm letter-spacing ">
									{" "}
                                    HOLISTIC APPROACH{" "}
								</span>
                                <h2 className="mb-3 mt-3">
                                    Welcome, To Guru Hospital and Maternity home
                                </h2>

                                <p className="mb-4 pr-5">
                                    Where healthcare meets compassion - Your
                                    trusted partner in wellness. Discover
                                    world-class medical services and
                                    exceptional patient care at our hospital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-block d-lg-flex">
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-surgeon-alt"></i>
                                    </div>
                                    <span>24 Hours Service</span>
                                    <h4 className="mb-3">On Call Appoinment</h4>
                                    <p className="mb-4">
                                        Get All time support for emergency.We
                                        have introduced the principle of family
                                        medicine.
                                    </p>
                                    <a
                                        href="tel:9041093921 "
                                        className="btn btn-main btn-round-full"
                                    >
                                        Give us a call
                                    </a>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-ui-clock"></i>
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 className="mb-3">Working Hours</h4>
                                    <ul className="w-hours list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            Emergency Services{" "}
                                            <span>24 Hours</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-support"></i>
                                    </div>
                                    <span>Emegency Cases</span>
                                    <h4 className="mb-3">+91 90410-93921</h4>
                                    <p>
                                        Get ALl time support for emergency.We
                                        have introduced the principle of family
                                        medicine.Get Conneted with us for any
                                        urgency .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img
                                    src={img1}
                                    alt=""
                                    className="img-fluid1 img-fluid"
                                />
                                {/* <!-- <img src="images/about/img-2.jpg" alt="" className="img-fluid mt-4"> --> */}
                            </div>
                        </div>
                        {/* <!-- <div className="col-lg-4 col-sm-6">
				<div className="about-img mt-4 mt-lg-0">
					<img src="images/about/img-3.jpg" alt="" className="img-fluid">
				</div>
			</div> --> */}
                        <div className="col-lg-6 col-sm-6">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color">
                                    Personal care <br/>& healthy living
                                </h2>
                                <p className="mt-4 mb-5">
                                    Taking care of one&apos;s health is crucial
                                    for a happy and fulfilling life. At our
                                    hospital, we understand the importance of
                                    personal care and healthy living, and
                                    that&apos;s why we offer a wide range of
                                    services to help you maintain your physical
                                    and mental wellbeing. Our personal care
                                    services include home health care, hospice
                                    care, and respite care, which are tailored
                                    to meet your individual needs. We also offer
                                    wellness programs and educational resources
                                    to help you make healthy lifestyle choices,
                                    such as diet and exercise, stress
                                    management, and disease prevention. At our
                                    hospital, we are committed to providing the
                                    best possible care and support to help you
                                    lead a healthy and fulfilling life. Contact
                                    us today to learn more about our personal
                                    care and healthy living services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section service gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Treatments and services</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>
                                    Patient care is at the heart of everything
                                    we do - our commitment is to your
                                    well-being, it is our priority.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="50" height="50" src="https://img.icons8.com/ios/50/laboratory.png" alt="laboratory"/>
                                    <h4 className="mt-3 mb-3">
                                        Laboratory services
                                    </h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">
                                        Our hospital&apos;s state-of-the-art
                                        laboratory offers a comprehensive range
                                        of diagnostic services, including blood
                                        tests, imaging, and microbiology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="50" height="50" src="https://img.icons8.com/ios/50/uterus.png" alt="uterus"/>
                                    <h4 className="mt-3 mb-3">
                                        Uterine Fibroid <br/> (Without Surgery)
                                    </h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">
                                        Uterine fibroids are noncancerous growths in the uterus, common among women. They can lead to symptoms like heavy bleeding and pelvic pain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="50" height="50" src="https://img.icons8.com/ios/50/kidney.png" alt="kidney"/>
                                    <h4 className="mt-3 mb-3">
                                        Renal Calculi <br/> (Without Surgery)
                                    </h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">
                                        Renal calculi, commonly known as kidney stones, are hard mineral and salt deposits that form in the kidneys or urinary tract. These small, pebble-like structures can cause intense pain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="50" height="50" src="https://img.icons8.com/ios/50/physical-therapy.png" alt="physical-therapy"/>
                                    <h4 className="mt-3 mb-3">
                                        Physiotherapy
                                    </h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">
                                        Physiotherapy, or physical therapy, is a healthcare profession that helps people recover from injuries, illnesses, or physical limitations. It involves exercises and therapies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="50" height="50" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/>
                                    <h4 className="mt-3 mb-3">Heart Disease</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        we offer comprehensive heart disease
                                        services to diagnose, treat and manage
                                        heart conditions. We are committed to
                                        providing the highest quality of care to
                                        our patients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <img width="64" height="64" src="https://img.icons8.com/external-outline-berkahicon/64/external-avatar-medical-worker-avatar-outline-berkahicon-34.png" alt="external-avatar-medical-worker-avatar-outline-berkahicon-34"/>


                                    <h4 className="mt-3 mb-3">Gynecology</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">
                                        Our experienced gynecologists
                                        and women&apos;s health specialists are
                                        dedicated to providing compassionate and
                                        personalized care to each patient.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section appoinment">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-4">
                            <div className="appoinment-content">
                                <img
                                    src={drSaab}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="emergency">
                                    <h2 className="text-lg">
                                        <i className="icofont-phone-circle text-lg"></i>
                                        +91 90410-93921
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="float"> --> */}
                <div className="col-lg-8 col-lg-4 up">
                    <h2 className="title-color">Doctor Consultant</h2>
                    <span className="gray">Personal Hygiene</span>
                    <p className="justify">
                        Personal hygiene is essential for maintaining good
                        health and preventing the spread of infectious diseases.
                        At our hospital, we understand the importance of
                        personal hygiene and offer doctor consultant services to
                        help our patients develop healthy hygiene habits. Our
                        experienced doctors provide personalized advice on
                        proper handwashing techniques, dental care, bathing and
                        showering, and other hygiene practices. They can also
                        recommend products and treatments to address specific
                        hygiene concerns, such as acne, foot odor, and body
                        odor. Our goal is to educate and empower our patients to
                        take control of their personal hygiene and stay healthy.
                        Contact us today to learn more about our doctor
                        consultant services and how we can help you maintain
                        optimal hygiene and wellness.
                    </p>
                </div>
            </section>
            <section className="section testimonial-2 gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>We served over 5000+ Patients</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>
                                    Trusted expertise, compassionate care - Our
                                    doctors are here to guide you on your
                                    journey to better health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
