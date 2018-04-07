/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

var _data2 = _interopRequireDefault(_data);

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = new _component2.default(_data2.default, '#app'); // eslint-disable-line no-unused-vars

var themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('ai-humanity-theme');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"title":"Roadmap","subtitle":"Track our progress","intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.","data":[{"title":"Beginnings","content":[{"title":"January 2018 - Subsection title here","content":[{"title":"Title for section","content":"We use an all-encompassing approach—proven solutions and innovative and revolutionary policies and technologies—to simultaneously eradicate global poverty and create realizable paths to prosperity for the unprosperous—70% of humanity."},{"title":"Title for section","content":"We use an all-encompassing approach—proven solutions and innovative and revolutionary policies and technologies—to simultaneously eradicate global poverty and create realizable paths to prosperity for the unprosperous—70% of humanity."},{"title":"Title for section","content":"We use an all-encompassing approach—proven solutions and innovative and revolutionary policies and technologies—to simultaneously eradicate global poverty and create realizable paths to prosperity for the unprosperous—70% of humanity."}]},{"title":"April 2018 - Subsection title here"},{"title":"September 2018 - Subsection title here"}]},{"title":"Collective documenting"},{"title":"Achieving our goals"},{"title":"Lorem ipsum dolor"},{"title":"Ea commodo consequat"},{"title":"Minim veniam"},{"title":"Magna aliqua"}]}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(data, selector) {
    _classCallCheck(this, Component);

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

  _createClass(Component, [{
    key: 'activatePanel',
    value: function activatePanel(toggle) {
      var parent = toggle.parentElement.parentElement;

      // Update the attributes.
      toggle.setAttribute('aria-expanded', 'true');
      parent.classList.add('accordion__item--expanded');
    }
  }, {
    key: 'deactivatePanel',
    value: function deactivatePanel(toggle) {
      var parent = toggle.parentElement.parentElement;

      toggle.setAttribute('aria-expanded', 'false');
      parent.classList.remove('accordion__item--expanded');
    }
  }, {
    key: 'render',
    value: function render() {
      var el = document.querySelector(this.selector),
          _data = this.data,
          title = _data.title,
          subtitle = _data.subtitle,
          intro = _data.intro,
          data = _data.data;


      var timeline = '\n      <section class="component component--roadmap">\n        <header class="component__header">\n          <h2 class="component__title">\n            ' + title + '\n          </h2>\n          <h3 class="component__subtitle">\n            ' + subtitle + '\n          </h3>\n          <p class="component__intro">' + intro + '</p>\n        </header>\n        <div class="component__content">\n          <ul class="accordion accordion--level-1 list-reset">';

      function buildLevels(data) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var levels = '';

        i++;

        data.forEach(function (item) {
          var level = '\n          ' + (i > 1 ? '<ul class="accordion accordion--level-' + i + ' list-reset">' : '') + '\n            <li class="accordion__item accordion__item--level-' + i + '">\n              <h3 id="' + item.title + '" class="accordion__title accordion__title--level-' + i + '">\n                <button class="toggle toggle--plus-minus toggle--level-' + i + '" aria-expanded="false" aria-controls="' + item.title.toLowerCase() + 'Content">\n                  <span class="screen-reader-text">Toggle</span>\n                </button>\n                ' + item.title + '\n              </h3>\n              <div id="' + item.title.toLowerCase() + 'Content" class="accordion__content accordion__content--level-' + i + '">\n                ' + (item.content instanceof Array ? buildLevels(item.content, i) : item.content ? item.content : '') + '\n              </div>\n            </li>\n          ' + (i > 1 ? '</ul>' : '');

          levels += level;
        });

        return levels;
      }

      timeline += '\n        ' + buildLevels(data) + '\n      </div>\n    </section>';

      el.innerHTML = timeline;

      el.addEventListener('click', this.handleClicks.bind(this));
      el.addEventListener('keyup', this.handleKeyup.bind(this));
    }
  }, {
    key: 'handleClicks',
    value: function handleClicks(event) {
      var target = event.target.closest('.toggle');

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
  }, {
    key: 'handleKeyup',
    value: function handleKeyup(event) {
      var key = event.keyCode,
          target = event.target,
          parent = target.parentElement.parentElement,
          accordion = parent.parentElement;

      var newTarget = void 0;

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
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map