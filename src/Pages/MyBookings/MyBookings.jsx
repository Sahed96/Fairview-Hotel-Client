import { useEffect, useState } from "react";
import useAuth from "../../AuthProvider/useAuth";
import axios from "axios";

const MyBookings = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useAuth();
  const url = `http://localhost:5000/bookedRoom?email=${user.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBooking(res.data);
    });
  }, []);
  return (
    <div>
      <h1 className="text-5xl">my bookings here {booking.length}</h1>
    </div>
  );
};

export default MyBookings;
