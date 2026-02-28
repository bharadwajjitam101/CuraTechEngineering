import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import Dashboard from "./container/dashboard/Dashboard";
import Contact from "./container/contact/Contact";
import SingleProject from "./container/singleProject/SingleProject";
import OurService from "./container/ourServices/OurService";
import CivilArchive from "./container/serviceArchive/CivilArchive";
import MechArchive from "./container/serviceArchive/MechArchive";
import AboutUs from "./container/aboutUs/AboutUs";
import Portfolio from "./container/portfolio/Portfolio";
import AppLayout from "./routConfig/AppLayout";
import Loader from './components/Loader/progress';
import SocialContact from './container/contact/contacthover';
import {init} from '@emailjs/browser';
import PrivacyPolicy from "./container/privacy/PrivacyPolicy";

init("-E22ns61CMWLFMkdC");

import "./app.css";

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Simulate loading during page refresh
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    // Simulate loading during route changes
//    useEffect(() => {
//        setLoading(true);
//        const timeout = setTimeout(() => setLoading(false), 500);
//        return () => clearTimeout(timeout);
//    }, [location]);

    return (
        <>
            {loading && <Loader imageSrc="/src/assets/Cura Tech Enginnering WithoutB.png"/>}
            <Routes>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="single-project" element={<SingleProject/>}/>
                    <Route path="our-service" element={<OurService/>}/>
                    <Route path="civil-archive" element={<CivilArchive/>}/>
                    <Route path="mech-archive" element={<MechArchive/>}/>
                    <Route path="about-us" element={<AboutUs/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    {/* Add this 404 catch-all route */}
                    <Route path="*" element={<Dashboard/>}/>
                </Route>
            </Routes>
            <SocialContact/>
        </>
    );
}

export default function Root() {
    return (
        <Router>
            <App/>
        </Router>
    );
}
