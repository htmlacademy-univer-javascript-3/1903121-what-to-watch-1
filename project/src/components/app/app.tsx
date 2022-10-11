import MainScreen from "../../pages/main-screen/main-screen";

const filmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (
    <div>
      <MainScreen
        filmTitle = {filmData.FILM_TITLE}
        filmGenre = {filmData.FILM_GENRE}
        filmYear = {filmData.FILM_YEAR}
      />
    </div>
  );
}

export default App;
