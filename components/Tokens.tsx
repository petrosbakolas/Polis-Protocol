"use client";

import React from "react";
import { motion } from "framer-motion";

export function Tokens({ dict }: { dict: any }) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        {dict.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        {dict.subtitle}
                    </motion.p>
                    <div className="h-1 w-24 bg-polis-accent mx-auto mt-8 rounded-full" />
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-start max-w-6xl mx-auto">
                    {/* DemCoin */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center group"
                    >
                        <div className="relative w-48 h-48 mx-auto mb-10">
                            <div className="absolute inset-0 bg-polis-accent/20 rounded-full blur-2xl group-hover:bg-polis-accent/40 transition-colors duration-500" />
                            <div className="relative w-full h-full glass rounded-full flex items-center justify-center border-2 border-polis-accent shadow-[0_0_50px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-all duration-500">
                                <span className="text-7xl">🏛️</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-polis-accent mb-4 tracking-wider">{dict.demcoin.name}</h3>
                        <p className="text-white/70 text-lg leading-relaxed max-w-xs mx-auto">
                            {dict.demcoin.desc}
                        </p>
                    </motion.div>

                    {/* CareCoin */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center group"
                    >
                        <div className="relative w-48 h-48 mx-auto mb-10">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-500/40 transition-colors duration-500" />
                            <div className="relative w-full h-full glass rounded-full flex items-center justify-center border-2 border-green-500/80 shadow-[0_0_50px_rgba(74,156,45,0.2)] group-hover:shadow-[0_0_80px_rgba(74,156,45,0.4)] transition-all duration-500">
                                <span className="text-7xl">🌱</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-green-500 mb-4 tracking-wider">{dict.carecoin.name}</h3>
                        <p className="text-white/70 text-lg leading-relaxed max-w-xs mx-auto">
                            {dict.carecoin.desc}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
