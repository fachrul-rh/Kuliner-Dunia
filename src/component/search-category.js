import css from 'bootstrap/dist/css/bootstrap.min.css';

class SearchCategory extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#category-input').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            ${css}
            p {              
              font-family: 'Kaushan Script';                            
            }
        </style>
        <p class="container text-center text-uppercase fw-bold fs-2 mt-4">Search Country</p>
        <div class="container input-group mb-3 w-50">
          <input id="category-input" type="text" class="form-control" placeholder="Search country">
          <button class="btn btn-dark" type="button" id="button-addon2">Search</button>
        </div>
        <hr>
        `;

    this.shadowDOM.querySelector('#button-addon2').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-category', SearchCategory);
