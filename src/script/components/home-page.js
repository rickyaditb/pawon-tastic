import DataSource from '../data/data-source';
import './search-bar';

class HomePage extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('closeFilterEvent', () => {
      this.connectedCallback();
    });
  }

  set recipe(recipe) {
    this._recipes = recipe;
    this.render();
    this._detailDataHandler();
  }

  async _fetchData() {
    this._recipes = JSON.parse(localStorage.getItem('home-recipes'));
    if (!this._recipes) {
      this._recipes = await DataSource.getRecipeByName('');
      localStorage.setItem('home-recipes', JSON.stringify(this._recipes));
    }
  }

  _detailDataHandler() {
    const homePageElement = document.querySelector('home-page');
    const searchElement = document.querySelector('search-bar');
    const recipes = document.querySelectorAll('[id^="meal-"]');

    const detailPageElement = document.querySelector('detail-page');

    const onRecipeClicked = async (id) => {
      try {
        this._recipe = JSON.parse(localStorage.getItem(id));
        if (!this._recipe) {
          this._recipe = await DataSource.getRecipeById(id);
          localStorage.setItem(id, JSON.stringify(this._recipe));
        }
        detailPageElement.recipe = this._recipe;
      } catch (message) {
        console.log(message);
      }
    };

    recipes.forEach((recipe) => {
      recipe.addEventListener('click', () => {
        searchElement.classList.add('opacity-0');
        searchElement.style.display = 'none';
        homePageElement.firstElementChild.classList.add('opacity-0');
        homePageElement.style.display = 'none';
        onRecipeClicked(recipe.id.substring(5));
      });
    });
  }

  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._detailDataHandler();
  }

  renderError(message) {
    console.log(message);
    this.innerHTML = `
      <div class="text-center text-3xl my-32 dark:text-white transition-colors duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-16 h-16 mx-auto mb-6">
          <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
        </svg>
        <p>Makanan yang kamu cari tidak ditemukan</p>
      </div>
    `;
  }

  render() {
    this.innerHTML = `
      <div class="container mx-auto px-5 lg:px-16 my-5 transition duration-200" id="home-page">
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-center mt-5">
        ${this._recipes.map((item) => `
          <article
            id="meal-${item.idMeal}"
            class="bg-white border-2 dark:bg-slate-800 dark:border-2 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-800 overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <figure>
              <img src="${item.strMealThumb}" alt=""
                class="w-full h-56 object-cover object-center">
            </figure>
            <div class="p-4 text-center">
              <h2 class="font-bold text-2xl text-gray-700 dark:text-white overflow-ellipsis overflow-hidden whitespace-nowrap">
                ${item.strMeal}
              </h2>
              ${item.strArea ? `
              <div class="flex gap-4 text-xl text-gray-600 dark:text-white justify-center mt-2">
                <h3>${item.strArea}</h3>
                <h3>${item.strCategory}</h3>
              </div>
              ` : ''}
            </div>
          </article>
        `).join('')}
        </section>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
