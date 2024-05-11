import { Link } from "react-router-dom";
import logo from "../../public/nav.png";
import useAuth from "../AuthProvider/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="bookings">My Bookings</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link to="/">
          <img className=" w-64 rounded-xl" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" dropdown dropdown-bottom dropdown-end dropdown-hover flex ">
            <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
              <div className=" w-10 rounded-full">
                <img src={user?.photoURL || ""} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm items-center dropdown-content z-[1] bg-base-100 rounded-box shadow w-44"
            >
              <li>
                <a className="text-base font-semibold hover:text-rose-600">
                  {user.displayName || "No User"}
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={logout}
                  className=" text-base font-semibold hover:bg-rose-500 hover:text-white hover:font-bold"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn text-base rounded-full font-semibold bg-rose-400 hover:bg-rose-500 hover:text-white hover:font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
