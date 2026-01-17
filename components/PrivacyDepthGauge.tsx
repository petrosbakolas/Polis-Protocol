"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Globe, Shield, Lock } from "lucide-react";

export function PrivacyDepthGauge() {
    const { scrollYProgress } = useScroll();

    // Smooth the scroll progress for smoother color transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [depthState, setDepthState] = useState<"surface" | "veil" | "enclave">("surface");

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            if (latest < 0.3) setDepthState("surface");
            else if (latest < 0.8) setDepthState("veil");
            else setDepthState("enclave");
        });
    }, [scrollYProgress]);

    // Color transforms
    const color = useTransform(
        smoothProgress,
        [0, 0.3, 0.5, 0.8, 1],
        ["#64748b", "#64748b", "#3b82f6", "#D4AF37", "#00FF41"]
    );

    const opacity = useTransform(
        smoothProgress,
        [0, 0.05],
        [0, 1]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-4 group"
        >
            {/* Visual Line */}
            <div className="h-40 w-[2px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                    style={{
                        height: "100%",
                        scaleY: scrollYProgress,
                        transformOrigin: "top",
                        background: color
                    }}
                    className="w-full"
                />
            </div>

            {/* Icon & Label Container */}
            <motion.div
                className="flex flex-col items-center gap-3"
                style={{ color }}
            >
                <motion.div
                    animate={depthState === "veil" ? {
                        opacity: [0.8, 1, 0.8],
                        scale: [0.98, 1.02, 0.98]
                    } : { opacity: 1, scale: 1 }}
                    transition={depthState === "veil" ? {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                    } : {}}
                    className="p-3 rounded-full border border-current bg-black/40 backdrop-blur-md relative overflow-hidden"
                >
                    {depthState === "surface" && <Globe size={20} />}
                    {depthState === "veil" && <Shield size={20} className="animate-pulse" />}
                    {depthState === "enclave" && <Lock size={20} />}

                    {/* Glowing effect inside icon box */}
                    <motion.div
                        style={{ background: color }}
                        className="absolute inset-0 opacity-20 blur-xl pointer-events-none"
                    />
                </motion.div>

                <div className="relative">
                    <motion.div
                        key={depthState}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            ...(depthState === "veil" ? {
                                opacity: [0.7, 1, 0.7]
                            } : {})
                        }}
                        transition={depthState === "veil" ? {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        } : { duration: 0.4 }}
                        className="absolute right-12 top-0 whitespace-nowrap text-right pointer-events-none"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-1 opacity-50">
                            {depthState === "surface" && "Status: Public"}
                            {depthState === "veil" && "Status: Encrypting"}
                            {depthState === "enclave" && "Status: Zero-Knowledge"}
                        </span>
                        <h4 className="text-sm font-black uppercase tracking-widest flex flex-col items-end">
                            {depthState === "surface" && "🌐 Public Web"}
                            {depthState === "veil" && (
                                <span className="flex flex-col items-end">
                                    <span>🛡️ Aegis Layer</span>
                                    <span className="text-[9px] opacity-70 mt-1 uppercase tracking-tighter">Connection Secured</span>
                                </span>
                            )}
                            {depthState === "enclave" && (
                                <span className="flex flex-col items-end">
                                    <span className="cyber-text-gold">🏛️ POLIS ENCLAVE</span>
                                    <span className="text-[9px] opacity-70 mt-1 uppercase tracking-tighter">Identity: Anonymous</span>
                                </span>
                            )}
                        </h4>
                    </motion.div>
                </div>
            </motion.div>

            {/* Depth Markers */}
            <div className="flex flex-col gap-2 opacity-20 mt-4">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-current" />
                ))}
            </div>
        </motion.div>
    );
}
