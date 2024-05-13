import Swal from "sweetalert2";
import useAuth from "../../AuthProvider/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const ratings = useLoaderData();
  //   console.log(ratings);
  const { _id } = ratings;
  console.log(_id);
  const { user } = useAuth();
  const handleAddComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const comment = form.comment.value;
    const rating = form.rating.value;
    const ratingId = _id;

    const newReview = { rating, name, ratingId, comment, date: new Date() };
    console.log(newReview);

    fetch(`http://localhost:5000/review/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId)
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          }).then(navigate(`/rooms`));
      });
  };

  return (
    <section className="p-6 w-[600px] mx-auto dark:text-gray-900">
      <form
        onSubmit={handleAddComment}
        className="container flex flex-col mx-auto "
      >
        <div className="space-y-2 bg-[#e85f4c] h-20 col-span-1 lg:col-span-2">
          <p className="font-bold text-center pt-5 marcellus text-white text-3xl">
            Add a Comment
          </p>
        </div>
        <fieldset className="grid grid-cols-3 gap-6 px-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">
              Rate Our Service
            </label>
            <select
              className="w-[90px] border-2 mt-4 p-1 rounded-md"
              name="rating"
              id="subcategory"
            >
              <option value="">Ratings</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-5 mb-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                name="name"
                defaultValue={user?.displayName}
                type="text"
                placeholder="Username"
                className="w-full p-2 rounded-md border-2  "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                defaultValue={user?.email}
                type="text"
                placeholder="Email"
                className="w-full p-2 rounded-md  border-2  "
              />
            </div>
            <div className="col-span-full">
              <textarea
                id="comment"
                name="comment"
                placeholder="Write your Comment"
                className="w-full h-[100px] rounded-md  border-2  "
              ></textarea>
            </div>
            <div className="grid grid-cols-6 col-span-6">
              <input
                type="submit"
                value="Post Comment"
                className="btn text-white text-[20px] marcellus py-3 col-span-full bg-[#e85f4c]"
              ></input>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Review;
