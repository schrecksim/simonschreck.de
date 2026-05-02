import { useIntlayer } from "react-intlayer";
import Glossary from "../glossary/Glossary.tsx";

const BusinessAreas = () => {
    const content = useIntlayer("business_areas");
    const category = 'Consulting Services';

    return (
        <div>
            <h2>{content.h_support}</h2>
            {/* Pass the category prop correctly here */}
            <Glossary category={category} />
        </div>
    );
};

export default BusinessAreas;
