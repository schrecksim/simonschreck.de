import { useState } from "react";
import { useIntlayer } from "react-intlayer";
import ProjectEntry, { type DescriptionItem, type ProjectEntryProps } from './ProjectEntry.tsx';

const ProjectBuilder: React.FC<{ category?: string }> = ({ category }) => {
    const content = useIntlayer("projects");
    const button_texts = useIntlayer("general");
    const [showAll, setShowAll] = useState(false);

    // Dynamisch: Lädt technische Aktivitäten für ein Projekt
    const createTechnicalItems = (prefix: string): DescriptionItem[] => {
        const items: DescriptionItem[] = [];
        let i = 1;
        while (true) {
            const headingKey = `desc_${prefix}_li${i}b` as keyof typeof content;
            const textKey = `desc_${prefix}_li${i}` as keyof typeof content;
            const topicsKey = `desc_${prefix}_li${i}_topics` as keyof typeof content;

            const heading = content[headingKey];
            if (!heading) break;

            items.push({
                heading,
                text: content[textKey] || '',
                topics: content[topicsKey] || ''
            });
            i++;
        }
        return items;
    };

    // Liste aller Projekte (antichronologisch, wie im Dokument)
    const projects: ProjectEntryProps[] = [
        // 1. Google Ads Strategy
        {
            title: content.project_google_ads_title,
            start: content.project_google_ads_start,
            end: content.project_google_ads_end,
            industry: content.project_google_ads_industry,
            customer: content.project_google_ads_customer,
            role: content.project_google_ads_role,
            language: content.project_google_ads_language,
            background: content.project_google_ads_background,
            tasks: content.project_google_ads_tasks,
            subtasks: content.project_google_ads_subtasks,
            technicalItems: createTechnicalItems("google_ads"),
        },
        // 2. Business Analytics & Turnaround Management
        {
            title: content.project_business_analytics_title,
            start: content.project_business_analytics_start,
            end: content.project_business_analytics_end,
            industry: content.project_business_analytics_industry,
            customer: content.project_business_analytics_customer,
            role: content.project_business_analytics_role,
            language: content.project_business_analytics_language,
            background: content.project_business_analytics_background,
            tasks: content.project_business_analytics_tasks,
            subtasks: content.project_business_analytics_subtasks,
            technicalItems: createTechnicalItems("business_analytics"),
        },
        // 3. SAP Fiori Migration
        {
            title: content.project_sap_fiori_title,
            start: content.project_sap_fiori_start,
            end: content.project_sap_fiori_end,
            industry: content.project_sap_fiori_industry,
            customer: content.project_sap_fiori_customer,
            role: content.project_sap_fiori_role,
            language: content.project_sap_fiori_language,
            background: content.project_sap_fiori_background,
            tasks: content.project_sap_fiori_tasks,
            subtasks: content.project_sap_fiori_subtasks,
            technicalItems: createTechnicalItems("sap_fiori"),
        },
        // 4. Market Analysis Switzerland
        {
            title: content.project_market_analysis_title,
            start: content.project_market_analysis_start,
            end: content.project_market_analysis_end,
            industry: content.project_market_analysis_industry,
            customer: content.project_market_analysis_customer,
            role: content.project_market_analysis_role,
            language: content.project_market_analysis_language,
            background: content.project_market_analysis_background,
            tasks: content.project_market_analysis_tasks,
            subtasks: content.project_market_analysis_subtasks,
            technicalItems: createTechnicalItems("market_analysis"),
        },
        // 5. Musicbrainz Analysis
        {
            title: content.project_musicbrainz_title,
            start: content.project_musicbrainz_start,
            end: content.project_musicbrainz_end,
            industry: content.project_musicbrainz_industry,
            customer: content.project_musicbrainz_customer,
            role: content.project_musicbrainz_role,
            language: content.project_musicbrainz_language,
            background: content.project_musicbrainz_background,
            tasks: content.project_musicbrainz_tasks,
            subtasks: content.project_musicbrainz_subtasks,
            technicalItems: createTechnicalItems("musicbrainz"),
        },
        // 6. Metadata App Documentation
        {
            title: content.project_metadata_doc_title,
            start: content.project_metadata_doc_start,
            end: content.project_metadata_doc_end,
            industry: content.project_metadata_doc_industry,
            customer: content.project_metadata_doc_customer,
            role: content.project_metadata_doc_role,
            language: content.project_metadata_doc_language,
            background: content.project_metadata_doc_background,
            tasks: content.project_metadata_doc_tasks,
            subtasks: content.project_metadata_doc_subtasks,
            technicalItems: createTechnicalItems("metadata_doc"),
        },
        // 7. Metadata Mapping V2
        {
            title: content.project_metadata_v2_title,
            start: content.project_metadata_v2_start,
            end: content.project_metadata_v2_end,
            industry: content.project_metadata_v2_industry,
            customer: content.project_metadata_v2_customer,
            role: content.project_metadata_v2_role,
            language: content.project_metadata_v2_language,
            background: content.project_metadata_v2_background,
            tasks: content.project_metadata_v2_tasks,
            subtasks: content.project_metadata_v2_subtasks,
            technicalItems: createTechnicalItems("metadata_v2"),
        },
        // 8. Portfolio Management (Markowitz)
        {
            title: content.project_portfolio_title,
            start: content.project_portfolio_start,
            end: content.project_portfolio_end,
            industry: content.project_portfolio_industry,
            customer: content.project_portfolio_customer,
            role: content.project_portfolio_role,
            language: content.project_portfolio_language,
            background: content.project_portfolio_background,
            tasks: content.project_portfolio_tasks,
            subtasks: content.project_portfolio_subtasks,
            technicalItems: createTechnicalItems("portfolio"),
        },
        // 9. Metadata Mapping Extensions
        {
            title: content.project_metadata_ext_title,
            start: content.project_metadata_ext_start,
            end: content.project_metadata_ext_end,
            industry: content.project_metadata_ext_industry,
            customer: content.project_metadata_ext_customer,
            role: content.project_metadata_ext_role,
            language: content.project_metadata_ext_language,
            background: content.project_metadata_ext_background,
            tasks: content.project_metadata_ext_tasks,
            subtasks: content.project_metadata_ext_subtasks,
            technicalItems: createTechnicalItems("metadata_ext"),
        },
        // 10. Azure DevOps Backlog
        {
            title: content.project_azure_devops_title,
            start: content.project_azure_devops_start,
            end: content.project_azure_devops_end,
            industry: content.project_azure_devops_industry,
            customer: content.project_azure_devops_customer,
            role: content.project_azure_devops_role,
            language: content.project_azure_devops_language,
            background: content.project_azure_devops_background,
            tasks: content.project_azure_devops_tasks,
            subtasks: content.project_azure_devops_subtasks,
            technicalItems: createTechnicalItems("azure_devops"),
        },
        // 11. Wikimedia API Query
        {
            title: content.project_wikimedia_title,
            start: content.project_wikimedia_start,
            end: content.project_wikimedia_end,
            industry: content.project_wikimedia_industry,
            customer: content.project_wikimedia_customer,
            role: content.project_wikimedia_role,
            language: content.project_wikimedia_language,
            background: content.project_wikimedia_background,
            tasks: content.project_wikimedia_tasks,
            subtasks: content.project_wikimedia_subtasks,
            technicalItems: createTechnicalItems("wikimedia"),
        },
        // 12. Metadata Mapping V1
        {
            title: content.project_metadata_v1_title,
            start: content.project_metadata_v1_start,
            end: content.project_metadata_v1_end,
            industry: content.project_metadata_v1_industry,
            customer: content.project_metadata_v1_customer,
            role: content.project_metadata_v1_role,
            language: content.project_metadata_v1_language,
            background: content.project_metadata_v1_background,
            tasks: content.project_metadata_v1_tasks,
            subtasks: content.project_metadata_v1_subtasks,
            technicalItems: createTechnicalItems("metadata_v1"),
        },
        // 13. VBA Metadata Mapping
        {
            title: content.project_vba_metadata_title,
            start: content.project_vba_metadata_start,
            end: content.project_vba_metadata_end,
            industry: content.project_vba_metadata_industry,
            customer: content.project_vba_metadata_customer,
            role: content.project_vba_metadata_role,
            language: content.project_vba_metadata_language,
            background: content.project_vba_metadata_background,
            tasks: content.project_vba_metadata_tasks,
            subtasks: content.project_vba_metadata_subtasks,
            technicalItems: createTechnicalItems("vba_metadata"),
        },
        // 14. Enterprise Architect Replacement
        {
            title: content.project_ea_replacement_title,
            start: content.project_ea_replacement_start,
            end: content.project_ea_replacement_end,
            industry: content.project_ea_replacement_industry,
            customer: content.project_ea_replacement_customer,
            role: content.project_ea_replacement_role,
            language: content.project_ea_replacement_language,
            background: content.project_ea_replacement_background,
            tasks: content.project_ea_replacement_tasks,
            subtasks: content.project_ea_replacement_subtasks,
            technicalItems: createTechnicalItems("ea_replacement"),
        },
        // 15. Microsoft Office Introduction
        {
            title: content.project_office_title,
            start: content.project_office_start,
            end: content.project_office_end,
            industry: content.project_office_industry,
            customer: content.project_office_customer,
            role: content.project_office_role,
            language: content.project_office_language,
            background: content.project_office_background,
            tasks: content.project_office_tasks,
            subtasks: content.project_office_subtasks,
            technicalItems: createTechnicalItems("office"),
        },
    ];

    // Filterung nach Kategorie (falls gewünscht)
    const filteredProjects = category
        ? projects.filter(project => project.industry.toLowerCase().includes(category.toLowerCase()))
        : projects;

    // Standardmäßig 3 Projekte anzeigen, bei Klick alle
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

    return (
        <div>
            <h2>{content.h_projects}</h2>
            {displayedProjects.map((project) => (
                <ProjectEntry key={`${project.title}-${project.start}`} {...project} />
            ))}
            {filteredProjects.length > 2 && (
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll ? button_texts.show_less : button_texts.show_more}
                </button>
            )}
        </div>
    );
};

export default ProjectBuilder;