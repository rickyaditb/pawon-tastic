class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div
      class="relative border-b-2 border-gray-200 bg-white text-blue-500 dark:bg-slate-800 dark:text-white dark:border-slate-800 p-5 transition-colors duration-500">
      <div class="container mx-auto flex px-5 lg:px-16 items-center">
        <nav>
          <button class="flex items-center gap-3 mx-auto cursor-pointer" id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 mt-0.5">
              <path
                d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
              <path
                d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" />
            </svg>
            <p class="font-bold text-3xl">Pawon-Tastic</p>
          </button>
        </nav>
        <button id="theme-switcher" class="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon"
            class="w-10 h-10 border-2 border-blue-500 dark:border-white p-1 rounded-lg transition-colors duration-500">
            <path fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    `;
  }
}

customElements.define('app-header', AppHeader);
