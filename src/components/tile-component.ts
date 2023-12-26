import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tile-component')
export class TileComponent extends LitElement {

  static styles = css`
    div {
      border: 1px solid #005B41; 
      margin: 0;
      background-color: #b9b9b9;
      padding-top: 100%;
      cursor: pointer;
    }

    div:hover {
      border-color: yellow;
    }
  `

  @property({ type: Boolean })
  isTurnedOn: boolean = false;

  @property({ type: Number, state: false })
  rowIndex: number;

  @property({ type: Number, state: false  })
  colIndex: number;

  private toggleTile() {
    this.dispatchEvent(new CustomEvent('toggle-tile', {
      detail: { rowIndex: this.rowIndex, colIndex: this.colIndex },
      bubbles: true, composed: true
    }));
  }

  render() {
    const backgroundColor = this.isTurnedOn ? '#b9b9b9' : '#0F0F0F';

    return html`
        <div 
          style="background-color: ${backgroundColor};"
          @click="${this.toggleTile}"
      ></div>
    `;
  }
}