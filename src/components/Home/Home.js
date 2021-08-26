import React from "react";
const Home = () => {
  return (
    <>
      <div class="grid">
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/zXmHzBk/category-a.png"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Category A</h2>
              <p class="card__body-header-subtitle">Motorcycles</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/dQ9fXV3/card1.jpg"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Category B</h2>
              <p class="card__body-header-subtitle">Cars and ATVs</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/nDbfH9B/category-c.png"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Category C</h2>
              <p class="card__body-header-subtitle">Large goods vehicle</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/7gSQMmm/category-d.png"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Category D</h2>
              <p class="card__body-header-subtitle">Buses</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/0F3SdsX/category-t.png"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Category T</h2>
              <p class="card__body-header-subtitle">Tractors and SMV</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" disabled="disabled" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/WDwmPy5/other.png"
              />
              <span class="card__body-cover-checkbox">
                {" "}
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Other</h2>
              <p class="card__body-header-subtitle">Additional categories</p>
            </header>
          </div>
        </label>
      </div>
      <div class="socials">
        <a
          class="twitter"
          href="https://twitter.com/fireblader_me"
          target="_blank"
        >
          <svg viewBox="0 0 72 72">
            <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
          </svg>
        </a>
        <a
          class="dribbble"
          href="https://dribbble.com/fireblader"
          target="_blank"
        >
          <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" />
        </a>
      </div>
    </>
  );
};
