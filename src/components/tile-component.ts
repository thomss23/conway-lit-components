import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('grid-component')
export class TileComponent extends LitElement {

  render() {
    return html`
      <div>
        <p>Welcome to the App Component!</p>
      </div>
    `;
  }
}