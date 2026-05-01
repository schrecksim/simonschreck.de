import { useIntlayer } from "react-intlayer";

const Availability = () => {
    const content = useIntlayer("availability");
    return (
        <div>
            <h2>{content.h_availability}</h2>

            <p>{content.t_availability}</p>
            <ul>
                <li>{content.availability}</li>
                <li>{content.main_area}</li>
            </ul>

            <p>{content.disclaimer}</p>
        </div>
    );
};

export default Availability;
