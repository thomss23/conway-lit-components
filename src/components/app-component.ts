import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './grid-component'
import './buttons-component'

@customElement('app-component')
export class AppComponent extends LitElement {

  static styles = css`
    h1 {
      text-align: center;
      color: #008170;
      font-size: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 50px;
      text-align: center;
      color: #008170;
      margin-top: 10px;
    }

  `
  //TODO: Handle button listening correctly
  private handleFirstButtonClick(e: CustomEvent) {
    // code
  }

  render() {
    return html`
      <h1>Conway's Game Of Life</h1>
      <buttons-component></buttons-component>
      <grid-component></grid-component>
      <h2>Generation: 0</h2>
    `;
  }
}