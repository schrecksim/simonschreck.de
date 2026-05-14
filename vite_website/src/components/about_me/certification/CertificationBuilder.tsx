import { useIntlayer } from "react-intlayer";
import CertificationEntry from './CertificationEntry.tsx';

const CertificationBuilder: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("certifications");

    const certifications: { [key: string]: CertificationEntryProps[] } = {
        '': [
            {
                title: content.title_6,
                institution: content.institution_6,
                date: content.date_6,
                valid_until: content.unlimited,
                id: content.id_6,
            },

            {
                title: content.title_5,
                institution: content.institution_sap,
                date: content.date_5,
                valid_until: content.valid_until_5,
                id: content.id_5,
            },

            {
                title: content.title_4,
                institution: content.institution_sap,
                date: content.date_4,
                valid_until: content.valid_until_4,
                id: content.id_4,
            },

            {
                title: content.title_3,
                institution: content.institution_datacamp,
                date: content.date_3,
                valid_until: content.unlimited,
                id: content.id_3,
            },

            {
                title: content.title_2,
                institution: content.institution_2,
                date: content.date_2,
                valid_until: content.unlimited,
                id: content.id_2,
            },

            {
                title: content.title_1,
                institution: content.institution_1,
                date: content.date_1,
                valid_until: content.unlimited,
                id: content.id_1,
            },
        ],
    };

    const filteredEntries = category ? certifications[category] || [] : Object.values(certifications).flat();

    return (
        <div>
            <h2>{content.h_certification}</h2>
            {filteredEntries.map((entry) => (
                <CertificationEntry key={entry.term} {...entry} />
            ))}
        </div>
    );
};

export default CertificationBuilder;