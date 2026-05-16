import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Mantra {
    id: bigint;
    categories: Array<string>;
    meaning: string;
    name: string;
    transliteration: string;
    language: string;
    benefits: string;
    deity: string;
    mantraText: string;
}
export interface Pooja {
    id: bigint;
    duration: bigint;
    name: string;
    requiredItems: Array<string>;
    occasion: string;
    significance: string;
    procedure: Array<string>;
    deity: string;
}
export interface backendInterface {
    addMantra(name: string, deity: string, language: string, mantraText: string, transliteration: string, meaning: string, benefits: string, categories: Array<string>): Promise<bigint>;
    addPooja(name: string, deity: string, occasion: string, requiredItems: Array<string>, procedure: Array<string>, duration: bigint, significance: string): Promise<bigint>;
    getAllMantras(): Promise<Array<Mantra>>;
    getAllPoojas(): Promise<Array<Pooja>>;
    getMantra(id: bigint): Promise<Mantra>;
    getMantrasByCategory(category: string): Promise<Array<Mantra>>;
    getPooja(id: bigint): Promise<Pooja>;
    getPoojasByOccasion(occasion: string): Promise<Array<Pooja>>;
}
