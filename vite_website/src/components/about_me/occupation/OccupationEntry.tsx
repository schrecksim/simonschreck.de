interface OccupationEntryProps {
    title: string;
    employer: string;
    location: string;
    start: string;
    end: string;
    description: string;
}

const OccupationEntry: React.FC<OccupationEntryProps> = ({ title, employer, location, start, end, description }) => (
    <div>
        <h3>{title}</h3>
        <p>{employer}</p>
        <p>{location}</p>
        <p>{start} – {end}</p>
        <p>{description}</p>
    </div>
);

export default OccupationEntry;