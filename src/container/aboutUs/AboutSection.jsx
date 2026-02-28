import "./AboutSection.css";
import image from "../../assets/L5.webp";
import brochure from "../../assets/Cura Tech Brochure.pdf";

const AboutSection = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = brochure;
        link.download = "CuraTechBrochure.pdf";
        link.click();
    };

    return (
        <section className="about-section">
            <div className="container">
                <div className="image-column">
                    <div className="image-wrapper">
                        <img
                            src={image}
                            alt="Construction professional"
                            className="image"
                        />
                        <div className="experience-overlay">
                            <div className="experience-number">
                                <span className="number">15</span>
                                <span className="plus">+</span>
                            </div>
                            <p className="experience-text">
                                Years of Experience
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content-column">
                    <p className="about-us">About Us</p>
                    <h2 className="title">
                        We provide the best engineering solutions
                    </h2>
                    <p className="description">
                        Cura Tech Engineering is a trusted leader in civil and mechanical engineering services, offering comprehensive solutions for residential, commercial, and industrial projects. Our expertise spans architectural design, structural engineering, construction, interior design, and industrial services, including pipeline installations and firefighting systems. We take pride in delivering innovative, sustainable, and cost-effective solutions that align with our clients’ unique requirements. With a strong focus on safety, regulatory compliance, and high-quality standards, we provide end-to-end turnkey solutions that ensure seamless project execution from design to completion.
                    </p>
                    <button
                        className="learn-more-button"
                        onClick={handleDownload}
                    >
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
