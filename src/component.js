class Component {
  constructor(data, selector) {
    this.data = data;
    this.selector = selector;
    this.keyCodes = Object.freeze({
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    });

    this.render();
  }

  activatePanel(toggle) {
    const parent = toggle.parentElement.parentElement;

    // Update the attributes.
    toggle.setAttribute('aria-expanded', 'true');
    parent.classList.add('accordion__item--expanded');
  }

  deactivatePanel(toggle) {
    const parent = toggle.parentElement.parentElement;

    toggle.setAttribute('aria-expanded', 'false');
    parent.classList.remove('accordion__item--expanded');
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
          <p class="component__intro">${intro}</p>
        </header>
        <div class="component__content">
          <ul class="accordion accordion--level-1 list-reset">`;

    function buildLevels(data, i = 0) {
      let levels = ``;

      i++;

      data.forEach(item => {
        let level = `
          ${i > 1 ? `<ul class="accordion accordion--level-${i} list-reset">` : ''}
            <li class="accordion__item accordion__item--level-${i}">
              <h3 id="${item.title}" class="accordion__title accordion__title--level-${i}">
                <button class="toggle toggle--plus-minus toggle--level-${i}" aria-expanded="false" aria-controls="${item.title.toLowerCase()}Content">
                  <span class="screen-reader-text">Toggle</span>
                </button>
                ${item.title}
              </h3>
              <div id="${item.title.toLowerCase()}Content" class="accordion__content accordion__content--level-${i}">
                ${item.content instanceof Array ? buildLevels(item.content, i) : item.content ? item.content : ''}
              </div>
            </li>
          ${i > 1 ? `</ul>` : ''}`;

        levels += level;
      });

      return levels;
    }

    timeline += `
        ${buildLevels(data)}
      </div>
    </section>`;

    el.innerHTML = timeline;

    el.addEventListener('click', this.handleClicks.bind(this));
    el.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  handleClicks(event) {
    const target = event.target.closest('.toggle');

    if (target && target.getAttribute('aria-expanded') === 'false') {
      this.activatePanel(target);
      return true;
    }

    if (target && target.getAttribute('aria-expanded') === 'true') {
      this.deactivatePanel(target);
      return true;
    }

    return false;
  }

  handleKeyup(event) {
    const key = event.keyCode,
      target = event.target,
      parent = target.parentElement.parentElement,
      accordion = parent.parentElement;

    let newTarget;

    switch (key) {
      // These cases are handled by click event.
      case this.keyCodes.RETURN:
      case this.keyCodes.SPACE:
        break;

      case this.keyCodes.DOWN:
        console.log(parent.nextElementSibling); // eslint-disable-line no-console
        if (parent.nextElementSibling === null) {
          newTarget = accordion.querySelector('.toggle');
        } else {
          newTarget = parent.nextElementSibling;
          newTarget = newTarget.querySelector('.toggle');
        }

        newTarget.focus();
        break;

      default:
        break;
    }
  }
}

export default Component;
