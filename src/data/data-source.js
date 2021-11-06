class DataSource {
  static searchCategory(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
