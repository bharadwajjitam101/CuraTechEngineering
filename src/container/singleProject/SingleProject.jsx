import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import Project from "./Projects"
import React, {useEffect, useState} from "react";
import styles from "./singleProject.module.css";


const projectInfo = [
    {
        embed_url: 'https://www.youtube.com/embed/C7u45cuhmrs?si=8_gbeqzEY6V_atnZ',
        project_title: ' Aluminium Partition Work for Kamakhya BioFuels',
        project_desc: 'Ongoing fabrication and installation of aluminium partition systems for a workspace spanning 3 lakh sq. ft.',
        client_name: 'Kamakhya BioFuels',
        category: 'Industrial Fitting',
        current_status: 'Sections installed for office and industrial zones.',
    },
    {
        embed_url: 'https://www.youtube.com/embed/Hz4Rbz5RRmE?si=wfbQxNEEH319IK9B',
        project_title: 'G+2 Residential Home Near Saai Baba Mandir, Six Mile',
        project_desc: 'A G+2 home designed for comfortable living with a focus on quality materials and contemporary styling. The project is currently in its construction phase.',
        client_name: 'Kamakhya BioFuels',
        category: 'Industrial Fitting',
        current_status: 'Foundation and structure work in progress.',
    },
]

function SingleProject() {
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
                heading="Ongoing Projects"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={true}
                containerStyle={{}}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 8099997489",
                }}
            />
            <div className={is_mobile_width ? styles.sp_mb_container : styles.sp_container}>
                {
                    projectInfo.map((project_details) => (
                        is_mobile_width ?
                            <div className={styles.sp_mb_projects_info_container}>
                                <div className={styles.sp_mb_project_title_info}>
                                    <h2 style={{fontSize: "1.3rem", fontWeight: "bold"}}>
                                        {project_details.project_title}
                                    </h2>

                                    <p style={{fontSize: "1.0rem", lineHeight: "1.3"}}>
                                        {project_details.project_desc}
                                    </p>
                                    <div className={styles.sp_project_info_wrapper}>
                                        <h3 style={{fontSize: "1.2rem", fontWeight: "bold"}}>
                                            Project Info
                                        </h3>

                                        <div className={styles.sp_client_info}>
                                            <div>
                                                <strong>Client:</strong> {project_details.client_name}
                                            </div>
                                            <div>
                                                <strong>Category:</strong> {project_details.category}
                                            </div>
                                            <div>
                                                <strong>Current Status:</strong> {project_details.current_status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sp_mb_projects_info_child}>
                                    <iframe
                                        style={{
                                            borderRadius: 16
                                        }}
                                        width="100%"
                                        height="100%"
                                        src={project_details.embed_url}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                            </div> :
                            <div className={styles.sp_projects_info}>
                                <div className={styles.sp_projects_info_child}>
                                    <iframe
                                        style={{
                                            borderRadius: 16
                                        }}
                                        width="100%"
                                        height="100%"
                                        src={project_details.embed_url}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className={styles.sp_project_title_info}>
                                    <h2 style={{fontSize: "2rem", fontWeight: "bold"}}>
                                        {project_details.project_title}
                                    </h2>

                                    <p style={{fontSize: "1.2rem", lineHeight: "1.5"}}>
                                        {project_details.project_desc}
                                    </p>
                                    <div className={styles.sp_project_info_wrapper}>
                                        <h3 style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                                            Project Info
                                        </h3>

                                        <div className={styles.sp_client_info}>
                                            <div>
                                                <strong>Client:</strong> {project_details.client_name}
                                            </div>
                                            <div>
                                                <strong>Category:</strong> {project_details.category}
                                            </div>
                                            <div>
                                                <strong>Current Status:</strong> {project_details.current_status}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))
                }

            </div>
            <Project/>
        </>
    );

}

export default SingleProject;
