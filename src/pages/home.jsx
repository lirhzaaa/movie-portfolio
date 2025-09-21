import Card from "../components/Elements/Card/Card";
import Header from "../components/Elements/Header/Header";
import GenreMovieList from "../components/Elements/Movie/GenreMovieList";
import LayoutsHome from "../components/Layouts/LayoutsHome";
import Slider from "../components/Elements/Slider/Slider";

const HomePages = () => {
  return (
    <LayoutsHome>
      <Header />
      <Slider />
      <Card />
      <GenreMovieList />
    </LayoutsHome>
  );
};

export default HomePages;
