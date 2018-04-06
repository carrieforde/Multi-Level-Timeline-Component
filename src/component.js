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
        </header>
        <div class="component__content">`;

    function buildLevels(data, i = 0) {
      let levels = ``;

      i++;

      data.forEach(item => {
        let level = `
        <ul class="accordion accordion--level-${i} list-reset">
          <li class="accordion__item accordion__item--level-${i}">
            <h3 id="${item.title}" class="accordion__title accordion__title--level-${i}">
              <button class="toggle toggle--plus-minus toggle--level-${i}">
                <span class="screen-reader-text">Toggle</span>
              </button>
              ${item.title}
            </h3>
            <div id="${item.title.toLowerCase()}Content" class="accordion__content accordion__content--level-${i}">
              ${item.content instanceof Array ? buildLevels(item.content, i) : item.content ? item.content : ''}
            </div>
          </li>
        </ul>
      `;

        levels += level;
      });

      return levels;
    }

    timeline += `
        ${buildLevels(data)}
      </div>
    </section>`;

    el.innerHTML = timeline;
  }
}

export default Component;
