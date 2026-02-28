import styles from "./ImageGallery.module.css";
import { Plus } from "lucide-react";
import img2 from "../../assets/placeholder2.svg?height=400&width=400";

const ImageGallery = () => {
    const images = [
        {
            src: img2,
            title: "Construction in snow",
            alt: "Construction in snow",
        },
        {
            src: img2,
            title: "Yellow machinery",
            alt: "Yellow machinery",
        },
        {
            src: img2,
            title: "Workers in blue",
            alt: "Workers in blue",
        },
        {
            src: img2,
            title: "Crane construction",
            alt: "Crane construction",
        },
        {
            type: "feature",
            src: img2,
            title: "Commercial",
            subtitle: "Benoit Architecture",
        },
        {
            src: img2,
            title: "High-rise construction",
            alt: "High-rise construction",
        },
        {
            src: img2,
            title: "Industrial building",
            alt: "Industrial building",
        },
        {
            src: img2,
            title: "Cranes with birds",
            alt: "Cranes with birds",
        },
        {
            src: img2,
            title: "Workers on scaffolding",
            alt: "Workers on scaffolding",
        },
    ];

    return (
        <div className={styles.gallery}>
            {images.map((item, index) => (
                <div key={index} className={styles.galleryItem}>
                    {item.type === "feature" ? (
                        <div className={styles.featureCard}>
                            <img
                                src={item.src}
                                alt={item.title}
                                className={styles.featureImage}
                            />
                            <div className={styles.featureOverlay}>
                                <div className={styles.featureContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <div className={styles.plusIcon}>
                                        <Plus size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.imageContainer}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <h3>{item.title}</h3>
                                    <p>View Details</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
