import styles from "./SpecialProjects.module.css";
import office1 from "../../assets/office1.png";
import office2 from "../../assets/office2.png";
import office3 from "../../assets/office3.png";
import office4 from "../../assets/office4.png";
import React from "react";

const SpecialProjects = () => {
    const projects = [
        {
            id: 1,
            embed_url: 'https://www.youtube.com/embed/_0CD9LAcNJE?si=Lk4b58Ic-gug83gj',
        },
        {
            id: 2,
            embed_url: 'https://www.youtube.com/embed/C7u45cuhmrs?si=8_gbeqzEY6V_atnZ',
        },
        {
            id: 3,
            embed_url: 'https://www.youtube.com/embed/Hz4Rbz5RRmE?si=wfbQxNEEH319IK9B',
        },
    ];

    return (
        <div className={styles.special_projects_container}>
            <h3 className={styles.special_projects_title}>
                Our Projects
            </h3>

            <div className={styles.projects_layout}>
                {projects?.map((project) => (
                    <div className={styles.project_card} key={project.id}>
                        <iframe
                            style={{
                                borderRadius: 16
                            }}
                            width="100%"
                            height="100%"
                            src={project.embed_url}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialProjects;
