import { Link } from "@inertiajs/react";
import { SiUpwork } from "react-icons/si";
const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container">
                <h3 className="sitename">Amir.IN</h3>
                <p>
                    Experienced full stack developer skilled in{" "}
                    <Link href="https://wordpress.com">WordPress</Link> ,
                    <Link href="https://laravel.com"> Laravel</Link> &{" "}
                    <Link href="https://reactjs.org">NextJs</Link>. I build
                    fast, user-friendly web solutions tailored to your business
                    needs.
                </p>
                <div className="social-links d-flex justify-content-center">
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </Link>
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram"></i>
                    </Link>
                    <Link
                        href="https://www.upwork.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiUpwork />
                    </Link>
                    <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </Link>
                </div>
                <div className="container">
                    <div className="copyright">
                        <span>Copyright</span>
                        <strong className="px-1 sitename">
                            <Link href="/">Amir.IN</Link>
                        </strong>
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
