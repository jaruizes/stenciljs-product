/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProductItem {
        /**
          * Item description
         */
        "description": string;
        /**
          * Image URL
         */
        "img": string;
        /**
          * Item price
         */
        "price": number;
        /**
          * Item stars
         */
        "stars": any;
        /**
          * Item title
         */
        "title": string;
    }
}
declare global {
    interface HTMLProductItemElement extends Components.ProductItem, HTMLStencilElement {
    }
    var HTMLProductItemElement: {
        prototype: HTMLProductItemElement;
        new (): HTMLProductItemElement;
    };
    interface HTMLElementTagNameMap {
        "product-item": HTMLProductItemElement;
    }
}
declare namespace LocalJSX {
    interface ProductItem {
        /**
          * Item description
         */
        "description"?: string;
        /**
          * Image URL
         */
        "img"?: string;
        /**
          * Item price
         */
        "price"?: number;
        /**
          * Item stars
         */
        "stars"?: any;
        /**
          * Item title
         */
        "title"?: string;
    }
    interface IntrinsicElements {
        "product-item": ProductItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "product-item": LocalJSX.ProductItem & JSXBase.HTMLAttributes<HTMLProductItemElement>;
        }
    }
}