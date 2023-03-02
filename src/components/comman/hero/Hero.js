import React from "react";

const Hero = ({deviceName,deviceTag,devicePriceTag1,devicePriceTag2,customBtn,deviceImg,altImg,customClass}) => {
  return (
    <>
      <section class={`w-full pt-20 bg-black`}>
        <div class="flex flex-col items-center justify-center max-w-6xl px-16 mx-auto text-center text-white sm:px-0">
          <h2 class="text-5xl font-bold mb-1.5">{deviceName}</h2>
          <p class="mb-3 text-3xl font-medium">{deviceTag}</p>
          <p class="inline-block text-base text-gray-500 sm:block">
            {devicePriceTag1}
            <br class="hidden sm:block" />{devicePriceTag2}</p>
          <p class="inline-block text-base text-gray-500 sm:block"></p>
          <div class="flex flex-col items-center justify-center mt-8 mb-8 sm:flex-row sm:space-x-5">
            <a
              href="#_"
              class={`bg-blue-600 text-white inline-block md:mx-0 sm:mb-0 mb-5 mx-auto rounded-full px-5 py-1.5 ${customBtn}`}
            >
              Buy Now
            </a>
            <a
              href="#_"
              class="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline sm:mx-0"
            >
              <span>Learn more</span>
              <svg
                class="w-4 h-4 ml-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="w3.org/2000/svg"
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
            src={deviceImg}
            class="w-full"
            alt={altImg}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
