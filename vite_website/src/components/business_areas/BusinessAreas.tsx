import { useIntlayer } from "react-intlayer";

const BusinessAreas = () => {
    const content = useIntlayer("business_areas");
    return (
        <div>
            <h2>{content.h_support}</h2>
        </div>
    );
};

export default BusinessAreas;
