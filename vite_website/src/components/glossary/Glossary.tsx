import { useIntlayer } from "react-intlayer";
import GlossaryEntry from './GlossaryEntry.tsx';

const Glossary: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("glossary");

    const glossaries: { [key: string]: GlossaryEntryProps[] } = {
        'Consulting Services': [
            {
                term: content.t_data_consulting,
                definition: content.d_data_consulting,
            },
            {
                term: content.t_business_consulting,
                definition: content.d_business_consulting,
            },
        ],
    };

    const filteredEntries = category ? glossaries[category] || [] : Object.values(glossaries).flat();

    return (
        <div>
            {filteredEntries.map((entry) => (
                <GlossaryEntry key={entry.term} {...entry} />
            ))}
        </div>
    );
};

export default Glossary;