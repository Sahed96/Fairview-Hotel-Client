import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div>
      <h1 className="text-center text-4xl marcellus text-[#6b6a71] mt-8 mb-6">
        WELCOME TO HOTEL
      </h1>
      <div className="image bg-no-repeat rounded-xl bg-center bg-cover max-w-3xl lg:max-w-7xl min-h-[550px] bg-[url(https://i.ibb.co/yQFQDH6/istockphoto-1457724042-2048x2048-transformed.jpg)] ">
        <div className=" relative min-h-[550px] rounded-xl bg-black/40">
          <h1 className="text-7xl marcellus text-white pt-40 pl-20">
            The Best Hotel on the <br /> Beach Side
          </h1>
          <div className="pt-6 pr-20 text-end ">
            <h2 className="text-4xl text-white marcellus">
              Please Join With Us
            </h2>
            <Link to="/register">
              <button className="btn mt-5 mr-12 text-2xl justify-center mx-auto px-4 text-white marcellus  bg-[#e85f4c]">
                Register Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
