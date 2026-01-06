"use client";

import React from "react";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Wisdom",
        description: "Systemic inability to integrate historical knowledge into future governance.",
        icon: "🏛️",
    },
    {
        title: "Care",
        description: "The erosion of social fabrics and the commodification of human connection.",
        icon: "💖",
    },
    {
        title: "Trust",
        description: "Fragile institutions failing to provide verifiable truth in a digital age.",
        icon: "⚖️",
    },
];

export function Deficits() {
    return (
        <section className="py-24 bg-polis-primary/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">THE DEFICITS</h2>
                    <div className="h-1 w-20 bg-polis-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="glass p-12 rounded-[40px] text-center group cursor-pointer border-white/5 hover:border-polis-accent/50 transition-colors"
                        >
                            <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">{card.title.toUpperCase()}</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
