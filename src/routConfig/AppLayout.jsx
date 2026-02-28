import { Outlet } from "react-router-dom"; // Used to render the matched route's component
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/FooterComponent";
import {useEffect} from "react"; // Add Footer if you have one

const AppLayout = () => {
    return (
        <div className="app-layout">
            {/* Navbar will be displayed on every page */}
            <Navbar />

            {/* Outlet is where the nested route content will be displayed */}
            <main>
                <Outlet />{" "}
                {/* This renders the component based on the current route */}
            </main>

            {/* Footer will also be displayed on every page */}
            <Footer />
        </div>
    );
};

export default AppLayout;
