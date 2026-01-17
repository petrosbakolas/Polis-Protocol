import React from "react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { getDictionary } from "../../get-dictionary";

export default async function VisionPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.vision;

    return (
        <SubPageLayout lang={lang} dict={dict} title={content.title} subtitle={content.subtitle}>
            <div className="space-y-16 max-w-4xl mx-auto">
                <section>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light border-b border-white/5 pb-12">
                        {content.intro}
                    </p>
                </section>

                {content.sections.map((section, idx) => (
                    <section key={idx} className="space-y-8">
                        <h2 className="text-3xl font-black text-white hover:text-polis-accent transition-colors duration-300 uppercase tracking-widest border-l-4 border-polis-accent pl-6">
                            {section.title}
                        </h2>
                        <div className="whitespace-pre-wrap text-lg text-white/70 leading-relaxed">
                            {section.text}
                        </div>

                        {section.items && (
                            <div className="grid gap-6 mt-12">
                                {section.items.map((item, i) => (
                                    <div key={i} className="glass p-8 rounded-3xl border-white/5 bg-white/[0.02] hover:bg-polis-accent/5 transition-all duration-300">
                                        <h3 className="text-xl font-bold text-polis-accent mb-4 uppercase tracking-wider">{item.label}</h3>
                                        <p className="text-white/60 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}

                <section className="text-center py-20 border-t border-white/5 mt-20">
                    <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                        {content.invitation_title}
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto italic leading-relaxed">
                        {content.invitation_text}
                    </p>
                    <div className="text-3xl md:text-5xl font-black text-gradient uppercase tracking-widest mt-10 animate-pulse">
                        {content.motto}
                    </div>
                </section>
            </div>
        </SubPageLayout>
    );
}
