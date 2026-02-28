import React from "react";
import "./loader.css";
import loaderImage from "/src/assets/Cura Tech Enginnering WithoutB.png";

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loaderImage} alt="Loading..." className="loader-image" />
        </div>
    );
};

export default Loader;
