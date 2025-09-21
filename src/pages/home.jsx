// import Card from "../components/Elements/Card/Card";
import Navbar from "../components/Elements/Navbar/Navbar";
import GenreMovieList from "../components/Elements/Movie/GenreMovieList";
import LayoutsHome from "../components/Layouts/LayoutsHome";
import Slider from "../components/Elements/Slider/Slider";

const HomePages = () => {
  return (
    <LayoutsHome>
      <Navbar />
      <Slider />
      {/* <Card /> */}
      <GenreMovieList />
    </LayoutsHome>
  );
};

export default HomePages;
