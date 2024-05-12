/* eslint-disable react/prop-types */
import useAuth from "../../AuthProvider/useAuth";

const Booking = ({ bookData }) => {
  const { title, price, _id } = bookData;

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
      book_title: title,
      price: price,
      dateFrom: date1,
      dateTo: date2,
      bookingId: _id,
    };
    console.log(order);
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
              value={user?.displayName}
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
              value={user?.email}
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
              name="date2"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className=" mt-16">
            <label className="form-control pt-5 justify-center mx-auto max-w-xs">
              <div className="label">
                <span className="label-text text-[#6b6a71] urbanist-pop text-base">
                  Price
                </span>
              </div>
              <input
                type="price"
                name="price"
                value={price}
                placeholder=""
                className="input w-24"
              />
            </label>
            <input
              type="submit"
              value="Book Now"
              className="bg-[#e85f4c] btn mt-4 ml-24 marcellus justify-center mx-auto text-center w-auto px-16  text-white text-[24px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
