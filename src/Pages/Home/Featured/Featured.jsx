import { Link } from "react-router-dom";
import Star from "../../../Components/Star";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const url = "http://localhost:5000/specialRoom";
  useEffect(() => {
    axios.get(url).then((res) => {
      setFeaturedRooms(res.data);
    });
  }, [setFeaturedRooms]);
  return (
    <div>
      <div className="text-center mt-8">
        <h3 className="text-2xl font-normal">FEATURED ROOMS</h3>
        <h1 className="text-6xl marcellus mt-4 mb-6">Discover Our Rooms</h1>
      </div>
      <div className="container grid lg:grid-cols-4 grid-cols-1">
        <div className="lg:col-span-4 col-span-1 mb-6">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5 ml-5">
            {featuredRooms.map((room, idx) => {
              const {
                _id,
                title,
                img,
                rating,
                status,
                offer,
                price,
                area,
                members,
              } = room;
              return (
                <Link to={`/roomDetails/${_id}`} key={idx}>
                  <div className=" bg-base-100 shadow-xl">
                    <figure className="relative">
                      <img className="h-[250px] w-full" src={img} alt="img" />
                      {status ? (
                        <p className="absolute top-3 left-3 px-2 py-1 bg-[#3a3768] text-white">
                          {status}
                        </p>
                      ) : (
                        <p className="absolute top-3 left-3 px-2 py-1 text-white">
                          {status}
                        </p>
                      )}
                      {offer ? (
                        <p className="absolute top-3 right-3 px-2 py-1 bg-[#e85f4c] text-white">
                          {offer}
                        </p>
                      ) : (
                        <p className="absolute top-3 right-3 px-2 py-1 text-white">
                          {offer}
                        </p>
                      )}
                    </figure>
                    <div className="card-body">
                      <div>
                        <Star stars={rating} />
                      </div>
                      <h2 className="card-title mt-3 text-[26px] marcellus ">
                        {title}
                      </h2>
                      <p className="text-[26px] urbanist-pop font-semibold text-[#e85f4c]">
                        ${price}{" "}
                        <a className="text-[#6b6a71] text-[16px] font-medium">
                          / night
                        </a>
                      </p>
                      <div className="card-actions p-6 flex justify-between bg-[#faf5ef]">
                        <p>
                          <a className="mr-2 urbanist-pop text-[#6b6a71] text-[16px]">
                            Area:
                          </a>
                          {area} Sqm
                        </p>
                        <p className="ml-[100px]">
                          <a className="mr-2 text-[#6b6a71] text-[16px]">
                            person:
                          </a>
                          {members}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
