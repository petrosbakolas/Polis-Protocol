import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Cracks } from "@/components/Cracks";
import { Architecture } from "@/components/Architecture";
import { Tokens } from "@/components/Tokens";
import { Library } from "@/components/Library";
import { Footer } from "@/components/Footer";
import { getDictionary } from "../get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-polis-primary selection:bg-polis-accent selection:text-polis-primary">
            <Header lang={lang} dict={dict.header} />
            <div id="hero"><Hero dict={dict.hero} lang={lang} /></div>
            <div id="cracks"><Cracks dict={dict.deficits} /></div>
            <div id="architecture"><Architecture dict={dict.architecture} lang={lang} /></div>
            <div id="tokens"><Tokens dict={dict.tokens} /></div>
            <div id="library"><Library dict={dict.library} lang={lang} /></div>
            <Footer dict={dict.footer} />
        </main>
    );
}
