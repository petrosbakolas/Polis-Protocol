import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Deficits } from "@/components/Deficits";
import { Architecture } from "@/components/Architecture";
import { Library } from "@/components/Library";
import { Footer } from "@/components/Footer";
import { getDictionary } from "../get-dictionary";

export default async function Home({ params }: { params: { lang: string } }) {
    const { lang } = params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-polis-primary selection:bg-polis-accent selection:text-polis-primary">
            <Header lang={lang} dict={dict.header} />
            <Hero dict={dict.hero} />
            <Deficits dict={dict.deficits} />
            <Architecture dict={dict.architecture} />
            <Library dict={dict.library} />
            <Footer dict={dict.footer} />
        </main>
    );
}
