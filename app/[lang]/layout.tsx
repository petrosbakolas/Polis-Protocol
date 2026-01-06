import React from "react";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "gr" }];
}

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
