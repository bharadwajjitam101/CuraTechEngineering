import {Carousel} from "antd";
import {useNavigate} from "react-router-dom";
import styles from "./Slider.module.css";
import FeatureSection from "../../components/FeatureSection";
import TotalProjectNumber from "../../components/StatsComponent";
import FloatingHome from "../../components/common/floatingHome";
import {useEffect, useState} from "react";
import slideData from "../../components/json/sliderdata.json";


const Slider = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const [is_mobile_width, set_is_mobile_width] = useState(false);

    useEffect(() => {
        const width = document.body.clientWidth;
        if (width < 600) {
            set_is_mobile_width(true);
        } else {
            set_is_mobile_width(false);
        }
    }, []);

    const getStyles = (index) => {
        if (index === 1) {
            return styles.carouselSlide1;
        }

        if (index === 2) {
            return styles.carouselSlide2;
        }

        if (index === 3) {
            return styles.carouselSlide3;
        }
    }

    return (
        <div className={styles.sliderContainer}>
            <div style={is_mobile_width ? {
                position: 'absolute',
                zIndex: 10,
                top: 12,
                right: 8,
            } : {
                position: 'absolute',
                zIndex: 10,
                top: 32,
                right: 32,
            }}
            >
                <FloatingHome/>
            </div>
            <Carousel autoplay>
                {slideData.map((slide, index) => (
                    <div key={index} className={`${styles.carouselSlide} ${getStyles(index + 1)}`}>
                        <div className={styles.heading}>{slide.heading}</div>
                        <div className={styles.description}>{slide.description}</div>
                        <div className={styles.actionContainer}>
                            <button
                                className={styles.Button}
                                onClick={() => handleNavigation(slide.route)}
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className={styles.FloatingContainer}>
                <TotalProjectNumber/>
                <FeatureSection/>
            </div>
        </div>
    );
};

export default Slider;
