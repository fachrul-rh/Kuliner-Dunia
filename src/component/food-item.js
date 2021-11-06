import css from 'bootstrap/dist/css/bootstrap.min.css';

class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          ${css}
          p {
            font-family: 'sans-serif';
            font-size: 16pt;
          }
      </style>
      <div class="col-3 mx-auto p-2">
        <div class="card" style="width: 18rem;">
          <img src="${this._food.strMealThumb}" class="card-img-top">
          <div class="card-body">
            <p class="card-text fst-italic">${this._food.strMeal}</p>            
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
