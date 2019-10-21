// import image1 from '../images/min/1.jpg';

export const Groups = [
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

export const Carts = [
  {
    image: 'images/1.jpg',
    id: 'html',
    title: 'Beauty&Go',
    links: [
      {
        icon: 'link',
        link: 'http://beautyandgo.pl/'
      }
    ],
    description: 'Strona zrobiona dla koleżanki, która prowadzi studio kosmetyczne.',
    logo: ['images/html.gif', 'images/css.gif']
  },
  {
    image: 'images/2.jpg',
    id: 'html',
    title: 'Midowy Raj',
    links: [
      {
        icon: 'link',
        link: 'http://miodowyraj.info.pl/'
      }
    ],
    description: 'Strona dla znajomych pszczelarzy. Nauka Bootstrapa.',
    logo: ['images/html.gif', 'images/css.gif', 'images/bootstrap.gif']
  },
  {
    image: 'images/3.jpg',
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
    logo: ['images/html.gif', 'images/sass.gif', 'images/js.gif']
  },
  {
    image: 'images/4.jpg',
    id: 'html',
    title: 'AWAX PSD to HTML',
    links: [
      {
        icon: 'link',
        link: 'https://przemyslawjurkiewicz.github.io/awax/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/awax'
      }
    ],
    description: 'PSD Dto HTML - zabawa z Sass, podejście komponentowe.',
    logo: ['images/html.gif', 'images/sass.gif']
  },
  {
    image: 'images/5.jpg',
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
    logo: ['images/html.gif', 'images/sass.gif']
  },
  {
    image: 'images/7.jpg',
    id: 'html',
    title: 'Mache PSD to HTML',
    links: [
      {
        icon: 'link',
        link: 'https://przemyslawjurkiewicz.github.io/psd-to-html-1/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/psd-to-html-1'
      }
    ],
    description: 'Moje pierwsze PSD to HTML - nauka css, brak RWD :(',
    logo: ['images/html.gif', 'images/css.gif']
  },
  {
    image: 'images/8.jpg',
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
    logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
  },
  {
    image: 'images/9.jpg',
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
    logo: ['images/js.gif', 'images/gmap.gif', 'images/html.gif', 'images/css.gif']
  },
  {
    image: 'images/10.jpg',
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
    logo: ['images/js.gif', 'images/es6.gif', 'images/html.gif', 'images/css.gif']
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
    logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
  },
  {
    image: 'images/12.jpg',
    id: 'react',
    title: 'Jubiko Shop',
    links: [
      {
        icon: 'link',
        link: 'https://jubiko-shop.herokuapp.com/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/jubiko-shop'
      }
    ],
    description: 'Aplikacja sklepu internetowego. Praca zaliczeniowa kursu WebDev.',
    logo: [
      'images/mongo.gif',
      'images/react.gif',
      'images/redux.gif',
      'images/node.gif'
    ]
  },
  {
    image: 'images/13.jpg',
    id: 'react',
    title: 'User-Auth',
    links: [
      {
        icon: 'link',
        link: 'https://user--auth.herokuapp.com/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/user-auth'
      }
    ],
    description:
      'Aplikacja rejestracji i logowania użytkownika. Użyłem passport-jwt i bcrypt.js.',
    logo: [
      'images/mongo.gif',
      'images/react.gif',
      'images/redux.gif',
      'images/node.gif'
    ]
  },
  {
    image: 'images/14.jpg',
    id: 'react',
    title: 'Sudoku',
    links: [
      {
        icon: 'link',
        link: 'https://przemyslawjurkiewicz.github.io/sudoku/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/sudoku'
      }
    ],
    description:
      'Gra sudoku, wykorzystałem bibliotekę sudoku-umd. Projekt zaliczeniowy kursu Reacta.',
    logo: ['images/react.gif', 'images/css.gif']
  },
  {
    image: 'images/15.jpg',
    id: 'react',
    title: 'Country-App',
    links: [
      {
        icon: 'link',
        link: 'https://country--app.herokuapp.com/#/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/country-app'
      }
    ],
    description: 'Aplikacja Create React App. Nauka Reduxa i ReactRoutera. ',
    logo: ['images/react.gif', 'images/redux.gif', 'images/node.gif', 'images/json.png']
  },
  {
    image: 'images/16.jpg',
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
    description: 'Aplikacja dodawania komentarzy i ich oceniania. Nauka Reduxa.',
    logo: ['images/react.gif', 'images/redux.gif']
  },
  {
    image: 'images/17.jpg',
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
    description: 'Wyszukiwarka użytkowników GitHuba. Api GitHuba i podstawy Reacta.',
    logo: ['images/react.gif', 'images/json.png']
  },
  {
    image: 'images/18.jpg',
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
    logo: ['images/react.gif', 'images/es6.gif']
  },
  {
    image: 'images/19.jpg',
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
    logo: ['images/react.gif']
  },
  {
    image: 'images/20.jpg',
    id: 'html',
    title: 'Portfolio',
    links: [
      {
        icon: 'link',
        link: 'https://przemyslawjurkiewicz.github.io/portfolio/'
      },
      {
        icon: 'github',
        link: 'https://github.com/przemyslawjurkiewicz/portfolio'
      }
    ],
    description: 'Ta strona :)',
    logo: ['images/js.gif', 'images/html.gif', 'images/sass.gif']
  },
  {
    id: 'other',
    images: [
      {
        image: 'images/r1.jpg',
        description:
          'Program pozwala na współtworzenie dokumenu przez wielu użytkowniów jednocześnie. Użytkownik ma przypisane funkcje może dodawać punkty, zatwierdzać je lub edytować dokument. Program pobiera login użytkownia z systemu Windows i przypisuje mu uprawnienia.'
      },
      {
        image: 'images/r3.jpg',
        description:
          'Użytkownicy mogą dodawać punkty do dokumentu, lub edytować dodane przez siebie punkty o ile nie zostały już zatwierdzone przez przełożonego. Mają też do dyspozycji ogólne i dodane przez siebie szablony punktów'
      },
      {
        image: 'images/r2.jpg',
        description:
          'Redaktor pobiera zatwierdzone wcześniej przez przełożonego punkty i przygotowuje do wydruku cały dokument.'
      },
      {
        image: 'images/r4.jpg',
        description:
          'Dokument rozkazu układa się automatyczne zgodzie z "Regulaminem Ogólnym Sił Zbrojnych Rzeczypospolitej Polskiej 2014" i "Instrukcją o zasadach pracy biurowej w Resorcie Obrony Narodowej 2013".'
      },
      {
        image: 'images/r5.jpg',
        description:
          'Istnieje możliwość wydrukowania zamówinych wcześniej przez użytkownika zyciągów z "Rozkazu dziennego".'
      },
      {
        image: 'images/r6.jpg',
        description:
          'Administrator ma dostęp do ustawień programu, przypisania ról użytkowników i zmian w szablonach wydrów.'
      }
    ]
  }
];
