interface CertificationEntryProps {
    title: string;
    institution: string;
    date: string;
    valid_until: string;
    id: string;
}

const CertificationEntry: React.FC<CertificationEntryProps> = ({ title, institution, date, id, valid_until }) => (
    <div>
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{date} – {valid_until}</p>
        <p>ID: {id}</p>
    </div>
);

export default CertificationEntry;