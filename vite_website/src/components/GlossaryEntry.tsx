// This example assumes a simple glossary structure in state or from an API.
import React, { useState } from 'react';

const GlossaryEntry = ({ term }) => {
    const [definition, setDefinition] = useState(''); // Fetch this based on the `term`

    return (
        <div>
            <h2>{term}</h2>
            <p>{definition}</p>
        </div>
    );
};

export default GlossaryEntry;