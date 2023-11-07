import gynae from "./treatments/gynae-min.jpg"
import ki from "./treatments/ki-min.jpg"
import ut from "./treatments/ut-min.jpg"
import phy from "./treatments/phy-min.jpg"
import heart from "./treatments/heart-min.jpg"


const Treatments = () => {
    return (
        <div>
            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <h1 className="text-capitalize mb-5 text-lg">
                                    Treatments We Offer
                                </h1>
                                <span className="text-white">
									Get the treatment that you deserve
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

export default Treatments;
