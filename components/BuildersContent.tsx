"use client";

import React from "react";
import { motion } from "framer-motion";

export function BuildersContent({ content }: { content: any }) {
    return (
        <div className="space-y-24">
            {/* Hero / Mission */}
            <section className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-6 cyber-text-green uppercase tracking-tight"
                >
                    {content.hero_headline}
                </motion.h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                    {content.hero_subhead}
                </p>
            </section>

            {/* The Stack */}
            <section>
                <h3 className="text-sm font-bold text-[#00FF41]/40 mb-12 tracking-[0.5em] text-center uppercase">
                    {content.stack_title}
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {content.stack_items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-[#00FF41]/10 bg-[#00FF41]/5 hover:bg-[#00FF41]/10 hover:border-[#00FF41]/40 transition-all group"
                        >
                            <div className="text-xs text-[#00FF41]/60 mb-4 font-mono uppercase tracking-widest">
                                {item.subtitle}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 group-hover:cyber-text-green transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-sm text-white/50 leading-relaxed font-mono">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Quest / CTA */}
            <section className="py-20 border-t border-[#00FF41]/10 text-center">
                <div className="mb-12">
                    <div className="inline-block p-4 border border-[#00FF41]/20 bg-[#00FF41]/5 mb-6">
                        <h3 className="text-2xl font-black cyber-text-gold uppercase tracking-widest mb-2">
                            {content.quest_title}
                        </h3>
                        <p className="text-[#00FF41] font-bold text-sm">
                            {content.quest_desc}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="https://github.com/polis-protocol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#00FF41] text-black px-10 py-4 font-bold hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all uppercase tracking-widest"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {content.cta_fork}
                    </a>
                    <a
                        href="https://discord.gg/polis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 border border-[#00FF41] text-[#00FF41] px-10 py-4 font-bold hover:bg-[#00FF41]/10 transition-all uppercase tracking-widest"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                        </svg>
                        {content.cta_discord}
                    </a>
                </div>
            </section>
        </div>
    );
}
