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
    await params;
    return <>{children}</>;
}
