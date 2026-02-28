import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import myImage from "../../assets/about.png";

const About = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/about-us");
        window.scrollTo(0, 0); 
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.carouselSlide}>
                <div className={styles.title}>About Us</div>
                <div className={styles.subheading}>
                    "Our experienced team of architects, engineers, and consultants delivers every project with precision and care."
                </div>
                <div className={styles.description}>
                    Vision: To be a globally recognized leader in civil and mechanical engineering, delivering sustainable, innovative, and client-focused solutions in turnkey projects, architectural design, pipeline installations, and fire safety systems.
                </div>
                <div className={styles.description}>
                    Mission: To provide innovative and reliable civil and mechanical engineering solutions, specializing in turnkey projects, architectural and structural design, and firefighting solutions.
                </div>
                <div className={styles.actionContainer}>
                    <button className={styles.contactButton} onClick={handleNavigation}>
                        Learn More
                    </button>
                </div>
            </div>

            <div className={styles.carouselSlide}>
                <img src={myImage} alt="About us" className={styles.image} />
            </div>
        </div>
    );
};

export default About;
