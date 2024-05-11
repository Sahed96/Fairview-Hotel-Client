import ReactPlayer from "react-player";
const Banner = () => {
  return (
    <div className="container relative mx-auto items-center justify-center">
      <ReactPlayer
        url="https://vimeo.com/944561959"
        playing={false}
        muted={true}
        loop={true}
        height="750px"
        width="1280px"
      />
      <div className=" absolute mx-auto top-[300px] left-[350px] font-bold shadow-lg text-white text-6xl">
        welcome to FairView
      </div>
    </div>
  );
};

export default Banner;
