import { useIntlayer } from "react-intlayer";
import GlossaryEntryConsulting from "./GlossaryEntryConsulting.tsx";

const GlossaryLanding: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("glossary");

    const glossaries: { [key: string]: GlossaryEntryProps[] } = {
        'Consulting Services': [
            {
                term: content.t_data_consulting,
                definition: content.d_data_consulting,
                h_problems: content.h_problems_data,
                l1b_problems: content.l1b_problems_data,
                l1_problems: content.l1_problems_data,
                l2b_problems: content.l2b_problems_data,
                l2_problems: content.l1_problems_data,
                l3b_problems: content.l3b_problems_data,
                l3_problems: content.l1_problems_data,
            },
            {
                term: content.t_business_consulting,
                definition: content.d_business_consulting,
                h_problems: content.h_problems_business,
                l1b_problems: content.l1b_problems_business,
                l1_problems: content.l1_problems_business,
                l2b_problems: content.l2b_problems_business,
                l2_problems: content.l2_problems_business,
                l3b_problems: content.l3b_problems_business,
                l3_problems: content.l3_problems_business,
            },
        ],
    };

    const filteredEntries = category ? glossaries[category] || [] : Object.values(glossaries).flat();

    return (
        <div>
            {filteredEntries.map((entry) => (
                <GlossaryEntryConsulting key={entry.term} {...entry} />
            ))}
        </div>
    );
};

export default GlossaryLanding;
