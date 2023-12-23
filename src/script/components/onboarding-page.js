import mySvg from '../../image/onboarding.svg';

class OnboardingPage extends HTMLElement {
  connectedCallback() {
    this.render();
    const imgElement = document.createElement('img');
    imgElement.src = mySvg;
    const imgContainer = document.querySelector('#img-container');
    imgContainer.appendChild(imgElement);
  }

  render() {
    this.innerHTML = `
      <div class="bg-white w-screen h-screen z-10 absolute inset-0 transition duration-1000 ease-in" id="onboarding">
        <div class="container mx-auto p-5 md:grid grid-cols-2 h-screen gap-5">
          <div class="px-16 md:p-0 xl:p-16 mx-auto md:m-0 md:my-auto" id="img-container"></div>
          <div class="mt-10 md:my-auto mx-auto px-0 2xl:px-24">
            <div class="flex items-center gap-3 mx-auto cursor-pointer text-blue-500 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 mt-0.5">
                <path
                  d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
                <path
                  d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" />
              </svg>
              <p class="font-bold text-3xl">Pawon-Tastic</p>
            </div>
            <div class="bg-gray-200 p-5 rounded my-3 block md:hidden">
              Pawon-Tastic adalah aplikasi yang membuat memasak menjadi lebih mudah dan menyenangkan. Aplikasi ini menyediakan berbagai macam resep yang ditujukan bagi para juru masak pemula dan profesional.
            </div>
            <div class="grid-cols-1 gap-3 my-3 hidden md:grid">
              <div class="bg-gray-200 w-full p-5 rounded">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 bg-blue-500 text-white rounded-full p-2 mb-3">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                  </svg>            
                  <span class="-mt-3 text-2xl font-bold text-blue-500">Fitur Pencarian</span>
                </div>
                Mencari berbagai resep makanan dengan mudah dan cepat, dilengkapi dengan fitur kategori yang dapat memudahkan kita untuk mencari menu secara spesifik.
              </div>
              <div class="bg-gray-200 w-full p-5 rounded">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 bg-blue-500 text-white rounded-full p-2 mb-3">
                    <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                  </svg>
                  <span class="-mt-3 text-2xl font-bold text-blue-500">Dengan Video</span>
                </div>
                Dilengkapi video tutorial memasak langkah demi langkah, memberikan panduan visual kepada pengguna saat mereka menyiapkan hidangan.
              </div>
            </div>
            <div class="flex justify-center flex-col">
              <button class="px-6 py-3 rounded-lg text-white bg-blue-500 font-bold cursor-pointer" id="start">Masuk</button>
              <p class="text-center text-gray-500 mt-5 mb-10 md:mb-0">Made with 💙 by Ricky Aditya Bagaskara</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('onboarding-page', OnboardingPage);
