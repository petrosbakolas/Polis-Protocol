import React from "react";
import { getDictionary } from "../../get-dictionary";
import { FoundryLayout } from "@/components/FoundryLayout";
import { BuildersContent } from "@/components/BuildersContent";

export default async function BuildersPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.builders;

    return (
        <FoundryLayout lang={lang} dict={dict}>
            <BuildersContent content={content} />
        </FoundryLayout>
    );
}
