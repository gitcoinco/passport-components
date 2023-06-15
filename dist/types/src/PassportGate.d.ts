/// <reference types="react" />
interface Props {
    SCORER_ID?: string;
    headers?: Record<string, string>;
    currentAddress?: string;
    threshold: number;
}
export declare const PassportGate: ({ SCORER_ID, headers, currentAddress, threshold }: Props) => import("react").JSX.Element;
export {};
