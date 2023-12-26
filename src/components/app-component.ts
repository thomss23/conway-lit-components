import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './grid-component'
import './buttons-component'
import { ClickEvent } from '../types/interfaces';

interface GameState {
  generation: number;
  gridState: number[][];
}

@customElement('app-component')
export class AppComponent extends LitElement {

  static styles = css`
    h1, h2 {
      text-align: center;
      color: #008170;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    
    h1 {
      font-size: calc(16px + 2vw); /* Responsive font size */
    }
    
    h2 {
      font-size: calc(14px + 2vw); /* Responsive font size */
    }
  
  `

  @property({type: Object})
  state: GameState = {
    generation: 0,
    gridState:  Array(30).fill(0).map(() => Array(50).fill(0))
  }


  constructor() {
    super();
    this.speed = 100;
  }

  private speed: number;
  private intervaldId: NodeJS.Timeout;

  private playGame() {
    this.intervaldId = setInterval(this.play.bind(this), this.speed)
  }

  handleGridUpdate(e: CustomEvent) {
    const { rowIndex, colIndex } = e.detail;
    let newGridState = [...this.state.gridState];
    newGridState[rowIndex][colIndex] = newGridState[rowIndex][colIndex] === 1 ? 0 : 1;
    this.state = { ...this.state, gridState: newGridState };
  }

  private play() {
    let newGridState = [];
    for (let indexRow = 0; indexRow < this.state.gridState.length; indexRow++) {
        let newRow = [];
        for (let indexCol = 0; indexCol < this.state.gridState[indexRow].length; indexCol++) {
            const aliveNeighbors = this.countAliveNeighbors(indexRow, indexCol);
            let newCellState: number;
    
            if (this.state.gridState[indexRow][indexCol] === 1) {
                if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                    newCellState = 0;
                } else {
                    newCellState = 1;
                }
            } else {
                newCellState = aliveNeighbors === 3 ? 1 : 0;
            }
    
            newRow.push(newCellState);
        }
        newGridState.push(newRow);
    }

    this.state = { generation: this.state.generation + 1, gridState: newGridState };
  }

  private countAliveNeighbors(currentRowIndex: number, currentColIndex: number) {
    let aliveNeighbors = 0;
    const gridHeight = this.state.gridState.length;
    const gridWidth = this.state.gridState[0].length;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {

        if (i === 0 && j === 0) continue;

        const neighborRow = currentRowIndex + i;
        const neighborCol = currentColIndex + j;

        if ((neighborRow >= 0 && neighborRow < gridHeight) && (neighborCol >= 0 && neighborCol < gridWidth)) {
          if (this.state.gridState[neighborRow][neighborCol]) {
            aliveNeighbors++;
          }
        }  

      }
    }

    return aliveNeighbors;
  }

  private pauseGame() {
    clearInterval(this.intervaldId);
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
    this.state = {generation: 0, gridState: gridState};
  }

  private decreaseGameSpeed() {
    clearInterval(this.intervaldId);
    this.speed = 100;
    this.playGame();
  }

  private increaseGameSpeed() {
    clearInterval(this.intervaldId);
    this.speed = 10;
    this.playGame();
  }

  private clearBoard() {
    const gridState = this.state.gridState.map((row) => {
      return row.map(() => 0);
    });
    this.pauseGame();
    this.state = {generation: 0, gridState: gridState};
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
    console.log(this.state.gridState);

    return html`
      <h1>Conway's Game Of Life</h1>
      <buttons-component @button-click=${this.handleButtonClick}></buttons-component>
      <grid-component @grid-update=${this.handleGridUpdate} .gridState=${this.state.gridState} ></grid-component>
      <h2>Generation: ${this.state.generation}</h2>
    `;
  }
}