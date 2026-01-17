export interface Dictionary {
    header: {
        protocol: string;
        join: string;
    };
    hero: {
        title_part1: string;
        title_part2: string;
        title_part3: string;
        subtitle: string;
        cta_primary: string;
        cta_secondary: string;
    };
    deficits: {
        title: string;
        subtitle: string;
        wisdom: { title: string; desc: string };
        care: { title: string; desc: string };
        trust: { title: string; desc: string };
    };
    architecture: {
        title: string;
        subtitle: string;
        aegis: { title: string; subtitle: string; desc: string };
        dual_token: { title: string; subtitle: string; desc: string };
        svi: { title: string; subtitle: string; desc: string };
    };
    tokens: {
        title: string;
        subtitle: string;
        demcoin: { name: string; desc: string };
        carecoin: { name: string; desc: string };
    };
    library: {
        vision: string;
        subtitle: string;
        foundations: string;
        whitepaper_title: string;
        whitepaper_desc: string;
        whitepaper_button: string;
        manifesto_title: string;
        manifesto_desc: string;
        manifesto_button: string;
    };
    footer: {
        oracle_title: string;
        oracle_placeholder: string;
        simulations_label: string;
        simulation_demcoin: string;
        simulation_text: string;
        audio_label: string;
        audio_sub: string;
        notebook_label: string;
        copyright: string;
        motto: string;
    };
    subpages: {
        how_it_works: {
            title: string;
            summary_title: string;
            summary_text: string;
            long_version_title: string;
            intro: string;
            steps: Array<{ title: string; text: string }>;
            different_title: string;
            different_items: Array<{ label: string; text: string }>;
            footer_title: string;
            footer_links: Array<{ label: string; href: string }>;
        };
        vision: {
            title: string;
            subtitle: string;
            intro: string;
            sections: Array<{
                title: string;
                text: string;
                items?: Array<{ label: string; text: string }>;
            }>;
            invitation_title: string;
            invitation_text: string;
            motto: string;
        };
        aegis: {
            title: string;
            intro: string;
            sections: Array<{
                title: string;
                items: Array<{ label: string; text: string }>;
            }>;
            why_matters_title: string;
            why_matters_text: string;
            footer_text: string;
        };
        dual_token: {
            title: string;
            intro: string;
            demcoin: {
                title: string;
                what_is: string;
                how_earn_list: string[];
                quality_text: string;
                why_works: string;
            };
            carecoin: {
                title: string;
                what_is: string;
                how_earn_list: string[];
                different_text: string;
                different_items: Array<{ label: string; text: string }>;
                why_matters: string;
            };
            together_title: string;
            together_intro: string;
            together_items: Array<{ label: string; text: string }>;
            together_footer: string;
        };
        svi: {
            title: string;
            intro: string;
            dimensions_title: string;
            dimensions_intro: string;
            dimensions: Array<{
                title: string;
                items: string[];
            }>;
            changes_title: string;
            changes_intro: string;
            scenarios: Array<{ title: string; text: string }>;
            insight_title: string;
            insight_text: string;
            footer: string;
        };
        builders: {
            title: string;
            subtitle: string;
            hero_headline: string;
            hero_subhead: string;
            stack_title: string;
            stack_items: Array<{ title: string; subtitle: string; desc: string }>;
            quest_title: string;
            quest_desc: string;
            cta_fork: string;
            cta_discord: string;
        };
    };
}
