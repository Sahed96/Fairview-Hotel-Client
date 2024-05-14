import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Star from "../../Components/Star";

const Rooms = () => {
  // const { title } = rooms;
  const [rooms, setRooms] = useState([]);
  const [sort, setSort] = useState("");
  // const url1 = `https://fairview-hotel-server.vercel.app/allRooms`;
  const url = `https://fairview-hotel-server.vercel.app/allRooms?&sort=${sort}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setRooms(res.data);
    });
  }, [rooms]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setSort(res.data);
    });
  }, [setSort]);
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-6xl mt-5 marcellus">Explore The Worlds</h1>
        <h3 className="text-2xl mt-5 marcellus">
          People Don’t Take, Trips Take People
        </h3>
      </div>
      <div className="container grid lg:grid-cols-3 grid-cols-1">
        <div className="lg:col-span-3 col-span-1 mb-6">
          <div className="px-5 flex justify-between">
            <p>{rooms.length} Rooms</p>
            <div className="border-2">
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                value={sort}
                className="px-4 py-3"
                name="sort"
                id="sort"
              >
                <option value="">Price</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5 ml-5">
            {rooms.map((room, idx) => {
              const {
                _id,
                title,
                img,
                availability,
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
                      <img className="h-[272px] w-full" src={img} alt="img" />
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
                      <div className="flex items-center justify-between">
                        <div>
                          <Star stars={rating} />
                        </div>
                        <div>
                          {availability === "available" ? (
                            <p className="urbanist-pop bg-cyan-500 p-2 text-white text-[20px]">
                              {availability}
                            </p>
                          ) : (
                            <p className="urbanist-pop bg-red-500 p-2 text-white text-[20px]">
                              {availability}
                            </p>
                          )}
                        </div>
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

export default Rooms;
