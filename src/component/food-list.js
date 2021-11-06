import css from 'bootstrap/dist/css/bootstrap.min.css';
import './food-item.js';

class FoodList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set category(category) {
    this._category = category;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        ${css}
      <style>      
      `;
    this.shadowDOM.innerHTML += `<p class=" constainer text-center fs-3 fst-italic">${message}</p>`;
  }

  render() {
    this.shadowDOM.innerHTML = ``;
    const foodList = document.querySelector('food-list');
    foodList.className = 'row container d-flex justify-content-evenlu';
    this._category.forEach((food) => {
      const foodItem = document.createElement('food-item');
      foodItem.food = food;
      this.shadowDOM.appendChild(foodItem);
    });
  }
}

customElements.define('food-list', FoodList);
