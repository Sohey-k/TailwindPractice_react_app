// src/@types/prismjs/index.d.ts
declare module 'prismjs' {
    export function highlight(code: string, grammar: any, language?: string): string;
    export function highlightAll(): void;
    export function manual(): void;
}
