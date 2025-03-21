import iconMap from "@/lib/languages";
const Features = ({ features }) => {
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
                    {features.map((feature, index) => {
                        const LanguageIcon = iconMap[feature.icon];
                        return (
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
                                            color: feature.hexcode,
                                        }}
                                    >
                                        <LanguageIcon />
                                    </div>
                                    <h3>
                                        <a href="#" className="stretched-link">
                                            {feature.title}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
