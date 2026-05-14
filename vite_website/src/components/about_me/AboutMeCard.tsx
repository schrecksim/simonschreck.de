import { useIntlayer } from "react-intlayer";
import pic from "../../assets/sitting_dark.jpg";
import { useState } from 'react';
import '../../styles/AboutMeCard.css';
import {Link} from "../Link.tsx";

export default function AboutMeCard() {
    const content = useIntlayer("about_me");
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="about-me-card-container">
            <h2>{content.h_about_me}</h2>
            <div
                onClick={handleClick}
                className="flip-container"
            >
                <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                    {/* Vorderseite (Bild) */}
                    <div className="card-front">
                        <img
                            src={pic}
                            alt="Simon Schreck smiling"
                            className="profile-image"
                        />
                    </div>

                    {/* Rückseite (Text) */}
                    <div className="card-back">
                        <div className="card-content">
                            <p>{content.intro}</p>
                            <h3>{content.h_why_me}</h3>
                            <p>{content.reason}</p>
                            <Link to={"/aboutme"}>{content.about_me_link}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}