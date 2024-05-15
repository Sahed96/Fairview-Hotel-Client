/* eslint-disable react/prop-types */
import ReviewStar from "../../Pages/Review/ReviewStar";

const DetailsReview = ({ item }) => {
  return (
    <div>
      <div className="bg-base-200 p-6 rounded-2xl w-full h-[200px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">{item.name}</h2>
          <p>
            <ReviewStar review={item.rating} />
          </p>
        </div>
        <p className="text-xl mt-5 font-semibold">
          Comment:{" "}
          <span className="text-[22px] font-normal">{item.comment}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailsReview;
