export interface DescriptionItem {
    heading: string;
    text: string;
    topics: string;
}

export interface ProjectEntryProps {
    title: string;
    start: string;
    end: string;
    industry: string;
    customer: string;
    role: string;
    language: string;
    background: string;
    tasks: string;
    subtasks: string;
    technicalItems?: DescriptionItem[];
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({
                                                       title,
                                                       start,
                                                       end,
                                                       industry,
                                                       customer,
                                                       role,
                                                       language,
                                                       background,
                                                       tasks,
                                                       subtasks,
                                                       technicalItems = []
                                                   }) => (
    <div>
        <h3>{title}</h3>
        <p><strong>{start} – {end}</strong></p>
        <p>{industry} | {customer}</p>
        <p>{role} | {language}</p>
        <p><strong>Background:</strong> {background}</p>
        {tasks && <p><strong>Tasks:</strong> {tasks}</p>}
        {subtasks && <p><strong>Subtasks:</strong> {subtasks}</p>}
        {technicalItems.length > 0 && (
            <div>
                <p><strong>Technical Activities:</strong></p>
                <ul>
                    {technicalItems.map((item, index) => (
                        <li key={index}>
                            <b>{item.heading}</b>
                            <ul>
                                <li>{item.text}</li>
                                {item.topics && <li>{item.topics}</li>}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

export default ProjectEntry;