/* eslint-disable react/prop-types */

import useAuth from "../../AuthProvider/useAuth";
import Swal from "sweetalert2";

const Booking = ({ bookData }) => {
  const { title, price, _id, img } = bookData;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const date1 = form.date1.value;
    const date2 = form.date2.value;
    const order = {
      customerName: name,
      email,
      img,
      book_title: title,
      price: price,
      dateFrom: date1,
      dateTo: date2,
      bookingId: _id,
    };
    console.log(order);

    fetch("http://localhost:5000/bookedRoom", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `Your Booking is successful. !please give a review on our booking service here ${"/myBooking"} `,
            icon: "success",
          });
        }
      });
  };

  const { user } = useAuth();
  return (
    <div>
      <div className="bg-[#e85f4c] h-20 mt-4 p-4">
        <h2 className="marcellus text-white text-[35px] ml-8">Book Room</h2>
      </div>
      <form onSubmit={handleBooking}>
        <div className="grid bg-[#faf5ef] p-2 gap-2 grid-cols-3">
          <label className="form-control col-span-1 pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-[#6b6a71] urbanist-pop text-base">
                Name
              </span>
            </div>
            <input
              type="name"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control col-span-2 pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-base text-[#6b6a71] urbanist-pop">
                Email
              </span>
            </div>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="bg-[#faf5ef] h-[500px]">
          <label className="form-control pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-base text-[#6b6a71] urbanist-pop">
                From
              </span>
            </div>
            <input
              type="date"
              required={true}
              name="date1"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-[#6b6a71] urbanist-pop text-base">
                To
              </span>
            </div>
            <input
              type="date"
              required={true}
              name="date2"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className=" mt-16">
            <label className="form-control pt-5 justify-center mx-auto max-w-[100px]">
              <div className="label">
                <span className="label-text  mx-auto text-[1.3rem] text-[#6b6a71] urbanist-pop text-base">
                  Total
                </span>
              </div>
              <input
                type="price"
                name="price"
                defaultValue={"$" + price}
                placeholder=""
                className="input text-[26px] outline-none border-none border-0 text-center text-[#e85f4c] w-32"
              />
            </label>
            <input
              type="submit"
              value="Book Now"
              className="bg-[#e85f4c] btn px-20 py-2 mt-4 ml-20 marcellus justify-center mx-auto text-center w-auto text-white text-[24px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
