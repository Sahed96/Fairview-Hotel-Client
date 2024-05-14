/* eslint-disable react/prop-types */
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ReviewStar = ({ review }) => {
  const ratingStar = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return (
      <a key={index}>
        {review >= index + 1 ? (
          <FaStar className="icon " />
        ) : review >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </a>
    );
  });

  return (
    <div>
      <div className="icon-style justify-center text-[#e85f4c] text-2xl flex items-center">
        {ratingStar} <span className="ml-2 text-black">{review}</span>
      </div>
    </div>
  );
};

export default ReviewStar;
