import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './tile-component'

@customElement('grid-component')
export class GridComponent extends LitElement {


  @property({type: Array<Number>})
  public gridState: number[][]

  static styles = css`
    .container {
      display: grid;
      grid-template-columns: repeat(50, 1fr);
      grid-template-rows: repeat(30, 1fr);
      margin: 30px auto 0 auto;
      gap: 0;
      width: 100%; 
      max-width: 1000px; 
      border: 10px solid #232D3F;
      border-radius: 10px;
    }
    
    @media screen and (max-width: 600px) {
      .container {
        max-width: 300px;
        grid-template-columns: repeat(50, minmax(0, 1fr)); 
      }
    }
  
  `

  handleTileClick(e: CustomEvent) {
    const {rowIndex, colIndex} = e.detail;
    this.dispatchEvent(new CustomEvent('grid-update', { detail: { rowIndex: rowIndex, colIndex:colIndex }, bubbles: true, composed: true }));
  }

  render() {
    
    let renderedItems = [];
    for (let rowIndex = 0; rowIndex < this.gridState.length; rowIndex++) {
      let row = this.gridState[rowIndex];
      let tiles = [];
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        let tile = html`
          <tile-component 
            .isTurnedOn=${row[colIndex] === 1}
            .rowIndex=${rowIndex}
            .colIndex=${colIndex}
            @toggle-tile=${this.handleTileClick}
          ></tile-component>`;
        tiles.push(tile);
      }
      renderedItems.push(tiles);
    }
  
    console.log(renderedItems)
    return html`
      <div class="container">
        ${renderedItems}
      </div>
    `;
  }
}