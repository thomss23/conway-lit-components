import { LitElement } from 'lit';
import './grid-component';
import './buttons-component';
interface GameState {
    generation: number;
    gridState: number[][];
}
export declare class AppComponent extends LitElement {
    static styles: import("lit").CSSResult;
    state: GameState;
    constructor();
    private speed;
    private intervaldId;
    private playGame;
    handleGridUpdate(e: CustomEvent): void;
    private play;
    private countAliveNeighbors;
    private pauseGame;
    private seedBoard;
    private decreaseGameSpeed;
    private increaseGameSpeed;
    private clearBoard;
    private handleButtonClick;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
