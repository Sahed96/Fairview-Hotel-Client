import { useEffect, useState } from "react";
import ReviewCard from "../Review/ReviewCard";
import Banner from "./Banner";
import Featured from "./Featured/Featured";
import Map from "./Map";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, []);
  return (
    <div>
      <Banner />
      <Map />
      <NewsLetter />
      <Featured />
      <ReviewCard />
      <div>
        <div className="flex items-center justify-center">
          <div
            onClick={() => setOpenModal(false)}
            className={`fixed flex justify-center items-center z-[100] ${
              openModal ? "visible opacity-1" : "invisible opacity-0"
            } inset-0 w-full h-full bg-black/70 duration-100`}
          >
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute drop-shadow-2xl rounded-lg ${
                openModal
                  ? "opacity-1 duration-300 translate-y-0"
                  : "-translate-y-20 opacity-0 duration-150"
              } group overflow-hidden`}
            >
              {/* Favorite button */}
              <svg
                className="w-8 mx-auto rounded-lg absolute left-2 top-2 drop-shadow-[0_0_10px_black] cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              {/* close button */}
              <svg
                onClick={() => setOpenModal(false)}
                className="w-10 mx-auto hover:opacity-60 absolute right-0 drop-shadow-[0_0_10px_black] cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              {/* image */}
              <img
                src="https://i.ibb.co/Svz7dVt/canva-brown-affordable-hotel-promo-facebook-post-u-Asa-QRA0bc0.jpg"
                className="min-w-[300px] md:min-w-[500px] min-h-[200px] md:min-h-[350px] bg-black/20"
                alt="modal navigate ui"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
