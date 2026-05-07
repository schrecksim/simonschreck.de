interface GlossaryEntryProps {
    term: string;
    definition: string;
    h_problems: string;
    l1b_problems: string;
    l1_problems: string;
    l2b_problems: string;
    l2_problems: string;
    l3b_problems: string;
    l3_problems: string;

}

const GlossaryEntryConsulting: React.FC<GlossaryEntryProps> = ({ term, definition, h_problems, l1b_problems, l1_problems, l2b_problems, l2_problems, l3b_problems, l3_problems }) => (
    <div style={{ backgroundColor: 'lightskyblue', padding: '0.5rem', marginBottom: '1rem', borderRadius: '10px'}}>
        <h3>{term}</h3>
        <p>{definition}</p>
        <h4>{h_problems}</h4>
        <ul>
            <li><b>{l1b_problems}</b>{l1_problems}</li>
            <li><b>{l2b_problems}</b>{l2_problems}</li>
            <li><b>{l3b_problems}</b>{l3_problems}</li>
        </ul>
    </div>
);

export default GlossaryEntryConsulting;