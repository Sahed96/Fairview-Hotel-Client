import ReactPlayer from "react-player";
const Banner = () => {
  return (
    <div className="container relative mx-auto items-center justify-center">
      <ReactPlayer
        url="https://vimeo.com/944561959"
        playing={true}
        muted={true}
        loop={true}
        height="750px"
        width="1280px"
      />
      <div className=" absolute mx-auto top-[400px] left-[150px] font-bold text-white text-6xl">
        <h3 className="text-5xl marcellus">EXPERIENCE OUR</h3>
        <h1 className="text-9xl mt-3 marcellus">FAIRVIEW HOTEL</h1>
      </div>
    </div>
  );
};

export default Banner;
