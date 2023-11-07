import img1 from "./images/about/img-1.jpg";
import drSaab from "./images/consultant.jpg";
import ut from "./treatments/ut-min.jpg";
import ki from "./treatments/ki-min.jpg";
import phy from "./treatments/phy-min.jpg";
import heart from "./treatments/heart-min.jpg";
import gynae from "./treatments/gynae-min.jpg";

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
            <section className="section service-2 gray-bg">
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
                            <div className="service-block mb-5">
                                <img src={ut} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        {" "}
                                        Uterine Fibroid <br/>
                                        (Without Surgery)

                                    </h4>
                                    <p className="mb-4 gray justify">
                                        Uterine fibroids are noncancerous growths in the uterus. Surgery is an option for some cases, but non-surgical treatments like medications, embolization, or focused ultrasound therapy can effectively manage symptoms without surgery. The choice of treatment depends on the fibroids size, location, and your preferences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img src={ki} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2  title-color">
                                        {" "}
                                        Renal Calculi <br/>
                                        (Without Surgery)

                                    </h4>
                                    <p className="mb-4 gray justify">
                                        Renal calculi, also known as kidney stones, are mineral deposits that can cause severe pain. While surgery is an option for some cases, non-surgical treatments like drinking plenty of water, medication, and dietary changes can help pass or dissolve smaller stones. These non-surgical approaches can be effective in managing kidney stones.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5">
                                <img
                                    src={phy}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        Physiotherapy
                                    </h4>

                                    <p className="mb-4 gray justify">
                                        Physiotherapy, or physical therapy, is a healthcare profession that focuses on improving physical function and mobility. It involves exercises, manual therapy, and various techniques to treat and prevent injuries, manage pain, and enhance overall well-being. Physiotherapists work with individuals of all ages and conditions to help them regain strength, flexibility, and independence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src={heart} alt="" className=""/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        Heart Disease
                                    </h4>

                                    <p className="mb-4 gray justify">
                                        Heart disease refers to a range of conditions that affect the heart&apos;s structure and function. It includes coronary artery disease, heart failure, and arrhythmias. Risk factors include high blood pressure, high cholesterol, and smoking. Preventive measures include a healthy lifestyle, diet, exercise, and medication. Early detection and management are crucial for heart health.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-block mb-5 mb-lg-0">
                                <img src={gynae} alt="" className="img-fluid"/>
                                <div className="content">
                                    <h4 className="mt-4 mb-2 title-color">
                                        Gynecology
                                    </h4>
                                    <p className="mb-4 gray justify">
                                        Gynecology is a medical specialty focused on women&apos;s reproductive health, including the female reproductive system and associated health issues. Gynecologists diagnose and treat conditions like menstrual disorders, pregnancy, infertility, and sexually transmitted infections. Regular gynecological check-ups are essential for women&apos;s overall well-being and reproductive health.
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
