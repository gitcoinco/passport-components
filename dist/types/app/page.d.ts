/// <reference types="react" />
declare global {
    interface Window {
        ethereum?: any;
    }
}
export default function Passport(): import("react").JSX.Element;
