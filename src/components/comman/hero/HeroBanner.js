import React from "react";

const HeroBanner = ({customClass}) => {
  return (
    <>
      <section class={`w-full ${customClass}`}>
        <div class="py-10 mx-auto max-w-7xl md:px-8">
          <div class="flex flex-col-reverse items-center w-full p-10 bg-gray-100 md:rounded-xl sm:p-10 md:flex-row">
            <div class="w-full mt-16 md:w-1/2 md:mt-0">
              <img
                src="https://cdn.devdojo.com/images/april2021/apple-features-1.jpg"
                class="w-full"
              />
            </div>

            <div class="flex flex-col w-full space-y-6 text-center md:w-1/2 px-7 sm:px-0">
              <h2 class="max-w-md mx-auto text-3xl font-semibold md:text-4xl">
                Get 3% Daily Cash back with Apple Card.
              </h2>
              <p class="text-gray-600">
                And pay for your new Mac over 12 months, interest‑free when you
                choose Apple Card Monthly Installments.
              </p>
              <a
                href="#_"
                class="flex items-center w-auto mx-auto leading-tight text-center text-blue-600 hover:underline"
              >
                <span>Learn More</span>
                <svg
                  class="w-3 h-3 mt-0.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
            <div class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl">
              <div class="flex flex-col px-10 pb-24 pt-14 sm:px-0">
                <h3 class="text-xl font-semibold leading-none">Accessories</h3>
                <p class="mt-5 text-3xl font-semibold leading-none tracking-normal md:text-4xl">
                  Explore Mac accessories.
                </p>
                <a
                  href="#_"
                  class="bg-blue-600 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
                >
                  Shop
                </a>
              </div>
              <img src="https://cdn.devdojo.com/images/april2021/apple-features-2.jpg" />
            </div>
            <div class="relative flex flex-col items-center flex-1 mt-10 overflow-hidden text-center bg-gray-100 md:rounded-xl md:mt-0">
              <div class="flex flex-col px-10 pb-24 space-y-6 pt-14 md:px-24">
                <h3 class="text-xl font-semibold leading-tight">
                  Apple Trade In
                </h3>
                <p class="text-3xl font-semibold leading-none md:text-4xl">
                  Get credit toward a<br /> new Mac.
                </p>
                <p class="font-light text-gray-600">
                  Just trade in your eligible computer for credit or recycle it
                  for free. It’s good for you and the planet.
                </p>
                <a
                  href="#_"
                  class="flex items-center w-auto mx-auto leading-tight text-center text-blue-600 hover:underline"
                >
                  <span>Find your trade‑in value</span>
                  <svg
                    class="w-3 h-3 mt-0.5 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
              <img
                src="https://cdn.devdojo.com/images/april2021/apple-features-3.jpg"
                class="bottom-0 w-1/2 md:absolute"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
