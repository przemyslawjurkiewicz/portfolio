parcelRequire = (function(e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    gEKi: [
      function(require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Carts = exports.Groups = void 0);
        var i = [
          {
            id: 'html',
            title: 'Strony internetowe',
            description:
              'Strony, które wykonałem w celu nauki HTML oraz stylowania CSS i preprocesora Sass. Pozanałem też Bootstrap.'
          },
          {
            id: 'js',
            title: 'Java Script',
            description:
              'Kilka przykładów z zabawy vanilla JS, nauka podstaw oraz m.in. AJAX, API, Fetch i ES6'
          },
          {
            id: 'react',
            title: 'React.js',
            description: 'Aplikacje z wykorzystaniem biblioteki React.'
          },
          {
            id: 'other',
            title: '.Net',
            description:
              'Aplikacja "Rozkaz dzienny" wykonana jako projekt racjonalizatorski dla jednostki wojskowej. Wykonałem ją w techonlogi .net (WPF & XAML), język C# - wspomagałem się EntityFramework. Dane przechowywane są w SQLServer a wydruki jako raporty SAP Crystal Raports. Niestety z przyczyn prawnych nie mogę udostępnić kodu, dlatego pokazuję tylko screenshoty.'
          }
        ];
        exports.Groups = i;
        var e = [
          {
            image: '/images/1.jpg',
            id: 'html',
            title: 'Beauty&Go',
            links: [{ icon: 'link', link: 'http://beautyandgo.pl/' }],
            description:
              'Strona zrobiona dla koleżanki, która prowadzi studio kosmetyczne.',
            logo: ['/images/html.gif', '/images/css.gif']
          },
          {
            image: '/images/2.jpg',
            id: 'html',
            title: 'Midowy Raj',
            links: [
              { icon: 'link', link: 'http://miodowyraj.info.pl/' },
              { icon: 'github', link: 'http://beautyandgo.pl/' }
            ],
            description: 'Strona dla znajomych pszczelarzy. Nauka Bootstrapa.',
            logo: ['/images/html.gif', '/images/css.gif', '/images/bootstrap.gif']
          },
          {
            image: '/images/3.jpg',
            id: 'html',
            title: 'Admin Panel',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/admin-panel/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/admin-panel'
              }
            ],
            description: 'Projekt przykładowej strony panelu administracyjnego.',
            logo: ['/images/html.gif', '/images/sass.gif', '/images/js.gif']
          },
          {
            image: '/images/4.jpg',
            id: 'html',
            title: 'AWAX PSD to HTML',
            links: [
              { icon: 'link', link: 'https://przemyslawjurkiewicz.github.io/awax/' },
              { icon: 'github', link: 'https://github.com/przemyslawjurkiewicz/awax' }
            ],
            description: 'PSD Dto HTML - zabawa z Sass, podejście komponentowe.',
            logo: ['/images/html.gif', '/images/sass.gif']
          },
          {
            image: '/images/5.jpg',
            id: 'html',
            title: 'Arrow PSD to HTML',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/psd-to-html-2/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/psd-to-html-2'
              }
            ],
            description: 'PSD to HTML - nauka Sassa.',
            logo: ['/images/html.gif', '/images/sass.gif']
          },
          {
            image: '/images/7.jpg',
            id: 'html',
            title: 'Mache PSD to HTML',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/psd-to-html-2/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/psd-to-html-2'
              }
            ],
            description: 'Moje pierwsze PSD to HTML - nauka css, brak RWD :(',
            logo: ['/images/html.gif', '/images/css.gif']
          },
          {
            image: '/images/8.jpg',
            id: 'js',
            title: 'Gra papier, kamień, nożyce',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/paper-rock-scissors/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/paper-rock-scissors'
              }
            ],
            description: 'Prosta gra. Nauka podstaw Java Script.',
            logo: ['/images/js.gif', '/images/html.gif', '/images/sass.gif']
          },
          {
            image: '/images/9.jpg',
            id: 'js',
            title: 'Kraftowe browary na pomorzu.',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/carousel-and-map/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/carousel-and-map'
              }
            ],
            description: 'Zabawa w połączenie googlemap api, flickity i mustache.js.',
            logo: [
              '/images/js.gif',
              '/images/gmap.gif',
              '/images/html.gif',
              '/images/css.gif'
            ]
          },
          {
            image: '/images/10.jpg',
            id: 'js',
            title: 'Wyszukiwarka państw.',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/country-search/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/country-search'
              }
            ],
            description: 'Aplikacja używająca architektury REST i zapytań Fetch.',
            logo: [
              '/images/js.gif',
              '/images/es6.gif',
              '/images/html.gif',
              '/images/css.gif'
            ]
          },
          {
            image: '/images/11.jpg',
            id: 'js',
            title: 'Moje własne Trello.',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/my-own-trello/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/my-own-trello'
              }
            ],
            description: 'Tablica kanban. Wszyscy mają aplikację TODO - mam i ja :) ',
            logo: ['/images/js.gif', '/images/html.gif', '/images/sass.gif']
          },
          {
            image: '/images/12.jpg',
            id: 'react',
            title: 'Jubiko Shop',
            links: [
              { icon: 'link', link: 'https://jubiko-shop.herokuapp.com/' },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/jubiko-shop'
              }
            ],
            description:
              'Aplikacja sklepu internetowego. Praca zaliczeniowa kursu WebDev.',
            logo: [
              '/images/mongo.gif',
              '/images/react.gif',
              '/images/redux.gif',
              '/images/node.gif'
            ]
          },
          {
            image: '/images/13.jpg',
            id: 'react',
            title: 'User-Auth',
            links: [
              { icon: 'link', link: 'https://user--auth.herokuapp.com/' },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/user-auth'
              }
            ],
            description:
              'Aplikacja rejestracji i logowania użytkownika. Użyłem passport-jwt i bcrypt.js.',
            logo: [
              '/images/mongo.gif',
              '/images/react.gif',
              '/images/redux.gif',
              '/images/node.gif'
            ]
          },
          {
            image: '/images/14.jpg',
            id: 'react',
            title: 'Sudoku',
            links: [
              { icon: 'link', link: 'https://przemyslawjurkiewicz.github.io/sudoku/' },
              { icon: 'github', link: 'https://github.com/przemyslawjurkiewicz/sudoku' }
            ],
            description:
              'Gra sudoku, wykorzystałem bibliotekę sudoku-umd. Projekt zaliczeniowy kursu Reacta.',
            logo: ['/images/react.gif', '/images/css.gif']
          },
          {
            image: '/images/15.jpg',
            id: 'react',
            title: 'Country-App',
            links: [
              { icon: 'link', link: 'https://country--app.herokuapp.com/#/' },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/country-app'
              }
            ],
            description: 'Aplikacja Create React App. Nauka Reduxa i ReactRoutera. ',
            logo: [
              '/images/react.gif',
              '/images/redux.gif',
              '/images/node.gif',
              '/images/json.png'
            ]
          },
          {
            image: '/images/16.jpg',
            id: 'react',
            title: 'Comments list',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/redux-demo/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/redux-demo'
              }
            ],
            description:
              'Aplikacja dodawania komentarzy i ich oceniania. Nauka Reduxa.',
            logo: ['/images/react.gif', '/images/redux.gif']
          },
          {
            image: '/images/17.jpg',
            id: 'react',
            title: 'Git Users Search',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/git-users-search/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/git-users-search'
              }
            ],
            description:
              'Wyszukiwarka użytkowników GitHuba. Api GitHuba i podstawy Reacta.',
            logo: ['/images/react.gif', '/images/json.png']
          },
          {
            image: '/images/18.jpg',
            id: 'react',
            title: 'Stoper',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/es6-react-stoper/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/es6-react-stoper'
              }
            ],
            description: 'Poprostu stoper. React + ES6 ',
            logo: ['/images/react.gif', '/images/es6.gif']
          },
          {
            image: '/images/19.jpg',
            id: 'react',
            title: 'Gif Search',
            links: [
              {
                icon: 'link',
                link: 'https://przemyslawjurkiewicz.github.io/react-gif-search/'
              },
              {
                icon: 'github',
                link: 'https://github.com/przemyslawjurkiewicz/react-gif-search'
              }
            ],
            description: 'Wyszukiwarka Gifów, Api Giphy.',
            logo: ['/images/react.gif']
          },
          {
            id: 'other',
            images: [
              {
                image: '/images/r1.jpg',
                description:
                  'Program pozwala na współtworzenie dokumenu przez wielu użytkowniów jednocześnie. Użytkownik ma przypisane funkcje może dodawać punkty, zatwierdzać je lub edytować dokument. Program pobiera login użytkownia z systemu Windows i przypisuje mu uprawnienia.'
              },
              {
                image: '/images/r3.jpg',
                description:
                  'Użytkownicy mogą dodawać punkty do dokumentu, lub edytować dodane przez siebie punkty o ile nie zostały już zatwierdzone przez przełożonego. Mają też do dyspozycji ogólne i dodane przez siebie szablony punktów'
              },
              {
                image: '/images/r2.jpg',
                description:
                  'Redaktor pobiera zatwierdzone wcześniej przez przełożonego punkty i przygotowuje do wydruku cały dokument.'
              },
              {
                image: '/images/r4.jpg',
                description:
                  'Dokument rozkazu układa się automatyczne zgodzie z "Regulaminem Ogólnym Sił Zbrojnych Rzeczypospolitej Polskiej 2014" i "Instrukcją o zasadach pracy biurowej w Resorcie Obrony Narodowej 2013".'
              },
              {
                image: '/images/r5.jpg',
                description:
                  'Istnieje możliwość wydrukowania zamówinych wcześniej przez użytkownika zyciągów z "Rozkazu dziennego".'
              },
              {
                image: '/images/r6.jpg',
                description:
                  'Administrator ma dostęp do ustawień programu, przypisania ról użytkowników i zmian w szablonach wydrów.'
              }
            ]
          }
        ];
        exports.Carts = e;
      },
      {}
    ],
    yCZL: [
      function(require, module, exports) {
        var define;
        var global = arguments[3];
        var e,
          t = arguments[3];
        !(function(t, n) {
          if ('function' == typeof e && e.amd) e(['module', 'exports'], n);
          else if ('undefined' != typeof exports) n(module, exports);
          else {
            var i = { exports: {} };
            n(i, i.exports), (t.WOW = i.exports);
          }
        })(this, function(e, t) {
          'use strict';
          var n, i;
          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }
          Object.defineProperty(t, '__esModule', { value: !0 });
          var s = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
          function a(e, t) {
            return t.indexOf(e) >= 0;
          }
          function r(e, t, n) {
            null != e.addEventListener
              ? e.addEventListener(t, n, !1)
              : null != e.attachEvent
              ? e.attachEvent('on' + t, n)
              : (e[t] = n);
          }
          function l(e, t, n) {
            null != e.removeEventListener
              ? e.removeEventListener(t, n, !1)
              : null != e.detachEvent
              ? e.detachEvent('on' + t, n)
              : delete e[t];
          }
          var u =
              window.WeakMap ||
              window.MozWeakMap ||
              (function() {
                function e() {
                  o(this, e), (this.keys = []), (this.values = []);
                }
                return (
                  s(e, [
                    {
                      key: 'get',
                      value: function(e) {
                        for (var t = 0; t < this.keys.length; t++) {
                          if (this.keys[t] === e) return this.values[t];
                        }
                      }
                    },
                    {
                      key: 'set',
                      value: function(e, t) {
                        for (var n = 0; n < this.keys.length; n++) {
                          if (this.keys[n] === e) return (this.values[n] = t), this;
                        }
                        return this.keys.push(e), this.values.push(t), this;
                      }
                    }
                  ]),
                  e
                );
              })(),
            c =
              window.MutationObserver ||
              window.WebkitMutationObserver ||
              window.MozMutationObserver ||
              ((i = n = (function() {
                function e() {
                  o(this, e),
                    'undefined' != typeof console &&
                      null !== console &&
                      (console.warn(
                        'MutationObserver is not supported by your browser.'
                      ),
                      console.warn(
                        'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
                      ));
                }
                return s(e, [{ key: 'observe', value: function() {} }]), e;
              })()),
              (n.notSupported = !0),
              i),
            h =
              window.getComputedStyle ||
              function(e) {
                var t = /(\-([a-z]){1})/g;
                return {
                  getPropertyValue: function(n) {
                    'float' === n && (n = 'styleFloat'),
                      t.test(n) &&
                        n.replace(t, function(e, t) {
                          return t.toUpperCase();
                        });
                    var i = e.currentStyle;
                    return (null != i ? i[n] : void 0) || null;
                  }
                };
              },
            d = (function() {
              function e() {
                var t =
                  arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                o(this, e),
                  (this.defaults = {
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null
                  }),
                  (this.animate =
                    'requestAnimationFrame' in window
                      ? function(e) {
                          return window.requestAnimationFrame(e);
                        }
                      : function(e) {
                          return e();
                        }),
                  (this.vendors = ['moz', 'webkit']),
                  (this.start = this.start.bind(this)),
                  (this.resetAnimation = this.resetAnimation.bind(this)),
                  (this.scrollHandler = this.scrollHandler.bind(this)),
                  (this.scrollCallback = this.scrollCallback.bind(this)),
                  (this.scrolled = !0),
                  (this.config = (function(e, t) {
                    for (var n in t)
                      if (null == e[n]) {
                        var i = t[n];
                        e[n] = i;
                      }
                    return e;
                  })(t, this.defaults)),
                  null != t.scrollContainer &&
                    (this.config.scrollContainer = document.querySelector(
                      t.scrollContainer
                    )),
                  (this.animationNameCache = new u()),
                  (this.wowEvent = (function(e) {
                    var t =
                        !(arguments.length <= 1 || void 0 === arguments[1]) &&
                        arguments[1],
                      n =
                        !(arguments.length <= 2 || void 0 === arguments[2]) &&
                        arguments[2],
                      i =
                        arguments.length <= 3 || void 0 === arguments[3]
                          ? null
                          : arguments[3],
                      o = void 0;
                    return (
                      null != document.createEvent
                        ? (o = document.createEvent('CustomEvent')).initCustomEvent(
                            e,
                            t,
                            n,
                            i
                          )
                        : null != document.createEventObject
                        ? ((o = document.createEventObject()).eventType = e)
                        : (o.eventName = e),
                      o
                    );
                  })(this.config.boxClass));
              }
              return (
                s(e, [
                  {
                    key: 'init',
                    value: function() {
                      (this.element = window.document.documentElement),
                        a(document.readyState, ['interactive', 'complete'])
                          ? this.start()
                          : r(document, 'DOMContentLoaded', this.start),
                        (this.finished = []);
                    }
                  },
                  {
                    key: 'start',
                    value: function() {
                      var e = this;
                      if (
                        ((this.stopped = !1),
                        (this.boxes = [].slice.call(
                          this.element.querySelectorAll('.' + this.config.boxClass)
                        )),
                        (this.all = this.boxes.slice(0)),
                        this.boxes.length)
                      )
                        if (this.disabled()) this.resetStyle();
                        else
                          for (var t = 0; t < this.boxes.length; t++) {
                            var n = this.boxes[t];
                            this.applyStyle(n, !0);
                          }
                      (this.disabled() ||
                        (r(
                          this.config.scrollContainer || window,
                          'scroll',
                          this.scrollHandler
                        ),
                        r(window, 'resize', this.scrollHandler),
                        (this.interval = setInterval(this.scrollCallback, 50))),
                      this.config.live) &&
                        new c(function(t) {
                          for (var n = 0; n < t.length; n++)
                            for (var i = t[n], o = 0; o < i.addedNodes.length; o++) {
                              var s = i.addedNodes[o];
                              e.doSync(s);
                            }
                        }).observe(document.body, { childList: !0, subtree: !0 });
                    }
                  },
                  {
                    key: 'stop',
                    value: function() {
                      (this.stopped = !0),
                        l(
                          this.config.scrollContainer || window,
                          'scroll',
                          this.scrollHandler
                        ),
                        l(window, 'resize', this.scrollHandler),
                        null != this.interval && clearInterval(this.interval);
                    }
                  },
                  {
                    key: 'sync',
                    value: function() {
                      c.notSupported && this.doSync(this.element);
                    }
                  },
                  {
                    key: 'doSync',
                    value: function(e) {
                      if ((null == e && (e = this.element), 1 === e.nodeType))
                        for (
                          var t = (e = e.parentNode || e).querySelectorAll(
                              '.' + this.config.boxClass
                            ),
                            n = 0;
                          n < t.length;
                          n++
                        ) {
                          var i = t[n];
                          a(i, this.all) ||
                            (this.boxes.push(i),
                            this.all.push(i),
                            this.stopped || this.disabled()
                              ? this.resetStyle()
                              : this.applyStyle(i, !0),
                            (this.scrolled = !0));
                        }
                    }
                  },
                  {
                    key: 'show',
                    value: function(e) {
                      var t, n;
                      return (
                        this.applyStyle(e),
                        (e.className = e.className + ' ' + this.config.animateClass),
                        null != this.config.callback && this.config.callback(e),
                        (t = e),
                        (n = this.wowEvent),
                        null != t.dispatchEvent
                          ? t.dispatchEvent(n)
                          : n in (null != t)
                          ? t[n]()
                          : 'on' + n in (null != t) && t['on' + n](),
                        r(e, 'animationend', this.resetAnimation),
                        r(e, 'oanimationend', this.resetAnimation),
                        r(e, 'webkitAnimationEnd', this.resetAnimation),
                        r(e, 'MSAnimationEnd', this.resetAnimation),
                        e
                      );
                    }
                  },
                  {
                    key: 'applyStyle',
                    value: function(e, t) {
                      var n = this,
                        i = e.getAttribute('data-wow-duration'),
                        o = e.getAttribute('data-wow-delay'),
                        s = e.getAttribute('data-wow-iteration');
                      return this.animate(function() {
                        return n.customStyle(e, t, i, o, s);
                      });
                    }
                  },
                  {
                    key: 'resetStyle',
                    value: function() {
                      for (var e = 0; e < this.boxes.length; e++) {
                        this.boxes[e].style.visibility = 'visible';
                      }
                    }
                  },
                  {
                    key: 'resetAnimation',
                    value: function(e) {
                      if (e.type.toLowerCase().indexOf('animationend') >= 0) {
                        var t = e.target || e.srcElement;
                        t.className = t.className
                          .replace(this.config.animateClass, '')
                          .trim();
                      }
                    }
                  },
                  {
                    key: 'customStyle',
                    value: function(e, t, n, i, o) {
                      return (
                        t && this.cacheAnimationName(e),
                        (e.style.visibility = t ? 'hidden' : 'visible'),
                        n && this.vendorSet(e.style, { animationDuration: n }),
                        i && this.vendorSet(e.style, { animationDelay: i }),
                        o && this.vendorSet(e.style, { animationIterationCount: o }),
                        this.vendorSet(e.style, {
                          animationName: t ? 'none' : this.cachedAnimationName(e)
                        }),
                        e
                      );
                    }
                  },
                  {
                    key: 'vendorSet',
                    value: function(e, t) {
                      for (var n in t)
                        if (t.hasOwnProperty(n)) {
                          var i = t[n];
                          e['' + n] = i;
                          for (var o = 0; o < this.vendors.length; o++) {
                            e[
                              '' +
                                this.vendors[o] +
                                n.charAt(0).toUpperCase() +
                                n.substr(1)
                            ] = i;
                          }
                        }
                    }
                  },
                  {
                    key: 'vendorCSS',
                    value: function(e, t) {
                      for (
                        var n = h(e), i = n.getPropertyCSSValue(t), o = 0;
                        o < this.vendors.length;
                        o++
                      ) {
                        var s = this.vendors[o];
                        i = i || n.getPropertyCSSValue('-' + s + '-' + t);
                      }
                      return i;
                    }
                  },
                  {
                    key: 'animationName',
                    value: function(e) {
                      var t = void 0;
                      try {
                        t = this.vendorCSS(e, 'animation-name').cssText;
                      } catch (n) {
                        t = h(e).getPropertyValue('animation-name');
                      }
                      return 'none' === t ? '' : t;
                    }
                  },
                  {
                    key: 'cacheAnimationName',
                    value: function(e) {
                      return this.animationNameCache.set(e, this.animationName(e));
                    }
                  },
                  {
                    key: 'cachedAnimationName',
                    value: function(e) {
                      return this.animationNameCache.get(e);
                    }
                  },
                  {
                    key: 'scrollHandler',
                    value: function() {
                      this.scrolled = !0;
                    }
                  },
                  {
                    key: 'scrollCallback',
                    value: function() {
                      if (this.scrolled) {
                        this.scrolled = !1;
                        for (var e = [], t = 0; t < this.boxes.length; t++) {
                          var n = this.boxes[t];
                          if (n) {
                            if (this.isVisible(n)) {
                              this.show(n);
                              continue;
                            }
                            e.push(n);
                          }
                        }
                        (this.boxes = e),
                          this.boxes.length || this.config.live || this.stop();
                      }
                    }
                  },
                  {
                    key: 'offsetTop',
                    value: function(e) {
                      for (; void 0 === e.offsetTop; ) e = e.parentNode;
                      for (var t = e.offsetTop; e.offsetParent; )
                        t += (e = e.offsetParent).offsetTop;
                      return t;
                    }
                  },
                  {
                    key: 'isVisible',
                    value: function(e) {
                      var t = e.getAttribute('data-wow-offset') || this.config.offset,
                        n =
                          (this.config.scrollContainer &&
                            this.config.scrollContainer.scrollTop) ||
                          window.pageYOffset,
                        i =
                          n +
                          Math.min(
                            this.element.clientHeight,
                            'innerHeight' in window
                              ? window.innerHeight
                              : document.documentElement.clientHeight
                          ) -
                          t,
                        o = this.offsetTop(e),
                        s = o + e.clientHeight;
                      return o <= i && s >= n;
                    }
                  },
                  {
                    key: 'disabled',
                    value: function() {
                      return (
                        !this.config.mobile &&
                        ((e = navigator.userAgent),
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          e
                        ))
                      );
                      var e;
                    }
                  }
                ]),
                e
              );
            })();
          (t.default = d), (e.exports = t.default);
        });
      },
      {}
    ],
    L4bL: [
      function(require, module, exports) {
        'use strict';
        var e = require('../vendor/dane'),
          t = n(require('wow.js'));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        new t.default({ mobile: !1, live: !0, resetAnimation: !0 }).init();
        var r = document.querySelector('.hero'),
          o = r.offsetHeight / 2;
        function i(e, t, n) {
          var r = document.getElementById(e).innerHTML,
            o = document.getElementById(n);
          Mustache.parse(r), (o.innerHTML += Mustache.render(r, t));
        }
        (window.onscroll = function() {
          var e = window.pageYOffset;
          o < e
            ? document
                .querySelector('.navigation')
                .classList.remove('navigation--hidden')
            : document.querySelector('.navigation').classList.add('navigation--hidden');
        }),
          e.Groups.map(function(e) {
            return i('portfolio-section-template', e, 'portfolio-wrapper');
          }),
          e.Carts.map(function(e) {
            return 'other' === e.id
              ? i('portfolio-gallery-template', e, e.id)
              : i('portfolio-cart-template', e, e.id);
          });
        var a = function(e) {
            var t = document.getElementsByClassName('gallery__slide');
            e > t.length && (l = 1), e < 1 && (l = t.length);
            for (var n = 0; n < t.length; n++) t[n].style.display = 'none';
            t[l - 1].style.display = 'block';
          },
          l = 1;
        a(l);
        var u = document.querySelector('.prev'),
          c = document.querySelector('.next');
        u.addEventListener('click', function() {
          return a((l -= 1));
        }),
          c.addEventListener('click', function() {
            return a((l += 1));
          });
      },
      { '../vendor/dane': 'gEKi', 'wow.js': 'yCZL' }
    ]
  },
  {},
  ['L4bL'],
  null
);
//# sourceMappingURL=/script.4ba058a5.js.map
