import Features from "@/components/Features";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Layout from "@/Layouts/Layout";
import { Link, usePage } from "@inertiajs/react";
const About = () => {
    const { features, testimonials } = usePage().props;
    return (
        <Layout>
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>About</h1>
                                <p className="mb-0">
                                    Full Stack Developer skilled in WordPress,
                                    Laravel & Next.js. I create fast, reliable,
                                    and custom web solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="current">About</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="about" className="about section">
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img
                                src="assets/img/profile-img.jpg"
                                className="img-fluid"
                                alt="amir-khan-profile"
                            />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Full Stack Web Developer.</h2>
                            <p className="fst-italic py-3">
                                I am a results-oriented Full Stack Developer
                                with a strong foundation in both frontend and
                                backend technologies. I specialize in building
                                scalable, secure, and user-focused web
                                applications using tools like WordPress,
                                Laravel, React.js, Next.js, and Tailwind CSS.
                                With years of experience delivering high-quality
                                digital solutions, I’m passionate about turning
                                ideas into fully functional products.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Birthday:</strong>{" "}
                                            <span>10 Feb 1992</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Website:</strong>{" "}
                                            <Link href="https://www.amir.in">
                                                www.amir.in
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Phone:</strong>{" "}
                                            <Link href="tel:+91 886-6600-8738">
                                                +91 886-6600-8738
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>City:</strong>{" "}
                                            <span>Surat, Gujarat , India</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Age:</strong>{" "}
                                            <span>30</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Degree:</strong>{" "}
                                            <span>B.Tech in CSE</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Email:</strong>{" "}
                                            <Link href="mailto:info@amir.in">
                                                info@amir.in
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>{" "}
                                            <strong>Freelance:</strong>{" "}
                                            <span className="bg-success rounded px-1">
                                                Available
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                I help businesses and startups bring their
                                digital ideas to life with clean, efficient code
                                and modern design practices. From building
                                responsive websites to developing complex
                                backend systems, I offer end-to-end development
                                services that focus on performance, SEO, and
                                user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Stats />
            <Skills />
            <Features features={features} />
            <Testimonials testimonials={testimonials} />
        </Layout>
    );
};

export default About;
