import Slider from "./Carousel";
import About from "./About";
import ProcessSteps from "./ProcessSteps";
import SpecialProjects from "./SpecialProjects";
import ContactInfo from "./ContactInfo";
import Testimonials from "./Testimonials";
import VideoWithPlayButton from "./VideoWithPlayButton";
import {useEffect} from "react";

function Dashboard() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Slider/>
            <About/>
            <ProcessSteps/>
            <SpecialProjects/>
            <Testimonials/>
            {/*<VideoWithPlayButton/>*/}
            <ContactInfo/>
        </>
    );
}

export default Dashboard;
