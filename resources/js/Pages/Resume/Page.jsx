import Layout from "@/Layouts/Layout";

const Resume = () => {
    return (
        <Layout>
            <div className="page-title aos-init aos-animate" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Resume</h1>
                                <p className="mb-0">
                                    I am a dedicated Full Stack Developer with a
                                    strong background in modern web
                                    technologies. From dynamic WordPress
                                    websites to complex Laravel applications and
                                    responsive React/Next.js frontends, I build
                                    reliable and performance-optimized digital
                                    solutions tailored to client needs.
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
                            <li className="current">Resume</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="resume" className="resume section">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="resume-title">Sumary</h3>

                            <div className="resume-item pb-0">
                                <h4>Amir Khan</h4>
                                <p>
                                    <em>
                                        I am a results-oriented Full Stack
                                        Developer with a strong foundation in
                                        both frontend and backend technologies.
                                        I specialize in building scalable,
                                        secure, and user-focused web
                                        applications using tools like WordPress,
                                        Laravel, React.js, Next.js, and Tailwind
                                        CSS. With years of experience delivering
                                        high-quality digital solutions, I’m
                                        passionate about turning ideas into
                                        fully functional products.
                                    </em>
                                </p>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>
                                    B.Tech in Computer Science &amp; Engineering
                                </h4>
                                <h5>2014 - 2016</h5>
                                <p>
                                    <em>
                                        Techno India College of Technology,
                                        Kolkata,West Bengal ,IN
                                    </em>
                                </p>
                                <ul>
                                    <li>
                                        {" "}
                                        Gained a strong foundation in computer
                                        science fundamentals, software
                                        development, data structures, and web
                                        technologies. Completed multiple
                                        academic projects focused on real-world
                                        applications and collaborative
                                        development.
                                    </li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>
                                    Diploma in Computer Science &amp; Technology
                                </h4>
                                <h5>2012 - 2014</h5>
                                <p>
                                    <em>
                                        Global Institute of Science &
                                        Technology, Haldia ,West Bengal,IN
                                    </em>
                                </p>
                                <ul>
                                    <li>
                                        {" "}
                                        Completed a diploma program focused on
                                        core areas of computer science,
                                        including programming, database
                                        management, and network fundamentals.
                                        Developed practical skills through
                                        hands-on lab sessions and team-based
                                        projects.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="resume-title">
                                Professional Experience
                            </h3>
                            <div className="resume-item">
                                <h4>Laravel Ecommerce Developer</h4>
                                <h5>2024 - Present</h5>
                                <p>
                                    <em>Freelance / Remote</em>
                                </p>
                                <ul>
                                    <li>
                                        Laravel eCommerce Project: Led the
                                        development of a custom eCommerce
                                        platform using Laravel. Integrated
                                        secure payment gateways, product
                                        management features, and a dynamic admin
                                        dashboard. Focused on performance
                                        optimization and responsive design for
                                        both desktop and mobile users.
                                    </li>
                                    <li>
                                        Designed scalable database architecture
                                        and implemented RESTful APIs to support
                                        seamless user interactions and backend
                                        operations.
                                    </li>
                                    <li>
                                        Collaborated with UI/UX designers to
                                        deliver a smooth, modern shopping
                                        experience. Successfully deployed and
                                        maintained the platform for ongoing
                                        client use.
                                    </li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Wordpress Developer</h4>
                                <h5>2022 - 2024</h5>
                                <p>
                                    <em>Freelance / Remote</em>
                                </p>
                                <ul>
                                    <li>
                                        Created a fully custom WordPress website
                                        from scratch, including theme and plugin
                                        development tailored to client
                                        specifications.
                                    </li>
                                    <li>
                                        Built reusable components and
                                        implemented custom fields, post types,
                                        and admin panels for easy content
                                        management.
                                    </li>
                                    <li>
                                        Focused on SEO optimization, fast load
                                        times, and cross-browser compatibility.
                                    </li>
                                    <li>
                                        Provided ongoing support and
                                        documentation, enabling the client to
                                        manage their site independently
                                        post-launch.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Resume;
