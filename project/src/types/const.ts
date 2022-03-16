export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  Play = '/player',
  Review = '/review',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum TabNames {
  Overview = '/overview',
  Details = '/details',
  Reviews = '/reviews',
}

export enum Genres {
  AllGenres = 'All genres',
  Drama = 'Drama',
  Fantastic = 'Fantastic',
  History = 'History',
  Biography = 'Biography',
  Thriller = 'Thriller',
  Horror = 'Horror',
  Western = 'Western',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  PromoFilm = '/promo',
  Favorite = '/favorite',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  films = 'FILMS',
  user = 'USER',
  film = 'FILM',
  comments = 'COMMENTS',
  sendingComment = 'SENDING_COMMENT',
  promoFilm = 'PROMO',
  favorite = 'FAVORITE',
}
