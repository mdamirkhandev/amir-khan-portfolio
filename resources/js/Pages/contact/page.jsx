import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import { FaSquareUpwork } from "react-icons/fa6";
const Contact = () => {
    return (
        <Layout>
            <div class="page-title aos-init aos-animate" data-aos="fade">
                <div class="heading">
                    <div class="container">
                        <div class="row d-flex justify-content-center text-center">
                            <div class="col-lg-8">
                                <h1>Contact</h1>
                                <p class="mb-0">
                                    Have a project in mind or need a reliable
                                    developer? Let’s connect. I’m available for
                                    freelance work, collaborations, or full-time
                                    opportunities. Reach out anytime to discuss
                                    your ideas or get a quote.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="breadcrumbs">
                    <div class="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li class="current">Contact</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="contact" class="contact section">
                <div
                    class="container aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <div
                                class="info-item d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <i class="icon bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>City Home, Surat, Gujarat, INDIA</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div
                                class="info-item d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <i class="icon bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Me</h3>

                                    <Link href="tel:+91 886-600-8738">
                                        +91 886-600-8738
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div
                                class="info-item d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <i class="icon bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Me</h3>
                                    <Link href="mailto:info@amir.in">
                                        info@amir.in
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div
                                class="info-item d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <i class="icon bi bi-share flex-shrink-0"></i>
                                <div>
                                    <h3>Social Profiles</h3>
                                    <div class="social-links">
                                        <Link
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-twitter-x"></i>
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                        <Link
                                            href="https://www.upwork.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaSquareUpwork size={24} />
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-linkedin"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        action="forms/contact.php"
                        method="post"
                        class="php-email-form aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div class="row gy-4">
                            <div class="col-md-6">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Your Name"
                                    required=""
                                />
                            </div>

                            <div class="col-md-6 ">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    required=""
                                />
                            </div>

                            <div class="col-md-12">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    required=""
                                />
                            </div>

                            <div class="col-md-12">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    rows="6"
                                    placeholder="Message"
                                    required=""
                                ></textarea>
                            </div>

                            <div class="col-md-12 text-center">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">
                                    Your message has been sent. Thank you!
                                </div>

                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
