// src/@types/react-html-parser/index.d.ts
declare module 'react-html-parser' {
    import { Component } from 'react';

    interface HtmlParserProps {
        html: string;
    }

    export default class HtmlParser extends Component<HtmlParserProps> { }
}
