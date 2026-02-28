import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import styles from "./MechArchive.module.css";
import image1 from "../../assets/mechanical/L11.jpg";
import image2 from "../../assets/mechanical/L9.jpg";
import image3 from "../../assets/mechanical/L10.jpg";
import image4 from "../../assets/mechanical/L8.jpg";
import image5 from "../../assets/mechanical/L16.jpg";

import {useEffect, useState} from "react";

const contentList = [
    {
        heading: "Firefighting Systems",
        description: `Cura Tech specializes in designing and installing effective firefighting systems for both residential and commercial properties. We provide fire risk assessments, suppression systems, and fire alarm systems, ensuring that your property complies with safety standards. Our systems are tailored to meet the specific needs of each building, offering peace of mind and protection against potential fire hazards.`,
        image: image1,
        imagePosition: "left",
    },
    {
        heading: "Industrial Piping",
        description: `Our industrial piping services include the design, installation, and maintenance of pipelines for steam, water, gas, and oil systems. We work with a wide range of industries, ensuring that all piping systems are efficient, safe, and compliant with relevant standards. Whether it's for new installations or retrofitting existing systems, our team ensures that your piping infrastructure is robust and reliable.`,
        image: image2,
        imagePosition: "right",
    },
    {
        heading: "Equipment Erection",
        description: `Cura Tech provides precise and reliable equipment erection services for industrial and commercial clients. We handle the installation of various machinery and systems, ensuring that each piece of equipment is positioned, assembled, and tested according to specifications. Our experienced team ensures smooth integration with existing systems, helping businesses maintain operational efficiency.`,
        image: image3,
        imagePosition: "left",
    },
    {
        heading: "Structural Work",
        description: "Our structural engineering services focus on providing strong, durable frameworks for buildings and industrial projects. We design and implement structural solutions that ensure stability, safety, and longevity. Whether it’s for a new construction project or retrofitting an existing structure, our team uses the latest technology and materials to create solid foundations and frameworks that meet industry standards.",
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


function MechArchive() {
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
                heading="MECHANICAL Engineering Work Archive"
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

export default MechArchive;
