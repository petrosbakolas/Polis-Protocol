import React from "react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { getDictionary } from "../../get-dictionary";

export default async function SVIPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.svi;

    return (
        <SubPageLayout lang={lang} dict={dict} title={content.title}>
            <div className="space-y-16">
                <section>
                    <div className="whitespace-pre-wrap text-2xl text-white leading-tight font-black text-center mb-10">
                        {content.intro.split('\n\n')[0]}
                    </div>
                    <div className="whitespace-pre-wrap text-lg text-white/50 leading-relaxed text-center italic max-w-3xl mx-auto">
                        {content.intro.split('\n\n').slice(1).join('\n\n')}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-black text-white mb-10 text-center uppercase tracking-widest">
                        {content.dimensions_title}
                    </h2>
                    <p className="text-center text-white/40 mb-12 uppercase tracking-[0.2em] text-xs shrink-0">{content.dimensions_intro}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {content.dimensions.map((dim, i) => (
                            <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:bg-white/[0.03] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="text-8xl font-black text-white">{dim.title[0]}</span>
                                </div>
                                <h3 className="text-xl font-bold text-polis-accent mb-6 uppercase tracking-wider">{dim.title}</h3>
                                <ul className="space-y-4">
                                    {dim.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-4 text-white/60 text-sm leading-relaxed">
                                            <span className="inline-block w-4 h-[2px] bg-polis-accent/40 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-polis-accent/5 p-12 md:p-20 rounded-[80px] border border-polis-accent/10">
                    <h2 className="text-3xl font-black text-white mb-8">{content.changes_title}</h2>
                    <p className="text-polis-accent/80 text-lg font-medium mb-12">{content.changes_intro}</p>

                    <div className="space-y-12">
                        {content.scenarios.map((scenario, i) => (
                            <div key={i} className="bg-black/40 p-10 rounded-[40px] border border-white/5">
                                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-4">
                                    <span className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-red-500' : 'bg-green-500'}`} />
                                    {scenario.title}
                                </h3>
                                <div className="whitespace-pre-wrap text-white/60 leading-relaxed text-sm">
                                    {scenario.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-widest">{content.insight_title}</h2>
                    <div className="whitespace-pre-wrap text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16 px-6 italic">
                        {content.insight_text}
                    </div>
                    <div className="inline-block glass px-12 py-8 rounded-[40px] border-polis-accent text-2xl font-black text-white uppercase tracking-[0.3em]">
                        {content.footer}
                    </div>
                </section>
            </div>
        </SubPageLayout>
    );
}
