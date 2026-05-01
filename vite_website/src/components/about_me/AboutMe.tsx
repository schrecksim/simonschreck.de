import { useIntlayer } from "react-intlayer";

const AboutMe = () => {
    const content = useIntlayer("about_me");
    return (
        <div>
            <h2>{content.h_about_me}</h2>
        </div>
    );
};

export default AboutMe;
