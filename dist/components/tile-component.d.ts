import { LitElement } from 'lit';
export declare class TileComponent extends LitElement {
    static styles: import("lit").CSSResult;
    isTurnedOn: boolean;
    rowIndex: number;
    colIndex: number;
    private toggleTile;
    render(): import("lit-html").TemplateResult<1>;
}
