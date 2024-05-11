import useAuth from "../../AuthProvider/useAuth";

const Booking = () => {
  const { user } = useAuth();
  return (
    <form>
      <div>
        <div className="bg-[#e85f4c] h-20 mt-4 p-4">
          <h2 className="marcellus text-white text-[35px] ml-8">Book Room</h2>
        </div>
        <div className="grid bg-[#faf5ef] p-2 gap-2 grid-cols-3">
          <label className="form-control col-span-1 pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">From</span>
            </div>
            <input
              type="date"
              name="date"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control pt-5 justify-center mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text">To</span>
            </div>
            <input
              type="date"
              name="date"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <input
            type="submit"
            value="Book Now"
            className="bg-[#e85f4c] mt-16 ml-24 marcellus justify-center mx-auto text-center w-auto px-16 py-5 text-white text-[24px]"
          />
        </div>
      </div>
    </form>
  );
};

export default Booking;
