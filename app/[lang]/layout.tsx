import React from "react";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "gr" }];
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return (
        <html lang={lang}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
