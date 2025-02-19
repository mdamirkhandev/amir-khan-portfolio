import {
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaNodeJs,
    FaReact,
    FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";
const Features = () => {
    const features = [
        { icon: <FaHtml5 />, color: "#e34c26", title: "HTML5" },
        { icon: <FaCss3Alt />, color: "#264de4", title: "CSS3" },
        { icon: <FaJs />, color: "#f0db4f", title: "JavaScript" },
        { icon: <FaBootstrap />, color: "#563d7c", title: "Bootstrap CSS" },
        { icon: <SiTailwindcss />, color: "#38bdf8", title: "Tailwind CSS" },
        { icon: <FaReact />, color: "#61dafb", title: "React.js" },
        { icon: <SiNextdotjs />, color: "#ffffff", title: "Next.js" },
        { icon: <FaLaravel />, color: "#ff2d20", title: "Laravel" },
        { icon: <FaWordpress />, color: "#21759b", title: "WordPress" },
        { icon: <SiPhp />, color: "#777bb4", title: "PHP" }, 
        { icon: <FaNodeJs />, color: "#6db33f", title: "Node.js" },
    ];

    return (
        <section id="interests" className="interests section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Features</h2>
                <div>
                    <span>I'm</span>{" "}
                    <span className="description-title">interested in</span>
                </div>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="features-item flex-direction-column text-center gap-2">
                                <div
                                    className="pr-2"
                                    style={{
                                        fontSize: "1.5rem",
                                        color: feature.color,
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                <h3>
                                    <a href="#" className="stretched-link">
                                        {feature.title}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
