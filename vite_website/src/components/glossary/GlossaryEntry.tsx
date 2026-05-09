interface GlossaryEntryProps {
    term: string;
    definition: string;

}

const GlossaryEntry: React.FC<GlossaryEntryProps> = ({ term, definition }) => (
    <div>
        <h3>{term}</h3>
        <p>{definition}</p>
    </div>
);

export default GlossaryEntry;