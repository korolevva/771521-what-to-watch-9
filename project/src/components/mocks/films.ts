import { Film } from '../../types/film';

const films: Film[] = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    rating: 240,
    scoresCount: 8.9,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'In an effort to thwart Grindelwald&apos;s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he&apos;s unaware of the dangers that lie ahead.',
    rating: 252,
    scoresCount: 6.5,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Katherine Waterston'],
    runTime: 99,
    genre: 'Fantastic',
    released: 2018,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid ',
    rating: 508,
    scoresCount: 7.9,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 99,
    genre: 'Drama',
    released: 2018,
    isFavorite: true,
  },
  {
    id: 4,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 106,
    scoresCount: 6.6,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Jack Madigan', 'Frank Madigan'],
    runTime: 99,
    genre: 'History',
    released: 2015,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'A biopic depicting the early years of legendary director and aviator Howard Hughes&apos; career from the late 1920s to the mid 1940s',
    rating: 353,
    scoresCount: 7.5,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale',
      'Alec Baldwin',
    ],
    runTime: 99,
    genre: 'Biography',
    released: 2004,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'Kevin&apos;s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    rating: 893,
    scoresCount: 7.5,
    director: 'Lynne Ramsay',
    starring: ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller'],
    runTime: 99,
    genre: 'Thriller',
    released: 2011,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'A look into the daily (or rather, nightly) lives of three vampires, who&apos;ve lived together for over 100 years, on Staten Island.',
    rating: 353,
    scoresCount: 8.6,
    director: 'Jemaine Clement',
    starring: ['Kayvan Novak', 'Natasia Demetriou', 'Matt Berry'],
    runTime: 99,
    genre: 'Horror',
    released: 2019,
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 768,
    scoresCount: 8.0,
    director: 'Alejandro G. Iñárritu',
    starring: ['Leonardo DiCaprio', 'Will Poulter', 'Forrest Goodluck'],
    runTime: 99,
    genre: 'Western',
    released: 2015,
    isFavorite: true,
  },
];

export { films };
