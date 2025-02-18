const Features = () => {
    const features = [
        { icon: "bi-eye", color: "#ffbb2c", title: "Lorem Ipsum" },
        { icon: "bi-infinity", color: "#5578ff", title: "Dolor Sitema" },
        { icon: "bi-mortarboard", color: "#e80368", title: "Sed perspiciatis" },
        { icon: "bi-nut", color: "#e361ff", title: "Magni Dolores" },
        { icon: "bi-shuffle", color: "#47aeff", title: "Nemo Enim" },
        { icon: "bi-star", color: "#ffa76e", title: "Eiusmod Tempor" },
        { icon: "bi-x-diamond", color: "#11dbcf", title: "Midela Teren" },
        { icon: "bi-camera-video", color: "#4233ff", title: "Pira Neve" },
        { icon: "bi-command", color: "#b2904f", title: "Dirada Pack" },
        { icon: "bi-dribbble", color: "#b20969", title: "Moton Ideal" },
        { icon: "bi-activity", color: "#ff5828", title: "Verdo Park" },
        {
            icon: "bi-brightness-high",
            color: "#29cc61",
            title: "Flavor Nivelanda",
        },
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
                            <div className="features-item">
                                <i
                                    className={`bi ${feature.icon}`}
                                    style={{ color: feature.color }}
                                ></i>
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
