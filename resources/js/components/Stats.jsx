import { useEffect, useState } from "react";

const Stats = () => {
    const [stats, setStats] = useState({
        clients: 0,
        projects: 0,
        support: 0,
        workers: 0,
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
                setStats((prev) => ({ ...prev, [key]: count }));
            }, 50); // Speed of animation
        };

        animateCounter("clients", 232);
        animateCounter("projects", 521);
        animateCounter("support", 1463);
        animateCounter("workers", 15);
    }, []);
    return (
        <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-emoji-smile"></i>
                        <div className="stats-item">
                            <span className="counter">{stats.clients}</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-journal-richtext"></i>
                        <div className="stats-item">
                            <span className="counter">{stats.projects}</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-headset"></i>
                        <div className="stats-item">
                            <span className="counter">{stats.support}</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-people"></i>
                        <div className="stats-item">
                            <span className="counter">{stats.workers}</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
