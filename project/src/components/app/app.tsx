import MainPage from '../mainPage/mainPage';

type Props = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
};

function App({ filmCardTitle, filmCardGenre, filmCardYear }: Props) {
  return (
    <MainPage
      filmCardTitle={filmCardTitle}
      filmCardGenre={filmCardGenre}
      filmCardYear={filmCardYear}
    />
  );
}

export default App;
