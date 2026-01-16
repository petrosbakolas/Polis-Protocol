import React from "react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { getDictionary } from "../../get-dictionary";

export default async function AegisPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.aegis;

    return (
        <SubPageLayout lang={lang} dict={dict} title={content.title}>
            <div className="space-y-16">
                <section>
                    <div className="whitespace-pre-wrap text-2xl text-white/80 leading-relaxed font-light text-center border-b border-white/5 pb-16">
                        {content.intro}
                    </div>
                </section>

                {content.sections.map((section: any, i: number) => (
                    <section key={i}>
                        <h2 className="text-3xl font-black text-white mb-10 text-center uppercase tracking-widest">
                            {section.title}
                        </h2>
                        <div className="grid gap-8">
                            {section.items.map((item: any, j: number) => (
                                <div key={j} className="glass p-10 rounded-[40px] border-white/5 hover:border-polis-accent/20 transition-all group">
                                    <h3 className="text-xl font-bold text-polis-accent mb-6 group-hover:translate-x-2 transition-transform">
                                        {item.label}
                                    </h3>
                                    <div className="whitespace-pre-wrap text-white/60 leading-relaxed">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <section className="bg-polis-accent/5 p-12 rounded-[50px] border border-polis-accent/20">
                    <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">{content.why_matters_title}</h2>
                    <div className="whitespace-pre-wrap text-lg text-white/70 leading-relaxed">
                        {content.why_matters_text}
                    </div>
                </section>

                <section className="text-center py-10">
                    <div className="inline-block glass px-10 py-6 rounded-full border-polis-accent/30 text-xl font-bold text-white uppercase tracking-[0.3em]">
                        {content.footer_text}
                    </div>
                </section>
            </div>
        </SubPageLayout>
    );
}
