import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/Rectangle.svg";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import { useEffect } from "react";

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CommonCarousel
                heading="About Us"
                description="Home / About Us"
                backgroundImage={slideImage}
                showFloatingContact={true}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 8099997489",
                }}
            />
            <AboutSection />
            <HeroSection />
            <div style={{backgroundcolor: "white", height: "100px"}}></div> {}
        </>
    );
}

export default AboutUs;
