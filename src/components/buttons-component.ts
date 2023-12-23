import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './button-component'

@customElement('buttons-component')
export class ButtonsComponent extends LitElement {

  static styles = css`
    div {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 5px;
    }
  `
  
  render() {
    return html`
      <div>
        <button-component name="Play"></button-component>
        <button-component name="Pause"></button-component>
        <button-component name="Clear"></button-component>
        <button-component name="Slow"></button-component>
        <button-component name="Fast"></button-component>
        <button-component name="Seed"></button-component>
      </div>
    `;
  }
}