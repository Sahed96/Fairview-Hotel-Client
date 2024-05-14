import axios from "axios";
import { useEffect, useState } from "react";
import ReviewStar from "./ReviewStar";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  const url = "https://fairview-hotel-server.vercel.app/allReview";
  useEffect(() => {
    axios.get(url).then((res) => {
      setReviews(res.data);
    });
  }, [setReviews]);
  const review6 = reviews.slice(0, 6);
  return (
    <div>
      <div>
        <div className="text-center">
          <h3 className="Urbanist-pop text-2xl mt-6">CUSTOMERS REVIEWS</h3>
          <h1 className="text-6xl marcellus mb-10 mt-3">
            What They’re Saying?
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {review6.map((review, ixd) => {
          const { name, date, comment, rating } = review;

          return (
            <section key={ixd} className="my-2 text-gray-800">
              <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                    <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                      <div className="mb-5">
                        <ReviewStar review={rating} />
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-600"
                        data-darkreader-inline-fill=""
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {comment}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-orange-600"
                        data-darkreader-inline-fill=""
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-orange-600 text-gray-50">
                    <img
                      src="https://i.ibb.co/myWZxcH/image-03.png"
                      alt=""
                      className="w-28 h-28 -mt-20 bg-center bg-cover rounded-full"
                    />

                    <p className="text-xl font-semibold marcellus leading-tight">
                      {name}
                    </p>
                    <p className="mt-2 text-sm ">{date}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
