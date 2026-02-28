import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import styles from "./CivilArchive.module.css";
import image1 from "../../assets/civil/L11.webp";
import image2 from "../../assets/civil/L9.webp";
import image3 from "../../assets/civil/L10.webp";
import image4 from "../../assets/civil/L17.webp";
import image5 from "../../assets/mechanical/L16.webp";

import {useEffect, useState} from "react";

const contentList = [
    {
        heading: "Architectural and Structural Design",
        description: `Cura Tech offers innovative and practical architectural and structural design services. Our team of experts works closely with clients to create designs that are both aesthetically appealing and structurally sound. We combine creativity with engineering precision to ensure that each design reflects the client’s vision while adhering to safety and regulatory standards. Whether it's residential, commercial, or institutional, we bring your concepts to life with sustainable and functional designs.`,
        image: image1,
        imagePosition: "left",
    },
    {
        heading: "Residential & Commercial Construction",
        description: `Cura Tech provides complete construction services for both residential and commercial projects. We manage every aspect of the construction process, from site preparation to final touches. Our team ensures timely and cost-effective delivery while maintaining the highest quality standards. Whether you’re building a new home, office, or retail space, our experience and expertise guarantee that your project will be built to last.`,
        image: image2,
        imagePosition: "right",
    },
    {
        heading: "Interior Design",
        description: `Our interior design services focus on transforming spaces to be both functional and aesthetically pleasing. We offer customized solutions for residential, commercial, and industrial interiors, ensuring that each space maximizes its potential. From selecting the right furniture and lighting to designing layouts that enhance comfort and flow, we create interiors that align with your personal or business style while optimizing space utilization.`,
        image: image3,
        imagePosition: "left",
    },
    {
        heading: "Turnkey Solutions",
        description: "At Cura Tech, we provide comprehensive turnkey solutions for a hassle-free project experience. From initial design to project completion, we take care of all aspects, ensuring seamless integration and coordination. Our turnkey services are ideal for clients who want a one-stop solution, with full accountability and no need to manage multiple contractors. We handle everything from permits to final handover, delivering a complete, ready-to-use product.",
        image: image4,
        imagePosition: "right",
    },
    {
        heading: "⁠Project Consultancy & Compliance",
        description: "Cura Tech offers expert consultancy in navigating legal and regulatory procedures for your project. From obtaining building permits to ensuring compliance with safety and environmental regulations, our team helps you stay on track. We assist with risk assessments, safety audits, and environmental impact studies, ensuring that your project meets all legal requirements and adheres to industry standards.",
        image: image5,
        imagePosition: "left",
    },
];

function CivilArchive() {
    const [is_mobile_width, set_is_mobile_width] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const width = document.body.clientWidth;
        if (width < 1024) {
            set_is_mobile_width(true);
        } else {
            set_is_mobile_width(false);
        }
    }, []);


    return (
        <>
            <CommonCarousel
                heading="Civil Engineering Work Archive"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={true}
                containerStyle={{}}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 8099997489"
                }}
            />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: '64px',
                }}
            >
                {contentList.map((item, index) => (
                    is_mobile_width ? <div
                            key={index}
                            className={styles.mb_container}
                            style={{
                                flexDirection:
                                    item.imagePosition === "left"
                                        ? "row"
                                        : "row-reverse",
                            }}
                        >
                            <div className={styles.mb_descriptionContainer}>
                                <h2 className={styles.mb_heading}>{item.heading}</h2>
                                <img
                                    src={item.image}
                                    alt={item.heading}
                                    className={styles.mb_image}
                                />
                                <p className={styles.description}>
                                    {item.description}
                                </p>
                            </div>
                        </div> :
                        <div
                            key={index}
                            className={styles.container}
                            style={{
                                flexDirection:
                                    item.imagePosition === "left"
                                        ? "row"
                                        : "row-reverse",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.heading}
                                className={styles.image}
                            />
                            <div className={styles.descriptionContainer}>
                                <h2 className={styles.heading}>{item.heading}</h2>
                                <p className={styles.description}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                ))}
            </div>
        </>
    );
}

export default CivilArchive;
