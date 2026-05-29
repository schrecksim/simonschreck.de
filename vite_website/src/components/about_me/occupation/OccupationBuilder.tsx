import { useState } from "react";
import { useIntlayer } from "react-intlayer";
import OccupationEntry, { type DescriptionItem, type OccupationEntryProps } from './OccupationEntry.tsx';

const OccupationBuilder: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("occupations");
    const button_texts = useIntlayer("general");
    const [showAll, setShowAll] = useState(false);

    const createDescriptionItems = (prefix: string): DescriptionItem[] => {
        const items: DescriptionItem[] = [];
        let i = 1;
        while (true) {
            const headingKey = `desc_${prefix}_li${i}b` as keyof typeof content;
            const textKey = `desc_${prefix}_li${i}` as keyof typeof content;
            const topicsKey = `desc_${prefix}_li${i}_topics` as keyof typeof content;

            const heading = content[headingKey];
            if (!heading) break;

            items.push({
                heading,
                text: content[textKey] || '',
                topics: content[topicsKey] || ''
            });
            i++;
        }
        return items;
    };

    const occupations: { [key: string]: OccupationEntryProps[] } = {
        'self employed': [
            {
                title: content.title_se,
                employer: content.se,
                location: content.location_se,
                start: content.start_se,
                end: content.current,
                description: content.description_se,
                descriptionItems: createDescriptionItems("se"),
            },
        ],
        'employee': [
            {
                title: content.title_tu_consultant,
                employer: content.tuteco,
                location: content.location_tu_consultant,
                start: content.start_tu_consultant,
                end: content.end_tu_consultant,
                description: content.description_tu_consultant,
                descriptionItems: createDescriptionItems("tu_consultant"),
            },
            {
                title: content.title_ausbildung,
                employer: content.tuteco,
                location: content.location_ausbildung,
                start: content.start_ausbildung,
                end: content.end_ausbildung,
                description: content.description_ausbildung,
                descriptionItems: createDescriptionItems("ausbildung"),
            },
            {
                title: content.title_tu_journalist,
                employer: content.tuteco,
                location: content.location_tu_journalist,
                start: content.start_tu_journalist,
                end: content.end_tu_journalist,
                description: content.description_tu_journalist,
            },
        ],
    };

    const filteredEntries = category ? occupations[category] || [] : Object.values(occupations).flat();
    const displayedEntries = showAll ? filteredEntries : filteredEntries.slice(0, 2);

    return (
        <div>
            <h2>{content.h_occupation}</h2>
            {displayedEntries.map((entry) => (
                <OccupationEntry key={entry.title} {...entry} />
            ))}
            {filteredEntries.length > 2 && (
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? button_texts.show_less : button_texts.show_more}
                </button>
            )}
        </div>
    );
};

export default OccupationBuilder;