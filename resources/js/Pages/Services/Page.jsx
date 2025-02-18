import Layout from "@/Layouts/Layout";
import services from "@/lib/services";
import { Link } from "@inertiajs/react";

const Services = () => {
    return (
        <Layout>
            <div className="page-title" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Services</h1>
                                <p className="mb-0">
                                    Expert WordPress and Laravel solutions
                                    tailored for businesses, startups, and
                                    entrepreneurs. From development to
                                    optimization, I ensure quality and
                                    scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="current">Services</li>
                        </ol>
                    </div>
                </nav>
            </div>

            {/* Services Section */}
            <section id="services" className="services section">
                <div className="container">
                    <div className="row gy-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={100 * (index + 1)}
                            >
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <Link
                                        href={service.link}
                                        className="stretched-link"
                                    >
                                        <h3>{service.title}</h3>
                                    </Link>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Services;
