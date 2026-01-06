"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
    { id: "Aegis", label: "AEGIS", desc: "Identity Shield" },
    { id: "DualToken", label: "DUAL TOKEN", desc: "Economic Engine" },
    { id: "SVI", label: "SVI", desc: "Social Value Index" },
];

export function Architecture() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-[0.2em]">The Architecture</h2>
                    <p className="text-white/40 tracking-widest text-sm">ENCRYPTION | ECONOMY | ETHOS</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-polis-accent/30 to-transparent -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="glass p-8 rounded-3xl text-center border-polis-accent/10 hover:border-polis-accent/40 transition-all group">
                                    <div className="w-16 h-16 bg-polis-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-polis-accent/20 transition-colors">
                                        <span className="text-polis-accent font-bold text-xl">{index + 1}</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-2">{step.label}</h4>
                                    <p className="text-polis-accent/60 font-medium tracking-widest text-xs uppercase">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
