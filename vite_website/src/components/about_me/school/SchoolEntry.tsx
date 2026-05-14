interface SchoolEntryProps {
    graduation: string;
    school: string;
    start: string;
    end: string;
}

const SchoolEntry: React.FC<SchoolEntryProps> = ({ graduation, school, start, end }) => (
    <div>
        <h3>{graduation}</h3>
        <p>{school}</p>
        <p>{start} – {end}</p>
    </div>
);

export default SchoolEntry;