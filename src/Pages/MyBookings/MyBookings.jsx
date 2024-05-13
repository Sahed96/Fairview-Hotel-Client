import { useEffect, useState } from "react";
import useAuth from "../../AuthProvider/useAuth";
import axios from "axios";
import { GiCancel } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { BiSolidCommentAdd } from "react-icons/bi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const { user } = useAuth();
  const url = `http://localhost:5000/bookedRoom?email=${user.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBookings(res.data);
    });
  }, []);

  const handleDelete = (id, dateFrom) => {
    const newDate = new Date();
    console.log(dateFrom);
    console.log(newDate);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookedRoom/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remainData = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remainData);
            }
          });
      }
    });
  };

  return (
    <div>
      {/* <h1 className="text-5xl">my bookings here {booking.length}</h1> */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="urbanist-pop text-[16px] font-medium">
                <th>Room Title</th>
                <th>Total Amount</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Change Arr/Dep</th>
                <th>Review</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map((book, idx) => {
                const { _id, img, book_title, price, dateFrom, dateTo } = book;
                return (
                  <tr key={idx}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className=" rounded-lg w-[250px] h-[180px]">
                            <img
                              src={img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold  text-lg">{book_title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold text-lg">{price}</td>
                    <td className="font-semibold text-lg">{dateFrom}</td>
                    <td className="font-semibold text-lg">{dateTo}</td>
                    <th className="items-center gap-4">
                      <Link to={`/updateDate/${_id}`}>
                        <button className="text-[27px] text-[#6b6a71] ml-4">
                          <FiEdit />
                        </button>
                      </Link>
                    </th>
                    <th className="items-center gap-4">
                      <Link to={`/reviews/${_id}`}>
                        <button className="text-[30px] text-[#6b6a71] ml-4">
                          <BiSolidCommentAdd />
                        </button>
                      </Link>
                    </th>
                    <th className="items-center gap-4">
                      <button
                        onClick={() => handleDelete(_id, dateFrom)}
                        className=" text-[30px] text-red-600"
                      >
                        <GiCancel />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
