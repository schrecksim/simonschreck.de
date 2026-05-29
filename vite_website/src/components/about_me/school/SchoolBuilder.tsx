import { useState } from "react";
import { useIntlayer } from "react-intlayer";
import SchoolEntry from './SchoolEntry.tsx';

const SchoolBuilder: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("schools");
    const button_texts = useIntlayer("general");
    const [showAll, setShowAll] = useState(false);

    const schools: { [key: string]: SchoolEntryProps[] } = {
        'Universities': [
            {
                graduation: content.bachelor_title,
                school: content.fom,
                start: content.start_bachelor,
                end: content.end_bachelor,
            },
        ],
        'non University': [
            {
                graduation: content.betriebswirt,
                school: content.wa,
                start: content.start_betriebswirt,
                end: content.end_betriebswirt,
            },
            {
                graduation: content.fhr,
                school: content.gsw,
                start: content.start_fhr,
                end: content.end_fhr,
            },
            {
                graduation: content.efs,
                school: content.gsw,
                start: content.start_efs,
                end: content.end_efs,
            },
        ],
    };

    const filteredEntries = category ? schools[category] || [] : Object.values(schools).flat();
    const displayedEntries = showAll ? filteredEntries : filteredEntries.slice(0, 2);

    return (
        <div>
            <h2>{content.h_school}</h2>
            {displayedEntries.map((entry) => (
                <SchoolEntry key={entry.graduation} {...entry} />
            ))}
            {filteredEntries.length > 2 && (
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? button_texts.show_less : button_texts.show_more}
                </button>
            )}
        </div>
    );
};

export default SchoolBuilder;