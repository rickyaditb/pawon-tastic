class DetailPage extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe;
    this.ingredients = this.getIngredients(this._recipe);
    this.instructions = this.splitInstruction(this._recipe.strInstructions);

    const detailPageElement = document.querySelector('detail-page');
    detailPageElement.style.display = 'block';

    this.render();
  }

  splitInstruction(instruction) {
    const splittedInstruction = instruction
      .split(/\r?\n/)
      .filter((array) => array.length >= 5)
      .filter((array) => !/step \d+/i.test(array))
      .map((array) => {
        if (/^\d/.test(array)) {
          return array.replace(/^\d+\.\s*/, '');
        }
        return array;
      });

    return splittedInstruction;
  }

  getIngredients(recipe) {
    const ingredients = [];
    let i = 1;

    while (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      });
      i += 1;
    }
    return ingredients;
  }

  render() {
    this.innerHTML = `
      <article class="container mx-auto px-5 lg:px-16 mt-5 mb-10 transition duration-200">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5">
          <section class="-order-5">
            <p class="mb-5 text-3xl font-bold text-blue-500 dark:text-white text-center transition-colors duration-500">${this._recipe.strMeal}</p>
            <img src="${this._recipe.strMealThumb}"
              class="w-full rounded-lg shadow-lg drop-shadow-lg dark:shadow-gray-500">
            <a
              href="${this._recipe.strYoutube}"
              class="bg-blue-400 hover:bg-blue-500 font-bold text-white text-2xl w-full mt-5 py-4 rounded-lg flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>          
              <span>Tonton Video</span>
            </a>
          </section>
          <section class="lg:col-span-2 flex flex-col gap-2">
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-white dark:bg-slate-800 dark:text-white dark:border-slate-800 transition-colors duration-500 px-5 py-3 border-2 text-xl flex items-center rounded gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="rounded w-10 h-10 bg-blue-500 text-white p-2">
                  <path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="text-sm">Kategori</p>
                  <p>${this._recipe.strCategory}</p>
                </div>            
              </div>
              <div class="bg-white dark:bg-slate-800 dark:text-white dark:border-slate-800 transition-colors duration-500 px-5 py-3 border-2 text-xl flex items-center rounded gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="rounded w-10 h-10 bg-blue-500 text-white p-2">
                  <path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="text-sm">Asal Wilayah</p>
                  <p>${this._recipe.strArea}</p>
                </div>            
              </div>
            </div>
            <div class="bg-white rounded p-5 border-2 dark:bg-slate-800 dark:text-white dark:border-slate-800 transition-colors duration-500">
              <p class="text-xl font-semibold text-gray-700 dark:text-white mb-5 transition-colors duration-500">📜 Instruksi Memasak</p>
              <div class="flex flex-col gap-3">
                ${this.instructions.map((step, index) => `
                  <div class="flex gap-3">
                    <div><span class="bg-blue-500 text-xl px-2 py-1 text-white rounded">${index + 1}</span></div>
                    <p>${step}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
          <section class="flex flex-col gap-2 -order-1 lg:order-3">
            <div class="bg-white rounded p-5 border-2 dark:bg-slate-800 dark:text-white dark:border-slate-800 transition-colors duration-500">
              <p class="text-xl font-semibold text-gray-700 dark:text-white transition-colors duration-500 mb-3">📋 Bahan - Bahan</p>
              <div class="flex flex-col gap-2">
                ${this.ingredients.map((item) => `
                  <div class="flex items-center">
                    <p>${item.ingredient}</p>
                    <p class="ml-auto text-gray-600 dark:text-gray-400 transition-colors duration-500">${item.measure}</p>
                  </div>
              `).join('')}
              </div>
            </div>
          </section>
        </div>
      </article>
    `;
  }
}

customElements.define('detail-page', DetailPage);
