import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// hardcode for now grid size 50 x 30
@customElement('grid-component')
export class GridComponent extends LitElement {

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

    .grid-item {
      border: 1px solid #005B41; 
      margin: 0;
      /* background-color: #0F0F0F; */
      background-color: #b9b9b9;
      padding-top: 100%;
    }
  `

render() {
  const gridItems = new Array(50 * 30).fill(0).map((_, index) => 
    html`<div class="grid-item"></div>`
  );

  return html`
    <div class="container">
      ${gridItems}
    </div>
  `;
}
}