import React from "react";
import Footer from './Footer'

function JoinUs() {
  return (
    <>
      <section class="w-full flex bg-black">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-pink-400 tracking-wide uppercase">
              Get started today
            </h2>
            <div class="inline-flex items-end justify-center w-full text-center mx-auto">
              <img
                src="https://cdn.devdojo.com/tails/avatars/067.jpg"
                class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
              />
              <img
                src="https://cdn.devdojo.com/tails/avatars/019.jpg"
                class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
              />
              <img
                src="https://cdn.devdojo.com/tails/avatars/036.jpg"
                class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
              />
              <img
                src="https://cdn.devdojo.com/tails/avatars/008.jpg"
                class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
              />
              <img
                src="https://cdn.devdojo.com/tails/avatars/003.jpg"
                class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
              />
            </div>
            <p class="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Join{" "}
              <span class="px-2 py-1 relative inline-block">
                <svg
                  class="stroke-current bottom-0 absolute text-yellow-500 -translate-x-2"
                  viewBox="0 0 410 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                    stroke-width="11.2"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <span class="relative">20,433</span>
              </span>{" "}
              Happy Customers
            </p>
            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              There are so many reasons to switch to iPhone
            </p>
            <a
              href="#_"
              class="text-white px-8 py-4 inline-block mt-5 font-medium text-lg bg-yellow-500 focus:ring-4 focus:ring-white-500 focus:ring-offset-2 rounded-xl"
            >
              Join Us Today
            </a>
          </div>
        </div>
      </section>
      <Footer customStyle={'bg-black'}/>
    </>
  );
}

export default JoinUs;
