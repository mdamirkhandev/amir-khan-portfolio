import Layout from "@/Layouts/Layout";
import { ReactTyped } from "react-typed";
const Home = () => {
    return (
        <Layout>
            <section id="hero" className="hero section dark-background">
                <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

                <div
                    className="container"
                    data-aos="zoom-out"
                    data-aos-delay="100"
                >
                    <h2>Amir Khan</h2>
                    <p>
                        I'm{" "}
                        <span>
                            <ReactTyped
                                strings={[
                                    "Freelancer",
                                    "Wordpress Developer",
                                    "Laravel Developer",
                                ]}
                                typeSpeed={70}
                                backSpeed={30}
                                backDelay={1500}
                                loop
                            />
                        </span>
                    </p>
                    <div className="social-links">
                        <a href="#">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
