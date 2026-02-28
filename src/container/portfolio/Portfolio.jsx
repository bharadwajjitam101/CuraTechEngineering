import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/Portfolio.svg";
import ImageGallery from "./ImageGallery";
import {useEffect} from "react";

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <CommonCarousel
                heading="Portfolio Archive"
                description="Home / Portfolio Archive"
                backgroundImage={slideImage}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 8099997489"
                }}

            />
            <ImageGallery/>
        </>
    );

}

export default Portfolio;
