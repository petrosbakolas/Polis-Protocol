"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer({ dict }: { dict: any }) {
    return (
        <footer className="py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-md text-center md:text-left">
                        <h4 className="text-3xl font-black text-white mb-4 uppercase">{dict.join_title}</h4>
                        <p className="text-white/40 mb-8">
                            {dict.join_desc}
                        </p>
                        <div className="flex gap-4">
                            <input
                                type="email"
                                placeholder={dict.placeholder}
                                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex-grow focus:outline-none focus:border-polis-accent text-white"
                            />
                            <button className="bg-polis-accent text-polis-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform uppercase">
                                {dict.join_button}
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-12 text-sm text-white/40 uppercase tracking-widest font-bold">
                        <a href="#" className="hover:text-polis-accent">Twitter</a>
                        <a href="#" className="hover:text-polis-accent">Discord</a>
                        <a href="#" className="hover:text-polis-accent">GitHub</a>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-xs tracking-widest">
                    <p>{dict.copyright}</p>
                    <p>{dict.motto}</p>
                </div>
            </div>
        </footer>
    );
}
