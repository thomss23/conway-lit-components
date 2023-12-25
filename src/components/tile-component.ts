import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tile-component')
export class TileComponent extends LitElement {

  @property({ type: Boolean })
  isTurnedOn: boolean = false;

  static styles = css`
    div {
      border: 1px solid #005B41; 
      margin: 0;
      background-color: #b9b9b9;
      padding-top: 100%;
    }
  `

  render() {
    const backgroundColor = this.isTurnedOn ? '#b9b9b9' : '#0F0F0F';

    return html`
      <div style="background-color: ${backgroundColor};"></div>
    `;
  }
}