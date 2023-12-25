import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './tile-component'

// hardcode for now grid size 50 x 30
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
      cursor: pointer;
    }
  `

render() {

  const renderedItems = this.gridState.map((row, indexRow) => {
    return row.map((col, indexCol) => {
      if (col === 1) {
        return html`<tile-component .isTurnedOn=${true}></tile-component>`;
      } else {
        return html`<tile-component .isTurnedOn=${false}></tile-component>`;
      }
    });
  });

  return html`
    <div class="container">
      ${renderedItems}
    </div>
  `;
}
}