import { LitElement, html, css} from 'lit';
import { customElement, property} from 'lit/decorators.js';

@customElement('button-component')
export class ButtonComponent extends LitElement {

  static styles = css`
    button {
      background-color: #005B41;
      border: none;
      color: #b9b9b9;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 20px;
      cursor: pointer;
      border-radius: 8px;
      font-family: monospace;
    }

    button:hover {
      background-color: #232D3F;
    }
  `
  private dispatchButtonClickEvent(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('button-click', {
      detail: { name: this.name },
      bubbles: true, 
      composed: true
    }));
  }

  @property()
  name: string = '';


  render() {
    return html`
      <div>
        <button @click="${this.dispatchButtonClickEvent}">${this.name}</button>
      </div>
      `;
  }
}