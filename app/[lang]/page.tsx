import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Deficits } from "@/components/Deficits";
import { Architecture } from "@/components/Architecture";
import { Library } from "@/components/Library";
import { Footer } from "@/components/Footer";

export default function Home({ params }: { params: { lang: string } }) {
    const { lang } = params;

    return (
        <main className="bg-polis-primary selection:bg-polis-accent selection:text-polis-primary">
            <Header lang={lang} />
            <Hero />
            <Deficits />
            <Architecture />
            <Library />
            <Footer />
        </main>
    );
}
