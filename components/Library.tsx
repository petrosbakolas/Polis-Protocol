"use client";

import React from "react";
import { motion } from "framer-motion";

export function Library() {
    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-8">THE VISION</h2>
                        <div className="aspect-video glass rounded-[32px] overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                <button className="w-20 h-20 bg-polis-accent rounded-full flex items-center justify-center text-polis-primary hover:scale-110 transition-transform">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white text-sm font-medium tracking-widest opacity-60">
                                CLOUDFLARE STREAM / YOUTUBE
                            </div>
                        </div>
                    </motion.div>

                    {/* Book Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="glass p-12 rounded-[40px] border-polis-accent/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4">
                            <div className="w-64 h-64 bg-polis-accent/5 rounded-full blur-3xl" />
                        </div>

                        <span className="text-polis-accent font-bold tracking-[0.3em] text-xs uppercase mb-6 block">Library Resources</span>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase leading-tight">THE PROTOCOL<br />FOUNDATIONS</h3>
                        <p className="text-white/60 mb-10 text-lg leading-relaxed">
                            Download the comprehensive architectural guide to the Polis Protocol. A synthesis of philosophical framework and technical specification.
                        </p>
                        <button className="bg-white text-polis-primary px-8 py-4 rounded-xl font-black flex items-center gap-4 hover:bg-polis-accent transition-colors">
                            <span>DOWNLOAD PDF</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
