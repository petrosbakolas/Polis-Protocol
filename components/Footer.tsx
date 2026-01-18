"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dictionary } from "@/app/types/dictionary";
import {
    Dices,
    Shield,
    Network,
    Play,
    Pause,
    ExternalLink
} from "lucide-react";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [oracleQuery, setOracleQuery] = React.useState("");
    const [showToast, setShowToast] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    // Audio file availability - in a real app this might be dynamic
    // but here we know audio.m4a exists.
    const audioExists = true;

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleOracleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!oracleQuery.trim()) return;

        // Clear input and show toast
        setOracleQuery("");
        setShowToast(true);

        // Hide toast after 4 seconds
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <footer className="py-24 border-t border-white/5 relative bg-[#0E2433] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-polis-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-polis-accent/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Oracle Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, x: "-50%" }}
                        className="fixed bottom-12 left-1/2 z-[100] glass px-8 py-4 rounded-2xl border-polis-accent/50 text-polis-accent font-bold tracking-widest shadow-2xl shadow-polis-accent/20"
                    >
                        QUERY UPLINKED. TRANSMISSION RECEIVED.
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* TASK 1: THE ORACLE INPUT */}
                    <div className="text-center space-y-8">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl font-black text-white uppercase tracking-[0.3em]"
                        >
                            {dict.oracle_title}
                        </motion.h4>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative group"
                        >
                            {/* Breathing Border Animation */}
                            <motion.div
                                animate={{
                                    opacity: [0.2, 0.6, 0.2],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-1 bg-polis-accent/30 rounded-2xl blur-md pointer-events-none group-hover:bg-polis-accent/50 transition-colors"
                            />

                            <form onSubmit={handleOracleSubmit} className="relative glass rounded-2xl border-polis-accent/30 overflow-hidden">
                                <input
                                    type="text"
                                    value={oracleQuery}
                                    onChange={(e) => setOracleQuery(e.target.value)}
                                    placeholder={dict.oracle_placeholder}
                                    className="w-full bg-transparent px-8 py-8 md:py-10 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-polis-accent/50 transition-all font-light italic"
                                />
                                <button type="submit" className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block group-hover:scale-110 transition-transform">
                                    <div className="w-12 h-12 rounded-full border border-polis-accent/30 flex items-center justify-center text-polis-accent animate-pulse">
                                        <Network className="w-6 h-6" />
                                    </div>
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* TASK 2: THE SIMULATION LINKS */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] flex-grow bg-white/10" />
                            <h5 className="text-xs font-bold text-polis-accent uppercase tracking-[0.5em] shrink-0">
                                {dict.simulations_label}
                            </h5>
                            <div className="h-[1px] flex-grow bg-white/10" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Simulation 1 */}
                            <a
                                href="https://aistudio.google.com/u/1/apps/drive/1Y6gvo8Panh7RDaQHiK5RnBfkKKreRJzi?showPreview=true&showAssistant=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-6 rounded-2xl border-white/5 hover:border-polis-accent/40 transition-all group hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-polis-accent/10 flex items-center justify-center text-polis-accent">
                                        <Dices className="w-5 h-5" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-polis-accent transition-colors" />
                                </div>
                                <h6 className="text-white font-bold mb-1 tracking-wide">{dict.simulation_demcoin}</h6>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Protocol Matrix v1.4</p>
                            </a>

                            {/* Simulation 2 */}
                            <a
                                href="https://aistudio.google.com/u/1/apps/drive/1cuWwFvgXnbDFvGc9oz8WV9yC-LoLnXhA?showPreview=true&showAssistant=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-6 rounded-2xl border-white/5 hover:border-polis-accent/40 transition-all group hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-polis-accent/10 flex items-center justify-center text-polis-accent">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-polis-accent transition-colors" />
                                </div>
                                <h6 className="text-white font-bold mb-1 tracking-wide">{dict.simulation_text}</h6>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Lexical Engine v2.1</p>
                            </a>
                        </div>
                    </div>

                    {/* TASK 3: THE LIVING BOOK (Audio Overview) */}
                    <div className="glass p-8 rounded-3xl border-polis-accent/20 bg-polis-accent/[0.02] flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-grow space-y-4 text-center md:text-left">
                            <h5 className="text-2xl font-black text-white">{dict.audio_label}</h5>
                            <p className="text-polis-accent text-sm font-bold uppercase tracking-[0.2em]">{dict.audio_sub}</p>
                        </div>

                        {/* Audio Wave Visualizer Placeholder */}
                        <div className={`flex items-center gap-1 h-12 w-32 shrink-0 ${!audioExists && 'opacity-20'}`}>
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={isPlaying ? {
                                        height: [
                                            "20%",
                                            "80%",
                                            "40%",
                                            "100%",
                                            "30%"
                                        ][i % 5]
                                    } : { height: "10%" }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        delay: i * 0.05
                                    }}
                                    className="w-1 bg-polis-accent/60 rounded-full"
                                />
                            ))}
                        </div>

                        {audioExists ? (
                            <button
                                onClick={toggleAudio}
                                className="w-16 h-16 rounded-full bg-polis-accent text-polis-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-polis-accent/20"
                            >
                                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                            </button>
                        ) : (
                            <div className="px-6 py-3 rounded-full border border-white/10 text-white/40 text-xs font-black uppercase tracking-widest">
                                Coming Soon
                            </div>
                        )}

                        <audio
                            ref={audioRef}
                            src="/audio.m4a"
                            onEnded={() => setIsPlaying(false)}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12 text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">
                        <a href="https://x.com/thepolisworld" target="_blank" rel="noopener noreferrer" className="hover:text-polis-accent transition-colors">Twitter</a>
                        <a href="https://discord.gg/polisprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-polis-accent transition-colors">Discord</a>
                        <a href="https://github.com/petrosbakolas" target="_blank" rel="noopener noreferrer" className="hover:text-polis-accent transition-colors">GitHub</a>
                    </div>
                    <div className="text-center md:text-right space-y-2">
                        <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase">{dict.copyright}</p>
                        <p className="text-xs text-polis-accent/40 tracking-[0.4em] font-black uppercase">{dict.motto}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
