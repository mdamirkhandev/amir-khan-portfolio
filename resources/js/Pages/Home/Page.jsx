import Layout from "@/Layouts/Layout";
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
                    <h2>Emily Jones</h2>
                    <p>
                        I'm
                        <span
                            className="typed"
                            data-typed-items="Designer, Developer, Freelancer, Photographer"
                        >
                            Photographer
                        </span>
                        <span className="typed-cursor typed-cursor--blink"></span>
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
