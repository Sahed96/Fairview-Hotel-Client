import { BiArea } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import Booking from "../../Components/Booking/Booking";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsReview from "../../Components/DetailsReview/DetailsReview";

const RoomDetails = () => {
  const [reviews, setReview] = useState([]);
  // console.log(reviews);
  const rooms = useLoaderData();
  const { title, img, price, _id, members, area, rating, description } = rooms;

  useEffect(() => {
    axios
      .get(`https://fairview-hotel-server.vercel.app/detailsReview/${_id}`)
      .then((res) => {
        setReview(res.data);
      });
  }, [_id]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 ">
          <div>
            <img className="w-full h-[450px] p-4" src={img} alt="" />
          </div>
          <div className="flex p-5 justify-between">
            <div>
              <p className=" text-[40px] marcellus ">{title}</p>
              <p className="text-[32px] urbanist-pop font-semibold text-[#e85f4c]">
                <span className="text-[#6b6a71] text-[20px] font-medium">
                  From
                </span>{" "}
                ${price}{" "}
                <span className="text-[#6b6a71] text-[20px] font-medium">
                  / night
                </span>
              </p>
            </div>
            <div className="flex gap-8 items-center mr-8">
              <div className="flex items-center gap-2">
                <p className="bg-[#faf5ef] rounded-full px-4 py-4 text-3xl">
                  <IoIosPeople />
                </p>
                <p className="text-[18px] urbanist-pop text-black">
                  {members} People{" "}
                  <p className="text-[16px] urbanist-pop text-[#6b6a71]">
                    Guest
                  </p>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="bg-[#faf5ef] rounded-full px-4 py-4 text-3xl">
                    <BiArea />
                  </p>
                  <p className="text-[18px] urbanist-pop text-black">
                    {area} Sqm{" "}
                    <p className="urbanist-pop text-[#6b6a71]">Size</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mb-5 border-dotted border-t-4 ml-5 mr-5" />
          <div className="ml-5">
            <p className="text-[#6b6a71] urbanist-pop text-[20px] font-medium">
              Rating: <span className="text-black">{rating}</span>
            </p>
          </div>
          <hr className="mb-5 mt-5 border-dotted border-t-4 ml-5 mr-5" />
          <div className="ml-5 mr-5">
            <h2 className="text-[34px] marcellus">Overview</h2>
            <p className="urbanist-pop text-[#6b6a71] text-[22px]">
              {description}
            </p>
          </div>
          <div></div>
        </div>
        <div className="col-span-1">
          <Booking bookData={rooms} />
        </div>
        <hr className="mb-5 col-span-3 mt-5 border-dotted border-t-4 ml-5 mr-5" />
        <div className="col-span-3 grid grid-cols-3 gap-5 mb-10">
          {reviews.length === 0 ? (
            <div className="flex gap-4 items-center">
              {" "}
              <p>Please Add a Feedback to improve ourself</p>{" "}
              <Link className="btn bg-orange-500 px-3" to={`/reviews/${_id}`}>
                Add
              </Link>{" "}
            </div>
          ) : (
            reviews.map((item, idx) => (
              <DetailsReview key={idx} item={item}></DetailsReview>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
