import { useEffect, useState } from "react";

const Skills = () => {
    const [counters, setCounters] = useState({
        html: 0,
        css: 0,
        js: 0,
        php: 0,
        wordpress: 0,
        photoshop: 0,
    });

    useEffect(() => {
        const animateCounter = (key, target) => {
            let count = 0;
            const step = Math.ceil(target / 50); // Adjust speed
            const interval = setInterval(() => {
                count += step;
                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }
                setCounters((prev) => ({ ...prev, [key]: count }));
            }, 50); // Speed of animation
        };

        animateCounter("html", 100);
        animateCounter("css", 90);
        animateCounter("js", 75);
        animateCounter("php", 80);
        animateCounter("wordpress", 90);
        animateCounter("photoshop", 55);
    }, []);
    return (
        <section id="skills" className="skills section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Skills</h2>
                <div>
                    <span>My</span>{" "}
                    <span className="description-title">Skills</span>
                </div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row skills-content skills-animation">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">
                                <span>HTML</span>{" "}
                                <i className="val">{counters.html}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${counters.html}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">
                                <span>CSS</span>{" "}
                                <i className="val">{counters.css}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${counters.css}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">
                                <span>JavaScript</span>{" "}
                                <i className="val">{counters.js}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${counters.js}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">
                                <span>PHP</span>{" "}
                                <i className="val">{counters.php}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${counters.php}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">
                                <span>WordPress/CMS</span>{" "}
                                <i className="val">{counters.wordpress}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${counters.wordpress}%`,
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">
                                <span>Photoshop</span>{" "}
                                <i className="val">{counters.photoshop}%</i>
                            </span>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${counters.photoshop}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
