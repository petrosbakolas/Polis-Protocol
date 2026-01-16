"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Library({ dict, lang }: { dict: any; lang: string }) {
    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Manifesto Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="glass p-10 md:p-12 rounded-[40px] border-polis-accent/20 relative overflow-hidden"
                    >
                        <span className="text-polis-accent font-bold tracking-[0.3em] text-xs uppercase mb-6 block font-display">{dict.foundations}</span>
                        <h3 className="text-3xl font-black text-white mb-6 leading-tight font-display">{dict.manifesto_title}</h3>
                        <p className="text-white/60 mb-10 text-lg leading-relaxed">
                            {dict.manifesto_desc}
                        </p>
                        <Link href={`/${lang}/vision`} className="bg-polis-accent text-polis-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-4 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all w-full sm:w-auto">
                            <span className="whitespace-nowrap">{dict.manifesto_button}</span>
                        </Link>
                    </motion.div>

                    {/* Whitepaper Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="glass p-10 md:p-12 rounded-[40px] border-polis-accent/20 relative overflow-hidden"
                    >
                        <span className="text-polis-accent font-bold tracking-[0.3em] text-xs uppercase mb-6 block font-display">{dict.foundations}</span>
                        <h3 className="text-3xl font-black text-white mb-6 leading-tight font-display">{dict.whitepaper_title}</h3>
                        <p className="text-white/60 mb-10 text-lg leading-relaxed">
                            {dict.whitepaper_desc}
                        </p>
                        <Link
                            href={`/${lang}/builders`}
                            className="bg-white text-polis-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-4 hover:bg-polis-accent transition-colors w-full sm:w-auto"
                        >
                            <span className="whitespace-nowrap">{dict.whitepaper_button}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
