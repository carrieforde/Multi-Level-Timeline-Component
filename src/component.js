class Component {
  constructor(data, selector) {
    this.data = data;
    this.selector = selector;

    this.render();
  }

  render() {
    const el = document.querySelector(this.selector),
      { title, subtitle, intro, data } = this.data;

    let timeline = `
      <section class="component component--roadmap">
        <header class="component__header">
          <h2 class="component__title">
            ${title}
          </h2>
          <h3 class="component__subtitle">
            ${subtitle}
          </h3>
          <p class="intro">${intro}</p>
        </header>`;

    function buildLevels(data, i = 0) {
      let levels = ``;

      i++;

      data.forEach(item => {
        let level = `
        <div class="component__content">
          <ul class="accordion accordion--level-${i}">
            <li class="accordion__item accordion__item--level-${i}">
              <h4 id="${item.title}" class="accordion__title accordion__title--level-${i}">
                <button class="toggle toggle--plus-minus toggle--level-${i}">
                  <span class="screen-reader-text">Toggle</span>
                </button>
                ${item.title}
              </h4>
              <div id="${item.title}Content" class="accordion__content accordion__content--level-${i}">
                ${item.content instanceof Array ? buildLevels(item.content, i) : item.content ? item.content : ''}
              </div>
            </li>
          </ul>
        </div>
      `;

        levels += level;
      });

      return levels;
    }

    timeline += `${buildLevels(data)}</section>`;

    el.innerHTML = timeline;
  }
}

export default Component;
