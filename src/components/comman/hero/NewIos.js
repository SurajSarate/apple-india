import React from "react";

const NewIos=({iosVersion,iosTagLine1,iosTagLine2,img})=>{
  return (
    <>
      <section class="w-full bg-gray-100">
        <div class="py-10 mx-auto max-w-7xl md:px-8">
          <div class="flex flex-col items-center w-full overflow-hidden bg-white md:rounded-xl md:flex-row">
            <div class="flex flex-col w-full p-10 mt-4 text-center md:w-1/2 md:mt-0">
              <p class="mb-4 text-3xl font-medium leading-none">{iosVersion}</p>
              <h2 class="max-w-md mx-auto mb-6 text-4xl font-semibold md:leading-tight md:text-5xl">
                {iosTagLine1}
                <br />
                {iosTagLine2}
              </h2>
              <a
                href="#_"
                class="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline"
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
            <div class="w-full mt-7 md:w-1/2 md:mt-0">
              <img
                src={img}
                class="w-full"
              />
            </div>
          </div>

          <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
            <div class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-white md:rounded-xl">
              <div class="flex flex-col px-10 pb-5 space-y-6 pt-14 md:px-8">
                <h3 class="text-4xl font-semibold leading-none md:text-5xl">
                  Switch to iPhone
                </h3>
                <p class="text-xl font-light text-gray-800">
                  So many reasons. So incredibly easy.
                </p>
                <a
                  href="#_"
                  class="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline"
                >
                  <span>Learn more</span>
                  <svg
                    class="w-4 h-4 ml-0.5"
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
                src="https://cdn.devdojo.com/images/april2021/iphone-121.jpg"
                class="w-2/3"
              />
            </div>
            <div class="relative flex flex-col items-center justify-center flex-1 py-32 mt-10 overflow-hidden text-center bg-white md:rounded-xl md:mt-0">
              <img
                src="https://cdn.devdojo.com/images/april2021/iphone-12-security.png"
                class="w-20 h-auto"
              />
              <div class="flex flex-col px-10 space-y-6 md:px-8">
                <h3 class="text-3xl font-semibold leading-none md:text-4xl">
                  Privacy
                </h3>
                <p class="text-xl font-light text-gray-800">
                  What you share should be up to you.
                </p>
                <a
                  href="#_"
                  class="flex items-center w-auto mx-auto text-lg leading-tight text-center text-blue-600 hover:underline"
                >
                  <span>Learn more</span>
                  <svg
                    class="w-4 h-4 ml-0.5"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default NewIos;
