import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-component')
export class AppComponent extends LitElement {
  render() {
    return html`
      <div>
        <p>Welcome to the App Component!</p>
      </div>
    `;
  }
}