import React from "react";
import "./VideoWithPlayButton.css";
import ThumbnailImage from "../../assets/Thumbnail.svg";



const VideoWithPlayButton = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="video-container">
            {/* YouTube Embed iframe */}
            {isPlaying ? (
                <iframe
                    className="video-player visible"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WB5u-noMe_M?autoplay=1"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                // Thumbnail Overlay for the Play Button
                <div
                    className="thumbnail-overlay"
                    style={{ backgroundImage: `url(${ThumbnailImage})` }}
                >
                    <button className="play-button" onClick={handlePlay}>
                        <span>&#9658;</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoWithPlayButton;
