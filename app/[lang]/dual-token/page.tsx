import React from "react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { getDictionary } from "../../get-dictionary";

export default async function DualTokenPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.dual_token;

    return (
        <SubPageLayout lang={lang} dict={dict} title={content.title}>
            <div className="space-y-16">
                <section>
                    <div className="whitespace-pre-wrap text-xl text-white/80 leading-relaxed text-center italic max-w-2xl mx-auto">
                        {content.intro}
                    </div>
                </section>

                {/* DemCoin Section */}
                <section className="relative">
                    <div className="absolute -left-20 top-0 w-64 h-64 bg-polis-accent/10 blur-[100px] rounded-full pointer-events-none" />
                    <h2 className="text-3xl font-black text-white mb-8 border-b-2 border-polis-accent pb-4 inline-block">
                        {content.demcoin.title}
                    </h2>
                    <div className="glass p-10 rounded-[40px] border-white/5 mb-8">
                        <p className="text-xl text-polis-accent font-bold mb-8 uppercase tracking-widest">{content.demcoin.what_is}</p>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">How you earn it</h4>
                                <ul className="space-y-4">
                                    {content.demcoin.how_earn_list.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/80">
                                            <span className="w-1.5 h-1.5 bg-polis-accent rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">Quality Determination</h4>
                                <p className="text-white/60 italic text-sm leading-relaxed">
                                    {content.demcoin.quality_text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whitespace-pre-wrap text-lg text-white/60 leading-relaxed bg-black/20 p-8 rounded-3xl">
                        {content.demcoin.why_works}
                    </div>
                </section>

                <hr className="border-white/5" />

                {/* CareCoin Section */}
                <section className="relative">
                    <div className="absolute -right-20 top-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <h2 className="text-3xl font-black text-white mb-8 border-b-2 border-green-500 pb-4 inline-block">
                        {content.carecoin.title}
                    </h2>
                    <div className="glass p-10 rounded-[40px] border-white/5 mb-8">
                        <p className="text-xl text-green-500 font-bold mb-8 uppercase tracking-widest">{content.carecoin.what_is}</p>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">How you earn it</h4>
                                <ul className="space-y-4">
                                    {content.carecoin.how_earn_list.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/80">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-6">{content.carecoin.different_text}</h4>
                                <div className="space-y-4">
                                    {content.carecoin.different_items.map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <span className="text-green-500 font-black">→</span>
                                            <p className="text-sm text-white/60">
                                                <strong className="text-white">{item.label}:</strong> {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whitespace-pre-wrap text-lg text-white/60 leading-relaxed bg-black/20 p-8 rounded-3xl border-r-4 border-green-500/30">
                        {content.carecoin.why_matters}
                    </div>
                </section>

                {/* Together Section */}
                <section className="bg-gradient-to-br from-polis-accent/10 to-green-500/10 p-12 rounded-[50px] border border-white/10 text-center">
                    <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-widest">{content.together_title}</h2>
                    <p className="text-white/60 mb-12 uppercase tracking-[0.2em] text-sm">{content.together_intro}</p>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {content.together_items.map((item, i) => (
                            <div key={i} className="glass p-8 rounded-3xl bg-black/40">
                                <h4 className="text-lg font-bold text-white mb-4">{item.label}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="whitespace-pre-wrap text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto italic">
                        {content.together_footer}
                    </div>
                </section>
            </div>
        </SubPageLayout>
    );
}
