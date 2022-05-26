declare global {

    namespace JSX {

        type Element = any;

        interface IntrinsicElements {
        [elemName: string]: Element;
        }
    }

    // export declare const DOM: any;
    // export declare const FRAGMENT: any;
}

export default global;