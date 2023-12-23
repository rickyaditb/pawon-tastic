import DataSource from '../data/data-source';

class FilterModal extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('closeFilterEvent', () => {
      this.querySelector('#filterForm').reset();
    });
  }

  async _fetchData() {
    this._category = JSON.parse(localStorage.getItem('category'));
    if (!this._category) {
      this._category = await DataSource.getCategoryList('');
      localStorage.setItem('category', JSON.stringify(this._category));
    }
  }

  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._applyFilterEventListener();
    this._closeModalEventListener();
  }

  _applyFilterEventListener() {
    const form = this.querySelector('#filterForm');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const checkedRadio = form.querySelector('input[name="category"]:checked');
      const results = await DataSource.getRecipeByCategory(checkedRadio.id);
      const homePageElement = document.querySelector('home-page');
      const filterModalElement = document.querySelector('filter-modal');
      homePageElement.recipe = results;
      filterModalElement.firstElementChild.style.display = 'none';

      const applyFilterEvent = new CustomEvent('ApplyFilterEvent');
      window.dispatchEvent(applyFilterEvent);
    });
  }

  _closeModalEventListener() {
    const modalContainer = this.querySelector('#modal');
    modalContainer.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
  }

  render() {
    this.innerHTML = `
      <div class="fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-10 hidden px-5" id="modal">
        <div class="bg-white dark:bg-slate-800 rounded-lg p-6 w-full lg:w-1/3">
        <p class="text-2xl font-semibold text-gray-700 dark:text-white transition-colors duration-500 mb-3">📋 Pilih Kategori</p>
        <form class="flex flex-wrap mt-5 w-full gap-2" id="filterForm">
          ${this._category.map((item) => `
            <div class="grow">
              <input id="${item}" name="category" type="radio" class="sr-only peer">
              <label for="${item}" class="justify-center flex hover:bg-blue-200 peer-checked:bg-blue-500 peer-checked:text-white bg-gray-200 rounded px-3 py-2 transition cursor-pointer select-none">
                  ${item}
              </label>
            </div>
          `).join('')}
          <button class="bg-blue-500 text-white px-4 py-3 font-bold rounded w-full text-xl mt-3">Terapkan</button>
        </form>
        </div>
      </div>
    `;
  }
}

customElements.define('filter-modal', FilterModal);
