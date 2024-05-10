import axios from "axios";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [room, setRoom] = useState([]);
  const url = "http://localhost:5000/rooms";
  useEffect(() => {
    axios.get(url).then((res) => {
      setRoom(res.data);
    });
  }, [room]);
  return (
    <div>
      <h1>{room.length}</h1>
    </div>
  );
};

export default Rooms;
