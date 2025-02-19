import Layout from "@/Layouts/Layout";
import portfolioItems from "@/lib/portfolioData";
import { useState } from "react";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

    const filteredItems =
        activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeFilter);
    return (
        <Layout>
            {/* Page Title */}
            <div className="page-title aos-init aos-animate" data-aos="fade">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Portfolio</h1>
                                <p className="mb-0">
                                    Odio et unde deleniti. Deserunt numquam
                                    exercitationem. Officiis quo odio sint
                                    voluptas consequatur ut a odio voluptatem.
                                    Sit dolorum debitis veritatis natus dolores.
                                    Quasi ratione sint. Sit quaerat ipsum
                                    dolorem.
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
                            <li className="current">Portfolio</li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio section mb-4">
                <div className="container">
                    <div
                        className="isotope-layout"
                        data-default-filter="*"
                        data-layout="masonry"
                        data-sort="original-order"
                    >
                        {/* Filter Tabs */}
                        <ul className="portfolio-filters">
                            <li
                                onClick={() => handleFilterClick("all")}
                                className={
                                    activeFilter === "all"
                                        ? "filter-active"
                                        : ""
                                }
                            >
                                All
                            </li>
                            <li
                                onClick={() => handleFilterClick("app")}
                                className={
                                    activeFilter === "app"
                                        ? "filter-active"
                                        : ""
                                }
                            >
                                App
                            </li>
                            <li
                                onClick={() => handleFilterClick("product")}
                                className={
                                    activeFilter === "product"
                                        ? "filter-active"
                                        : ""
                                }
                            >
                                Product
                            </li>
                            <li
                                onClick={() => handleFilterClick("branding")}
                                className={
                                    activeFilter === "branding"
                                        ? "filter-active"
                                        : ""
                                }
                            >
                                Branding
                            </li>
                            <li
                                onClick={() => handleFilterClick("books")}
                                className={
                                    activeFilter === "books"
                                        ? "filter-active"
                                        : ""
                                }
                            >
                                Books
                            </li>
                        </ul>
                        {/* End Portfolio Filters */}

                        <div className="row gy-4 isotope-container aos-init aos-animate">
                            {/** Portfolio Items */}
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
                                >
                                    <div className="portfolio-content h-100">
                                        <img
                                            src={item.imgSrc}
                                            className="img-fluid"
                                            alt={item.title}
                                        />
                                        <div className="portfolio-info">
                                            <h4>{item.title}</h4>
                                            <p>
                                                Lorem ipsum, dolor sit amet
                                                consectetur
                                            </p>
                                            <a
                                                href={item.imgSrc}
                                                title={item.title}
                                                className="glightbox preview-link"
                                            >
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                            <a
                                                href="portfolio-details.html"
                                                title="More Details"
                                                className="details-link"
                                            >
                                                <i className="bi bi-link-45deg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Portfolio Section */}
        </Layout>
    );
};

export default Portfolio;
