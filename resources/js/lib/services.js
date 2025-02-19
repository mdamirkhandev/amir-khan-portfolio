import { FaCartPlus, FaLaravel, FaWordpress } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";
const services = [
    {
        icon: FaWordpress,
        title: "WordPress Development",
        description:
            "Custom themes, plugins, and full website solutions built with WordPress to meet client needs.",
        link: "/service-details/wordpress-development",
    },
    {
        icon: FaLaravel,
        title: "Laravel Web Applications",
        description:
            "Scalable and high-performance Laravel applications tailored for businesses and startups.",
        link: "/service-details/laravel-web-applications",
    },
    {
        icon: FaCartPlus,
        title: "E-commerce Solutions",
        description:
            "WooCommerce and Laravel-based online stores with secure payment gateways and seamless UX.",
        link: "/service-details/ecommerce-solutions",
    },
    {
        icon: IoMdSpeedometer,
        title: "Website Performance Optimization",
        description:
            "Enhancing website speed, caching, and SEO for better user experience and search rankings.",
        link: "/service-details/performance-optimization",
    },
    {
        icon: TbApi,
        title: "Custom API Development",
        description:
            "Developing RESTful APIs and third-party integrations for seamless communication between services.",
        link: "/service-details/custom-api-development",
    },
    {
        icon: MdOutlineSecurity,
        title: "Website Security & Maintenance",
        description:
            "Ensuring websites are secure, updated, and protected against vulnerabilities and attacks.",
        link: "/service-details/security-maintenance",
    },
];

export default services;
