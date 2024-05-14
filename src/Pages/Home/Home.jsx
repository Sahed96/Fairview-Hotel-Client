import ReviewCard from "../Review/ReviewCard";
import Banner from "./Banner";
import Featured from "./Featured/Featured";
import Map from "./Map";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Map />
      <NewsLetter />
      <Featured />
      <ReviewCard />
    </div>
  );
};

export default Home;
