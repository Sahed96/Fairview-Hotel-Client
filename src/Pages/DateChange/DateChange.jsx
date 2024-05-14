import Swal from "sweetalert2";
import useAuth from "../../AuthProvider/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const DateChange = () => {
  const navigate = useNavigate();
  const dateData = useLoaderData();

  const { _id, dateFrom, dateTo } = dateData;
  //   console.log(_id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const date1 = form.date1.value;
    const date2 = form.date2.value;
    const order = {
      dateFrom: date1,
      dateTo: date2,
    };
    // console.log(order);

    fetch(`https://fairview-hotel-server.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: `Update Date successful`,
            icon: "success",
          }).then(navigate("/myBookings"));
        }
      });
  };

  const { user } = useAuth();
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="bg-[#e85f4c] text-center mx-auto w-[600px] h-20 mt-4 p-4">
          <h2 className="marcellus text-white text-[35px] ml-8">Change Date</h2>
        </div>
        <div className="grid mx-auto w-[600px] bg-[#faf5ef] p-2 gap-2 grid-cols-3">
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
              defaultValue={dateFrom}
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
              defaultValue={dateTo}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className=" mx-auto w-full text-center mb-10 justify-center items-center mt">
          <input
            type="submit"
            value="Update"
            className="bg-[#e85f4c] btn px-20 py-2 mt-4 ml-20 marcellus justify-center mx-auto text-center w-auto text-white text-[24px]"
          />
        </div>
      </form>
    </div>
  );
};

export default DateChange;
