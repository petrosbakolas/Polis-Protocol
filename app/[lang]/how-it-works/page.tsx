import React from "react";
import { SubPageLayout } from "@/components/SubPageLayout";
import { getDictionary } from "../../get-dictionary";

export default async function HowItWorksPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.subpages.how_it_works;

    return (
        <SubPageLayout lang={lang} dict={dict} title={content.title}>
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-polis-accent mb-4">{content.summary_title}</h2>
                    <p className="text-xl text-white/80 leading-relaxed font-medium">
                        {content.summary_text}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 underline decoration-polis-accent/30 underline-offset-8">
                        {content.long_version_title}
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        {content.intro}
                    </p>
                </section>

                <div className="grid gap-8">
                    {content.steps.map((step, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-polis-accent/20 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-polis-accent text-polis-primary flex items-center justify-center text-sm font-black">
                                    {i + 1}
                                </span>
                                {step.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>

                <section className="bg-polis-accent/5 p-10 rounded-[40px] border border-polis-accent/10">
                    <h2 className="text-2xl font-black text-white mb-8">{content.different_title}</h2>
                    <ul className="space-y-6">
                        {content.different_items.map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="text-polis-accent font-bold">✓</span>
                                <div>
                                    <strong className="text-white block mb-1">{item.label}:</strong>
                                    <span className="text-white/60">{item.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </SubPageLayout>
    );
}
