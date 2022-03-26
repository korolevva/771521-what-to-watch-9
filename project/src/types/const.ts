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

export enum HttpCode {
  BadRequest = 400,
  UnAuthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  User = 'USER',
  Film = 'FILM',
  Comments = 'COMMENTS',
  SendingComment = 'SENDING_COMMENT',
  PromoFilm = 'PROMO',
  Favorite = 'FAVORITE',
  Auth = 'AUTH',
  Similar = 'SIMILAR',
}
