import './filter-modal';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('ApplyFilterEvent', () => {
      this.querySelector('#filter-close').style.display = 'block';
    });
  }

  set InputEvent(event) {
    this._InputEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#search-recipe').value;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="flex container mx-auto px-5 lg:px-16 my-5 gap-3">
        <form class="w-full">
          <div class="relative dark:text-white transition-colors duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="absolute w-6 h-6 top-1/2 transform -translate-y-1/2 ml-6">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>      
            <input id="search-recipe" type="text" class="w-full text-2xl px-10 pl-16 py-8 shadow rounded-lg transition-colors duration-500 dark:bg-slate-800 focus:outline-none focus:ring-0" placeholder="Masukkan Nama Makanan">
          </div>
        </form>
        <button class="px-6 flex items-center justify-center shadow rounded-lg transition-colors duration-500 dark:bg-slate-800 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-500 dark:text-white transition-colors duration-500" id="filter">
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 absolute ml-20 -mt-20 text-red-500 hidden" id="filter-close">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    `;
    this.querySelector('#search-recipe').addEventListener('input', this._InputEvent);
    this.querySelector('#filter').addEventListener('click', () => {
      const filterModal = document.querySelector('filter-modal').firstElementChild;
      filterModal.style.display = 'flex';
    });
    this.querySelector('#filter-close').addEventListener('click', () => {
      this.querySelector('#filter-close').style.display = 'none';
      const closeFilterEvent = new CustomEvent('closeFilterEvent');
      window.dispatchEvent(closeFilterEvent);
    });
  }
}

customElements.define('search-bar', SearchBar);
