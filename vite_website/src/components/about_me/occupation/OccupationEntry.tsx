export interface DescriptionItem {
    heading: string;
    text: string;
    topics: string;
}

export interface OccupationEntryProps {
    title: string;
    employer: string;
    location: string;
    start: string;
    end: string;
    description: string;
    descriptionItems?: DescriptionItem[];
}

const OccupationEntry: React.FC<OccupationEntryProps> = ({
                                                             title,
                                                             employer,
                                                             location,
                                                             start,
                                                             end,
                                                             description,
                                                             descriptionItems = []
                                                         }) => (<div>
        <h3>{title}</h3>
        <p>{employer}</p>
        <p>{location}</p>
        <p>{start} – {end}</p>
        {description && <p>{description}</p>}
        {descriptionItems.length > 0 && (<ul>
                {descriptionItems.map((item, index) => (<li key={index}>
                        <b>{item.heading}</b>
                        <ul>
                            <li>{item.text}</li>
                            {item.topics && <li>{item.topics}</li>}
                        </ul>
                    </li>))}
            </ul>)}
    </div>);

export default OccupationEntry;