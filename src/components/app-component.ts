import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './grid-component'
import './buttons-component'
import { ClickEvent } from '../types/interfaces';

/*

Game Rules:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
*/

interface GameState {
  generation: number;
  gridState: number[][];
}

@customElement('app-component')
export class AppComponent extends LitElement {

  static styles = css`
    h1 {
      text-align: center;
      color: #008170;
      font-size: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 50px;
      text-align: center;
      color: #008170;
      margin-top: 10px;
    }

  `

  @property({type: Object})
  state: GameState = {
    generation: 0,
    gridState:  Array(50).fill(0).map(() => Array(30).fill(0))
  }

  private playGame() {
    console.log('playing game')
  }

  private pauseGame() {
    console.log('pausing game')
  }

  private seedBoard() {
    const gridState = this.state.gridState.map((row) => {
      return row.map(() => {
        if (Math.floor(Math.random() * 4) === 1) {
					return 1;
				} else {
          return 0;
        }
      });
    });
    console.log(gridState)
    this.state = {...this.state, gridState: gridState};
  }

  private decreaseGameSpeed() {
    console.log('slowing game')
  }

  private increaseGameSpeed() {
    console.log('fasten game')
  }

  private clearBoard() {
    const gridState = this.state.gridState.map((row) => {
      return row.map(() => 0);
    });
    console.log(gridState)
    this.state = {...this.state, gridState: gridState};
  }
  
  private handleButtonClick(e: ClickEvent) {
    const buttonName: string = e.detail.name;

    switch (buttonName) {
      case 'Play':
        this.playGame();
        break;
      case 'Pause':
        this.pauseGame();
        break;
      case 'Slow':
        this.decreaseGameSpeed();
        break
      case 'Fast':
        this.increaseGameSpeed()
        break;
      case 'Clear':
        this.clearBoard();
        break;
      default:
        this.seedBoard();
        break;
    }
  }

  render() {
    return html`
      <h1>Conway's Game Of Life</h1>
      <buttons-component @button-click=${this.handleButtonClick}></buttons-component>
      <grid-component .gridState=${this.state.gridState} ></grid-component>
      <h2>Generation: ${this.state.generation}</h2>
    `;
  }
}