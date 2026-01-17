import "server-only";
import { Dictionary } from "./types/dictionary";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    en: () => import("./dictionaries/en.json").then((module) => module.default as unknown as Dictionary),
    gr: () => import("./dictionaries/gr.json").then((module) => module.default as unknown as Dictionary),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
    dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
