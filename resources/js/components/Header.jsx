import { Link, usePage } from "@inertiajs/react";

export const Header = () => {
    const { url } = usePage(); // Get the current URL

    return (
        <header
            id="header"
            className="header d-flex align-items-center fixed-top"
        >
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <Link href="/" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <h1 className="sitename">Amir.IN</h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={url === "/" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={
                                    url.startsWith("/about") ? "active" : ""
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                className={
                                    url.startsWith("/resume") ? "active" : ""
                                }
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className={
                                    url.startsWith("/services") ? "active" : ""
                                }
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio"
                                className={
                                    url.startsWith("/portfolio") ? "active" : ""
                                }
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={
                                    url.startsWith("/contact") ? "active" : ""
                                }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    );
};
