import { useIntlayer } from "react-intlayer";

const Socials = () => {
    const content = useIntlayer("socials");
    return (
        <div>
            <h2>{content.h_socials}</h2>
            <p>{content.disclaimer}</p>

            <h3>{content.h_international}</h3>
            <ul>
                <li><a className={"button"} href="https://www.linkedin.com/in/simonschreck/" target="_blank">LinkedIn</a></li>
            </ul>

            <h3>{content.h_europe}</h3>
            <ul>
                <li><a className={"button"} href="https://www.malt.de/profile/simonschreck" target="_blank">Malt</a></li>
            </ul>

            <h3>{content.h_dach}</h3>
            <ul>
                <li><a className={"button"} href="https://www.freelancermap.de/profil/it-consultant-und-data-engineer" target="_blank">Freelancermap</a></li>
                <li><a className={"button"} href="https://www.freelance.de/freelancer/377568-IT-Berater" target="_blank">Freelance.de</a></li>
            </ul>
        </div>
    );
};

export default Socials;
