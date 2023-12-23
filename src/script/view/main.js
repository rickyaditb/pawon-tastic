import '../components/onboarding-page';
import '../components/detail-page';
import '../components/home-page';
import '../components/search-bar';
import '../components/app-header';
import '../components/app-footer';
import '../components/filter-modal';
import DataSource from '../data/data-source';

const main = async () => {
  const htmlElement = document.querySelector('html');
  const logo = document.querySelector('#logo');
  const themeSwitcher = document.querySelector('#theme-switcher');
  const homePageElement = document.querySelector('home-page');
  const detailPageElement = document.querySelector('detail-page');
  const searchElement = document.querySelector('search-bar');

  // Handle Return Button
  const returnToHomePage = () => {
    if (!detailPageElement.firstElementChild) return; // Matikan tombol kembali pada home
    detailPageElement.firstElementChild.classList.add('opacity-0');
    detailPageElement.style.display = 'none';
    homePageElement.style.display = 'block';
    homePageElement.firstElementChild.classList.remove('opacity-0');
    homePageElement.firstElementChild.classList.add('opacity-100');
    searchElement.style.display = 'block';
    searchElement.classList.remove('opacity-0');
    searchElement.classList.add('opacity-100');
  };
  logo.addEventListener('click', returnToHomePage);

  // Handle Search with Debouncing
  let timeoutId;
  const onChangeSearch = async () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      try {
        const results = await DataSource.getRecipeByName(searchElement.value);
        homePageElement.recipe = results;
      } catch (message) {
        homePageElement.renderError(message);
      }
    }, 300);
  };
  searchElement.InputEvent = onChangeSearch;

  // Handle Dark Mode
  if (localStorage.getItem('dark') === 'true') {
    htmlElement.classList.add('dark');
  }
  const themeHandler = () => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('dark', false);
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('dark', true);
    }
  };
  themeSwitcher.addEventListener('click', themeHandler);

  // Handle Onboarding
  const start = document.querySelector('#start');
  const onboarding = document.querySelector('#onboarding');
  if (localStorage.getItem('onboarding')) {
    onboarding.style.display = 'none';
  } else {
    document.body.style.overflow = 'hidden';
  }
  start.addEventListener('click', () => {
    onboarding.style.opacity = 0;
    onboarding.addEventListener('transitionend', () => {
      onboarding.style.display = 'none';
      document.body.style.overflowY = 'auto';
      localStorage.setItem('onboarding', true);
    });
  });
};

export default main;
