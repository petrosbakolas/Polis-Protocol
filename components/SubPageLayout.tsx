"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Link from "next/link";
import { Dictionary } from "@/app/types/dictionary";

interface SubPageLayoutProps {
    lang: string;
    dict: Dictionary;
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export function SubPageLayout({ lang, dict, children, title, subtitle }: SubPageLayoutProps) {
    return (
        <main className="bg-polis-primary min-h-screen selection:bg-polis-accent selection:text-polis-primary">
            <Header lang={lang} dict={dict.header} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-polis-accent/10 to-transparent blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight font-display">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-xl md:text-2xl text-polis-accent font-medium max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                        <div className="h-1.5 w-24 bg-polis-accent mx-auto mt-12 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="glass p-8 md:p-16 rounded-[40px] border-white/5 relative"
                    >
                        <div className="prose prose-invert prose-polis max-w-none">
                            {children}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation Footer Section (Optional call to action) */}
            <section className="py-20 bg-black/20 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-10">
                        {lang === "en" ? "EXPLORE MORE" : "ΕΞΕΡΕΥΝΗΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ"}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`/${lang}/how-it-works`} className="glass px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                            {lang === "en" ? "How it Works" : "Πώς Λειτουργεί"}
                        </Link>
                        <Link href={`/${lang}/vision`} className="glass px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                            {lang === "en" ? "The Vision" : "Το Όραμα"}
                        </Link>
                        <Link href={`/${lang}/aegis`} className="glass px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                            Aegis
                        </Link>
                        <Link href={`/${lang}/dual-token`} className="glass px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                            Dual Token
                        </Link>
                        <Link href={`/${lang}/svi`} className="glass px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                            SVI
                        </Link>
                    </div>
                </div>
            </section>

            <Footer dict={dict.footer} />
        </main>
    );
}
