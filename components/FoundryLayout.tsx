"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Link from "next/link";

interface FoundryLayoutProps {
    lang: string;
    dict: any;
    children: React.ReactNode;
}

export function FoundryLayout({ lang, dict, children }: FoundryLayoutProps) {
    const content = dict.subpages.builders;

    return (
        <main className="matrix-bg min-h-screen selection:bg-[#00FF41] selection:text-black font-mono scanlines">
            <Header lang={lang} dict={dict.header} />

            {/* Matrix Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <div className="inline-block px-4 py-1 border border-[#00FF41]/30 text-[#00FF41] text-xs mb-8 animate-pulse-green tracking-[0.3em] uppercase">
                            [ System Status: Ready ]
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter cyber-text-green">
                            {content.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#00FF41]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-12">
                            {content.subtitle}
                        </p>

                        <div className="flex items-center justify-center gap-2 text-[#00FF41]/40 text-sm">
                            <span className="w-12 h-[1px] bg-[#00FF41]/20"></span>
                            <span>DECRYPTING MISSION DATA</span>
                            <span className="w-12 h-[1px] bg-[#00FF41]/20"></span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Area */}
            <section className="pb-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="cyber-border bg-black/80 backdrop-blur-md p-8 md:p-16 rounded-sm relative"
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FF41]" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FF41]" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FF41]" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FF41]" />

                        {children}
                    </motion.div>
                </div>
            </section>

            {/* Navigation Footer Section */}
            <section className="py-20 bg-black border-t border-[#00FF41]/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-xl font-bold text-[#00FF41] mb-10 tracking-[0.2em] uppercase">
                        {lang === "en" ? "Terminating Connection" : "Τερματισμός Σύνδεσης"}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href={`/${lang}`} className="border border-[#00FF41]/20 px-8 py-3 text-xs font-bold text-white hover:bg-[#00FF41]/10 transition-all uppercase tracking-widest">
                            {lang === "en" ? "Return to Reality" : "Επιστροφή στην Πραγματικότητα"}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer dict={dict.footer} />
        </main>
    );
}
