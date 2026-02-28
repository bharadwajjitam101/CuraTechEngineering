import PropTypes from "prop-types";
import styles from "./CommonSlider.module.css";
import FloatingContact from "./FloatingContact";
import Bi from "../../assets/L3.webp"

const CommonCarousel = ({
    heading,
    description,
    backgroundImage,
    showFloatingContact,
    containerStyle,
    floatingContactProps,
}) => (
    <div>
        <div
            className={styles.sliderContainer}
            style={{
                backgroundImage: `url(${Bi})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ...containerStyle,
            }}
        >
            <div className={styles.heading}>{heading}</div>
            <div className={styles.description}>{description}</div>
        </div>
        {showFloatingContact && (
            <div className={styles.FloatingContainer}>
                <FloatingContact {...floatingContactProps} />
            </div>
        )}
    </div>
);

CommonCarousel.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    showFloatingContact: PropTypes.bool,
    containerStyle: PropTypes.object,
    floatingContactProps: PropTypes.object,
};

CommonCarousel.defaultProps = {
    showFloatingContact: false,
    containerStyle: {},
    floatingContactProps: {},
};

export default CommonCarousel;
