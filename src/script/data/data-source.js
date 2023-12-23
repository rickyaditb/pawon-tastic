import axios from 'axios';

class DataSource {
  static async getRecipeByName(name) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const filteredMeals = response.data.meals.filter((meal) => meal.strMealThumb !== null);
      return filteredMeals;
    } catch (error) {
      return error;
    }
  }

  static async getRecipeById(id) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      return response.data.meals[0];
    } catch (error) {
      return error;
    }
  }

  static async getCategoryList() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categoryList = response.data.categories.map((category) => category.strCategory);
      return categoryList;
    } catch (error) {
      return error;
    }
  }

  static async getRecipeByCategory(category) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const filteredMeals = response.data.meals.filter((meal) => meal.strMealThumb !== null);
      return filteredMeals;
    } catch (error) {
      return error;
    }
  }
}

export default DataSource;
