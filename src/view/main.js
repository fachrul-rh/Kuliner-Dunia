import '../component/food-list.js';
import '../component/search-category.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-category');
  const foodList = document.querySelector('food-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCategory(searchElement.value);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (result) => {
    foodList.category = result;
  };

  const fallbackResult = (message) => {
    foodList.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
