class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="border-t-2 border-gray-200 bg-white text-blue-500 dark:bg-slate-800 dark:text-white dark:border-slate-800 p-5 transition-colors duration-500">
        <div class="container mx-auto flex justify-between px-5 lg:px-16 items-center">
          <div>
            <p class="text-xl font-bold">Dicoding Submission</p>
            <p class="text-lg -mt-1">Belajar Fundamental Front-End Web Development</p>
          </div>
          <div class="text-2xl font-bold text-right">
            <a href="https://www.rickyaditb.my.id">Ricky Aditya Bagaskara</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
