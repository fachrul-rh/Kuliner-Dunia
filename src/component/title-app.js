class TitleApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        width: 100%;
        color: white;
        background: #00b09b;
        background: -webkit-linear-gradient(to right, #96c93d, #00b09b);
        background: linear-gradient(to right, #96c93d, #00b09b);

        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );        
      }
      h2 {
        padding: 16px;
        font-family: 'Kaushan Script';
        font-size: 28px;
        letter-spacing: 0.3rem;
        margin: 0 0 0 40px;
      }
      </style>
      <h2>World Culinary</h2>      
      `;
  }
}

customElements.define('title-app', TitleApp);
