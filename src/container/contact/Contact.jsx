import React, {useEffect} from "react";
import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/phone.png";
import dmail from "../../assets/dmail.png";
import SubmitForm from "./Form";
import styles from "../../container/contact/Contact.module.css";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <CommonCarousel
                heading="Contacts"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={false}
                containerStyle={{}}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
                }}
            />
            <SubmitForm/>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.05706189939!2d91.807181!3d26.1296824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a598756cbf283%3A0x381bef30feb57644!2sLife%20Care%20Super%20Speciality%20Clinic%20And%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1734728875500!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactWrapper}>
                    <div className={styles.addressCard}>
                        <div className={styles.companyName}>Cura Tech Engineering</div>
                        <h1 className={styles.addressText}>
                            House No 06, Jayanagar, Guwahati, 781022
                        </h1>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconContainer}>
                            <img src={phone} alt="Phone" className={styles.icon}/>
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactTitle}>Company Phones</div>
                            <div className={styles.contactNumbers}>
                                <div>+91 8099997489</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconContainer}>
                            <img src={dmail} alt="Email" className={styles.icon}/>
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactTitle}>Company Email</div>
                            <div className={styles.contactNumbers}>
                                <div>curatechengineering@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
