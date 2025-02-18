import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const Layout = ({ children }) => {
    return (
        <div>
            {/* Persistent Header */}
            <Header />
            {/* Page Content */}
            <main className="main">{children}</main>
            {/* Persistent Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
