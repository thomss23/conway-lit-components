import { LitElement } from 'lit';
import './tile-component';
export declare class GridComponent extends LitElement {
    gridState: number[][];
    static styles: import("lit").CSSResult;
    handleTileClick(e: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
