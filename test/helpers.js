const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Arun Varghese',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Arun Varghese',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Arun Varghese',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Arun Varghese',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Arun Varghese',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
