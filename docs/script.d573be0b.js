// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"vendor/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carts = exports.Groups = void 0;
// import image1 from '../images/min/1.jpg';
var Groups = [{
  id: 'html',
  title: 'Strony internetowe',
  description: 'Strony, które wykonałem w celu nauki HTML oraz stylowania CSS i preprocesora Sass. Pozanałem też Bootstrap.'
}, {
  id: 'js',
  title: 'Java Script',
  description: 'Kilka przykładów z zabawy vanilla JS, nauka podstaw oraz m.in. AJAX, API, Fetch i ES6'
}, {
  id: 'react',
  title: 'React.js',
  description: 'Aplikacje z wykorzystaniem biblioteki React.'
}, {
  id: 'other',
  title: '.Net',
  description: 'Aplikacja "Rozkaz dzienny" wykonana jako projekt racjonalizatorski dla jednostki wojskowej. Wykonałem ją w techonlogi .net (WPF & XAML), język C# - wspomagałem się EntityFramework. Dane przechowywane są w SQLServer a wydruki jako raporty SAP Crystal Raports. Niestety z przyczyn prawnych nie mogę udostępnić kodu, dlatego pokazuję tylko screenshoty.'
}];
exports.Groups = Groups;
var Carts = [{
  image: 'images/1.jpg',
  id: 'html',
  title: 'Beauty&Go',
  links: [{
    icon: 'link',
    link: 'http://beautyandgo.pl/'
  }],
  description: 'Strona zrobiona dla koleżanki, która prowadzi studio kosmetyczne.',
  logo: ['images/html.gif', 'images/css.gif']
}, {
  image: 'images/2.jpg',
  id: 'html',
  title: 'Midowy Raj',
  links: [{
    icon: 'link',
    link: 'http://miodowyraj.info.pl/'
  }],
  description: 'Strona dla znajomych pszczelarzy. Nauka Bootstrapa.',
  logo: ['images/html.gif', 'images/css.gif', 'images/bootstrap.gif']
}, {
  image: 'images/3.jpg',
  id: 'html',
  title: 'Admin Panel',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/admin-panel/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/admin-panel'
  }],
  description: 'Projekt przykładowej strony panelu administracyjnego.',
  logo: ['images/html.gif', 'images/sass.gif', 'images/js.gif']
}, {
  image: 'images/4.jpg',
  id: 'html',
  title: 'AWAX PSD to HTML',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/awax/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/awax'
  }],
  description: 'PSD Dto HTML - zabawa z Sass, podejście komponentowe.',
  logo: ['images/html.gif', 'images/sass.gif']
}, {
  image: 'images/5.jpg',
  id: 'html',
  title: 'Arrow PSD to HTML',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/psd-to-html-2/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/psd-to-html-2'
  }],
  description: 'PSD to HTML - nauka Sassa.',
  logo: ['images/html.gif', 'images/sass.gif']
}, {
  image: 'images/7.jpg',
  id: 'html',
  title: 'Mache PSD to HTML',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/psd-to-html-1/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/psd-to-html-1'
  }],
  description: 'Moje pierwsze PSD to HTML - nauka css, brak RWD :(',
  logo: ['images/html.gif', 'images/css.gif']
}, {
  image: 'images/8.jpg',
  id: 'js',
  title: 'Gra papier, kamień, nożyce',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/paper-rock-scissors/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/paper-rock-scissors'
  }],
  description: 'Prosta gra. Nauka podstaw Java Script.',
  logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
}, {
  image: 'images/9.jpg',
  id: 'js',
  title: 'Kraftowe browary na pomorzu.',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/carousel-and-map/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/carousel-and-map'
  }],
  description: 'Zabawa w połączenie googlemap api, flickity i mustache.js.',
  logo: ['images/js.gif', 'images/gmap.gif', 'images/html.gif', 'images/css.gif']
}, {
  image: 'images/10.jpg',
  id: 'js',
  title: 'Wyszukiwarka państw.',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/country-search/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/country-search'
  }],
  description: 'Aplikacja używająca architektury REST i zapytań Fetch.',
  logo: ['images/js.gif', 'images/es6.gif', 'images/html.gif', 'images/css.gif']
}, {
  image: 'images/11.jpg',
  id: 'js',
  title: 'Moje własne Trello.',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/my-own-trello/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/my-own-trello'
  }],
  description: 'Tablica kanban. Wszyscy mają aplikację TODO - mam i ja :) ',
  logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
}, {
  image: 'images/12.jpg',
  id: 'react',
  title: 'Jubiko Shop',
  links: [{
    icon: 'link',
    link: 'https://jubiko-shop.herokuapp.com/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/jubiko-shop'
  }],
  description: 'Aplikacja sklepu internetowego. Praca zaliczeniowa kursu WebDev.',
  logo: ['images/mongo.gif', 'images/react.gif', 'images/redux.gif', 'images/node.gif']
}, {
  image: 'images/13.jpg',
  id: 'react',
  title: 'User-Auth',
  links: [{
    icon: 'link',
    link: 'https://user--auth.herokuapp.com/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/user-auth'
  }],
  description: 'Aplikacja rejestracji i logowania użytkownika. Użyłem passport-jwt i bcrypt.js.',
  logo: ['images/mongo.gif', 'images/react.gif', 'images/redux.gif', 'images/node.gif']
}, {
  image: 'images/14.jpg',
  id: 'react',
  title: 'Sudoku',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/sudoku/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/sudoku'
  }],
  description: 'Gra sudoku, wykorzystałem bibliotekę sudoku-umd. Projekt zaliczeniowy kursu Reacta.',
  logo: ['images/react.gif', 'images/css.gif']
}, {
  image: 'images/15.jpg',
  id: 'react',
  title: 'Country-App',
  links: [{
    icon: 'link',
    link: 'https://country--app.herokuapp.com/#/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/country-app'
  }],
  description: 'Aplikacja Create React App. Nauka Reduxa i ReactRoutera. ',
  logo: ['images/react.gif', 'images/redux.gif', 'images/node.gif', 'images/json.png']
}, {
  image: 'images/16.jpg',
  id: 'react',
  title: 'Comments list',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/redux-demo/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/redux-demo'
  }],
  description: 'Aplikacja dodawania komentarzy i ich oceniania. Nauka Reduxa.',
  logo: ['images/react.gif', 'images/redux.gif']
}, {
  image: 'images/17.jpg',
  id: 'react',
  title: 'Git Users Search',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/git-users-search/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/git-users-search'
  }],
  description: 'Wyszukiwarka użytkowników GitHuba. Api GitHuba i podstawy Reacta.',
  logo: ['images/react.gif', 'images/json.png']
}, {
  image: 'images/18.jpg',
  id: 'react',
  title: 'Stoper',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/es6-react-stoper/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/es6-react-stoper'
  }],
  description: 'Poprostu stoper. React + ES6 ',
  logo: ['images/react.gif', 'images/es6.gif']
}, {
  image: 'images/19.jpg',
  id: 'react',
  title: 'Gif Search',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/react-gif-search/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/react-gif-search'
  }],
  description: 'Wyszukiwarka Gifów, Api Giphy.',
  logo: ['images/react.gif']
}, {
  image: 'images/20.jpg',
  id: 'html',
  title: 'Portfolio',
  links: [{
    icon: 'link',
    link: 'https://przemyslawjurkiewicz.github.io/portfolio/'
  }, {
    icon: 'github',
    link: 'https://github.com/przemyslawjurkiewicz/portfolio'
  }],
  description: 'Ta strona :)',
  logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
}, {
  id: 'other',
  images: [{
    image: 'images/r1.jpg',
    description: 'Program pozwala na współtworzenie dokumenu przez wielu użytkowniów jednocześnie. Użytkownik ma przypisane funkcje może dodawać punkty, zatwierdzać je lub edytować dokument. Program pobiera login użytkownia z systemu Windows i przypisuje mu uprawnienia.'
  }, {
    image: 'images/r3.jpg',
    description: 'Użytkownicy mogą dodawać punkty do dokumentu, lub edytować dodane przez siebie punkty o ile nie zostały już zatwierdzone przez przełożonego. Mają też do dyspozycji ogólne i dodane przez siebie szablony punktów'
  }, {
    image: 'images/r2.jpg',
    description: 'Redaktor pobiera zatwierdzone wcześniej przez przełożonego punkty i przygotowuje do wydruku cały dokument.'
  }, {
    image: 'images/r4.jpg',
    description: 'Dokument rozkazu układa się automatyczne zgodzie z "Regulaminem Ogólnym Sił Zbrojnych Rzeczypospolitej Polskiej 2014" i "Instrukcją o zasadach pracy biurowej w Resorcie Obrony Narodowej 2013".'
  }, {
    image: 'images/r5.jpg',
    description: 'Istnieje możliwość wydrukowania zamówinych wcześniej przez użytkownika zyciągów z "Rozkazu dziennego".'
  }, {
    image: 'images/r6.jpg',
    description: 'Administrator ma dostęp do ustawień programu, przypisania ról użytkowników i zmian w szablonach wydrów.'
  }]
}];
exports.Carts = Carts;
},{}],"../node_modules/wow.js/dist/wow.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.WOW = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function isIn(needle, haystack) {
    return haystack.indexOf(needle) >= 0;
  }

  function extend(custom, defaults) {
    for (var key in defaults) {
      if (custom[key] == null) {
        var value = defaults[key];
        custom[key] = value;
      }
    }
    return custom;
  }

  function isMobile(agent) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
    );
  }

  function createEvent(event) {
    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    var customEvent = void 0;
    if (document.createEvent != null) {
      // W3C DOM
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, bubble, cancel, detail);
    } else if (document.createEventObject != null) {
      // IE DOM < 9
      customEvent = document.createEventObject();
      customEvent.eventType = event;
    } else {
      customEvent.eventName = event;
    }

    return customEvent;
  }

  function emitEvent(elem, event) {
    if (elem.dispatchEvent != null) {
      // W3C DOM
      elem.dispatchEvent(event);
    } else if (event in (elem != null)) {
      elem[event]();
    } else if ('on' + event in (elem != null)) {
      elem['on' + event]();
    }
  }

  function addEvent(elem, event, fn) {
    if (elem.addEventListener != null) {
      // W3C DOM
      elem.addEventListener(event, fn, false);
    } else if (elem.attachEvent != null) {
      // IE DOM
      elem.attachEvent('on' + event, fn);
    } else {
      // fallback
      elem[event] = fn;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener != null) {
      // W3C DOM
      elem.removeEventListener(event, fn, false);
    } else if (elem.detachEvent != null) {
      // IE DOM
      elem.detachEvent('on' + event, fn);
    } else {
      // fallback
      delete elem[event];
    }
  }

  function getInnerHeight() {
    if ('innerHeight' in window) {
      return window.innerHeight;
    }

    return document.documentElement.clientHeight;
  }

  // Minimalistic WeakMap shim, just in case.
  var WeakMap = window.WeakMap || window.MozWeakMap || function () {
    function WeakMap() {
      _classCallCheck(this, WeakMap);

      this.keys = [];
      this.values = [];
    }

    _createClass(WeakMap, [{
      key: 'get',
      value: function get(key) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            return this.values[i];
          }
        }
        return undefined;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            this.values[i] = value;
            return this;
          }
        }
        this.keys.push(key);
        this.values.push(value);
        return this;
      }
    }]);

    return WeakMap;
  }();

  // Dummy MutationObserver, to avoid raising exceptions.
  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
    function MutationObserver() {
      _classCallCheck(this, MutationObserver);

      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    _createClass(MutationObserver, [{
      key: 'observe',
      value: function observe() {}
    }]);

    return MutationObserver;
  }(), _class.notSupported = true, _temp);

  // getComputedStyle shim, from http://stackoverflow.com/a/21797294
  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
    var getComputedStyleRX = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(prop) {
        if (prop === 'float') {
          prop = 'styleFloat';
        }
        if (getComputedStyleRX.test(prop)) {
          prop.replace(getComputedStyleRX, function (_, _char) {
            return _char.toUpperCase();
          });
        }
        var currentStyle = el.currentStyle;

        return (currentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };

  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, WOW);

      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null
      };

      this.animate = function animateFactory() {
        if ('requestAnimationFrame' in window) {
          return function (callback) {
            return window.requestAnimationFrame(callback);
          };
        }
        return function (callback) {
          return callback();
        };
      }();

      this.vendors = ['moz', 'webkit'];

      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      // Map of elements to animation names:
      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.config.boxClass);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        this.element = window.document.documentElement;
        if (isIn(document.readyState, ['interactive', 'complete'])) {
          this.start();
        } else {
          addEvent(document, 'DOMContentLoaded', this.start);
        }
        this.finished = [];
      }
    }, {
      key: 'start',
      value: function start() {
        var _this = this;

        this.stopped = false;
        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
        this.all = this.boxes.slice(0);
        if (this.boxes.length) {
          if (this.disabled()) {
            this.resetStyle();
          } else {
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              this.applyStyle(box, true);
            }
          }
        }
        if (!this.disabled()) {
          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }
        if (this.config.live) {
          var mut = new MutationObserver(function (records) {
            for (var j = 0; j < records.length; j++) {
              var record = records[j];
              for (var k = 0; k < record.addedNodes.length; k++) {
                var node = record.addedNodes[k];
                _this.doSync(node);
              }
            }
            return undefined;
          });
          mut.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.stopped = true;
        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        removeEvent(window, 'resize', this.scrollHandler);
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'sync',
      value: function sync() {
        if (MutationObserver.notSupported) {
          this.doSync(this.element);
        }
      }
    }, {
      key: 'doSync',
      value: function doSync(element) {
        if (typeof element === 'undefined' || element === null) {
          element = this.element;
        }
        if (element.nodeType !== 1) {
          return;
        }
        element = element.parentNode || element;
        var iterable = element.querySelectorAll('.' + this.config.boxClass);
        for (var i = 0; i < iterable.length; i++) {
          var box = iterable[i];
          if (!isIn(box, this.all)) {
            this.boxes.push(box);
            this.all.push(box);
            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(box, true);
            }
            this.scrolled = true;
          }
        }
      }
    }, {
      key: 'show',
      value: function show(box) {
        this.applyStyle(box);
        box.className = box.className + ' ' + this.config.animateClass;
        if (this.config.callback != null) {
          this.config.callback(box);
        }
        emitEvent(box, this.wowEvent);

        addEvent(box, 'animationend', this.resetAnimation);
        addEvent(box, 'oanimationend', this.resetAnimation);
        addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
        addEvent(box, 'MSAnimationEnd', this.resetAnimation);

        return box;
      }
    }, {
      key: 'applyStyle',
      value: function applyStyle(box, hidden) {
        var _this2 = this;

        var duration = box.getAttribute('data-wow-duration');
        var delay = box.getAttribute('data-wow-delay');
        var iteration = box.getAttribute('data-wow-iteration');

        return this.animate(function () {
          return _this2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          box.style.visibility = 'visible';
        }
        return undefined;
      }
    }, {
      key: 'resetAnimation',
      value: function resetAnimation(event) {
        if (event.type.toLowerCase().indexOf('animationend') >= 0) {
          var target = event.target || event.srcElement;
          target.className = target.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }
        box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, { animationDuration: duration });
        }
        if (delay) {
          this.vendorSet(box.style, { animationDelay: delay });
        }
        if (iteration) {
          this.vendorSet(box.style, { animationIterationCount: iteration });
        }
        this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });

        return box;
      }
    }, {
      key: 'vendorSet',
      value: function vendorSet(elem, properties) {
        for (var name in properties) {
          if (properties.hasOwnProperty(name)) {
            var value = properties[name];
            elem['' + name] = value;
            for (var i = 0; i < this.vendors.length; i++) {
              var vendor = this.vendors[i];
              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
            }
          }
        }
      }
    }, {
      key: 'vendorCSS',
      value: function vendorCSS(elem, property) {
        var style = getComputedStyle(elem);
        var result = style.getPropertyCSSValue(property);
        for (var i = 0; i < this.vendors.length; i++) {
          var vendor = this.vendors[i];
          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
        }
        return result;
      }
    }, {
      key: 'animationName',
      value: function animationName(box) {
        var aName = void 0;
        try {
          aName = this.vendorCSS(box, 'animation-name').cssText;
        } catch (error) {
          // Opera, fall back to plain property value
          aName = getComputedStyle(box).getPropertyValue('animation-name');
        }

        if (aName === 'none') {
          return ''; // SVG/Firefox, unable to get animation name?
        }

        return aName;
      }
    }, {
      key: 'cacheAnimationName',
      value: function cacheAnimationName(box) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
        // box.dataset is not supported for SVG elements in Firefox
        return this.animationNameCache.set(box, this.animationName(box));
      }
    }, {
      key: 'cachedAnimationName',
      value: function cachedAnimationName(box) {
        return this.animationNameCache.get(box);
      }
    }, {
      key: 'scrollHandler',
      value: function scrollHandler() {
        this.scrolled = true;
      }
    }, {
      key: 'scrollCallback',
      value: function scrollCallback() {
        if (this.scrolled) {
          this.scrolled = false;
          var results = [];
          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            if (box) {
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              results.push(box);
            }
          }
          this.boxes = results;
          if (!this.boxes.length && !this.config.live) {
            this.stop();
          }
        }
      }
    }, {
      key: 'offsetTop',
      value: function offsetTop(element) {
        // SVG elements don't have an offsetTop in Firefox.
        // This will use their nearest parent that has an offsetTop.
        // Also, using ('offsetTop' of element) causes an exception in Firefox.
        while (element.offsetTop === undefined) {
          element = element.parentNode;
        }
        var top = element.offsetTop;
        while (element.offsetParent) {
          element = element.offsetParent;
          top += element.offsetTop;
        }
        return top;
      }
    }, {
      key: 'isVisible',
      value: function isVisible(box) {
        var offset = box.getAttribute('data-wow-offset') || this.config.offset;
        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
        var top = this.offsetTop(box);
        var bottom = top + box.clientHeight;

        return top <= viewBottom && bottom >= viewTop;
      }
    }, {
      key: 'disabled',
      value: function disabled() {
        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);

    return WOW;
  }();

  exports.default = WOW;
  module.exports = exports['default'];
});

},{}],"js/script.js":[function(require,module,exports) {
"use strict";

var _data = require("../vendor/data");

var _wow = _interopRequireDefault(require("wow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Wow.js init
new _wow.default({
  mobile: false,
  live: true,
  resetAnimation: true
}).init(); // Navigation bar change when scroll

var hero = document.querySelector('.hero');
var heroHeight = hero.offsetHeight / 4; // If mobile olways on

if (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1) {
  document.querySelector('.navigation').classList.remove('navigation--hidden');
} // If not mobile change when sroll
else {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (heroHeight < currentScrollPos) {
        document.querySelector('.navigation').classList.remove('navigation--hidden');
        document.querySelector('.navigation__logo').classList.remove('navigation__logo--hidden');
      } else {
        document.querySelector('.navigation').classList.add('navigation--hidden');
        document.querySelector('.navigation__logo').classList.add('navigation__logo--hidden');
      }
    };
  } // Navigation item active when sroll on section


var links = document.querySelectorAll('.navigation__item');
var sections = document.querySelectorAll('section');

function changeLinkState() {
  var index = sections.length;

  while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

  links.forEach(function (link) {
    return link.classList.remove('navigation__item--active');
  });
  links[index].classList.add('navigation__item--active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState); // Mustache.js

_data.Groups.map(function (group) {
  return generateTemplate('portfolio-section-template', group, 'portfolio-wrapper');
});

_data.Groups.map(function (group) {
  return generateTemplate('portfolio-menu-template', group, 'portfolio-menu');
});

_data.Carts.map(function (cart) {
  return cart.id === 'other' ? generateTemplate('portfolio-gallery-template', cart, cart.id) : generateTemplate('portfolio-cart-template', cart, cart.id);
}); // Generate html from temple (mustache js)


function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.getElementById(basicElement);
  Mustache.parse(template);
  element.innerHTML += Mustache.render(template, data);
} // Portfolio menu swicher


var menuButtons = _toConsumableArray(document.getElementsByClassName('portfolio__button'));

var portfolioSections = _toConsumableArray(document.getElementsByClassName('section'));

var portfolioToggle = function portfolioToggle(id) {
  portfolioSections.map(function (section) {
    return section.id === id ? section.classList.add('section--active') : section.classList.remove('section--active');
  });
  menuButtons.map(function (button) {
    return button.id === id ? button.classList.add('button--active') : button.classList.remove('button--active');
  });
};

menuButtons.map(function (button) {
  return button.addEventListener('click', function () {
    return portfolioToggle(button.id);
  });
}); // First section and first button visible on load.

portfolioSections[0].classList.add('section--active');
menuButtons[0].classList.add('button--active'); // Gallery slider

var showSlides = function showSlides(n) {
  var slides = document.getElementsByClassName('gallery__slide');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
};

var slideIndex = 1;
showSlides(slideIndex);
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
prev.addEventListener('click', function () {
  return showSlides(slideIndex -= 1);
});
next.addEventListener('click', function () {
  return showSlides(slideIndex += 1);
});
},{"../vendor/data":"vendor/data.js","wow.js":"../node_modules/wow.js/dist/wow.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50975" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map