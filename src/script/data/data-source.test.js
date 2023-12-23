const DataSource = require('./data-source').default;

describe('DataSource', () => {
  describe('getRecipeByName', () => {
    it('should return an array of meals when a valid name is provided', async () => {
      const name = 'chicken';
      const meals = await DataSource.getRecipeByName(name);
      expect(Array.isArray(meals)).toBe(true);
    }, 30000);
  });

  describe('getRecipeById', () => {
    it('should return a correct meal object when a valid id is provided', async () => {
      const id = '52772';
      const meals = await DataSource.getRecipeById(id);
      expect(meals.idMeal).toBe(id);
    }, 30000);
  });

  describe('getCategoryList', () => {
    it('should return an array of category', async () => {
      const name = 'chicken';
      const category = await DataSource.getCategoryList(name);
      expect(Array.isArray(category)).toBe(true);
    }, 30000);
  });

  describe('getRecipeByCategory', () => {
    it('should return an array of meals when a valid category is provided', async () => {
      const name = 'seafood';
      const category = await DataSource.getRecipeByCategory(name);
      expect(Array.isArray(category)).toBe(true);
    }, 30000);
  });
});
