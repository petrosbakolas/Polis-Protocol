"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const getSteps = (dict: any) => [
    { id: "aegis", label: dict.aegis.title, subtitle: dict.aegis.subtitle, desc: dict.aegis.desc, icon: "🛡️" },
    { id: "dual-token", label: dict.dual_token.title, subtitle: dict.dual_token.subtitle, desc: dict.dual_token.desc, icon: "⚖️" },
    { id: "svi", label: dict.svi.title, subtitle: dict.svi.subtitle, desc: dict.svi.desc, icon: "📊" },
];

export function Architecture({ dict, lang }: { dict: any; lang: string }) {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">{dict.title}</h2>
                    <p className="text-white/40 tracking-[0.3em] text-sm uppercase">{dict.subtitle}</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-polis-accent/30 to-transparent -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {getSteps(dict).map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                className="relative z-10 flex"
                            >
                                <Link
                                    href={`/${lang}/${step.id}`}
                                    className="glass p-8 rounded-3xl text-center border-polis-accent/10 hover:border-polis-accent/40 transition-all group flex flex-col items-center w-full"
                                >
                                    <div className="w-16 h-16 bg-polis-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-polis-accent/20 transition-colors">
                                        <span className="text-2xl">{step.icon}</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-2">{step.label}</h4>
                                    <p className="text-polis-accent font-bold tracking-widest text-xs uppercase mb-4">{step.subtitle}</p>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
