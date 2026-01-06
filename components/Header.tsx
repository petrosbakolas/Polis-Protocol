"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header({ lang }: { lang: string }) {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 glass m-4 rounded-2xl px-6 py-4 flex items-center justify-between"
        >
            <Link href={`/${lang}`} className="flex items-center gap-3">
                <Image
                    src="/polis-logo.png"
                    alt="Polis Protocol Logo"
                    width={40}
                    height={40}
                    className="rounded-full shadow-lg border border-polis-accent/20"
                />
                <span className="font-bold text-xl tracking-wider text-white hidden sm:block">
                    POLIS <span className="text-polis-accent">PROTOCOL</span>
                </span>
            </Link>

            <nav className="flex items-center gap-6">
                <Link
                    href={`/${lang === "en" ? "gr" : "en"}`}
                    className="text-sm font-medium hover:text-polis-accent transition-colors uppercase tracking-widest"
                >
                    {lang === "en" ? "GR" : "EN"}
                </Link>
                <button className="bg-polis-accent text-polis-primary px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                    JOIN
                </button>
            </nav>
        </motion.header>
    );
}
