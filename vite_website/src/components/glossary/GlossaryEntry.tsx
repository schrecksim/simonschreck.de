interface GlossaryEntryProps {
    term: string;
    definition: string;
}

const GlossaryEntry: React.FC<GlossaryEntryProps> = ({ term, definition }) => (
    <div>
        <strong>{term}</strong><br />
        {definition}
    </div>
);

export default GlossaryEntry;