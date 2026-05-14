import { useIntlayer } from "react-intlayer";
import OccupationEntry from './OccupationEntry.tsx';

const OccupationBuilder: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("occupations");

    const occupations: { [key: string]: OccupationEntryProps[] } = {
        'self employed': [
            {
                title: content.title_se,
                employer: content.se,
                location: content.location_se,
                start: content.start_se,
                end: content.current,
                description: content.description_se,
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
            },
            {
                title: content.title_ausbildung,
                employer: content.tuteco,
                location: content.location_ausbildung,
                start: content.start_ausbildung,
                end: content.end_ausbildung,
                description: content.description_ausbildung,
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

    return (
        <div>
            <h2>{content.h_occupation}</h2>
            {filteredEntries.map((entry) => (
                <OccupationEntry key={entry.term} {...entry} />
            ))}
        </div>
    );
};

export default OccupationBuilder;