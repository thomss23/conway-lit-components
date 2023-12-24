import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tile-component')
export class TileComponent extends LitElement {

  @property()
  isTurnedOn = false;

  private colorTurnedOff = css`#b9b9b9`;
  private colorTurnedOn = css`#0F0F0F` 

  static styles = css`
    div {
      border: 1px solid #005B41; 
      margin: 0;
      background-color: #b9b9b9;
      padding-top: 100%;
    }
  `

  render() {
    return html`
      <div style="background-color: ${this.isTurnedOn ? this.colorTurnedOn : this.colorTurnedOff};"></div>
    `;
  }
}