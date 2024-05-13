import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const markers = [
    { geocode: [36.147453, -115.15667], popUp: "Deluxe Suite" },
    { geocode: [43.082539, -79.083244], popUp: "Executive Room" },
    { geocode: [31.147253, -114.15967], popUp: "Family Suite" },
    { geocode: [36.147453, -115.15667], popUp: "Ocean View Room" },
    { geocode: [40.673069, -73.833046], popUp: "Penthouse Suite" },
    { geocode: [39.951817, -75.160339], popUp: "Standard Room" },
    { geocode: [33.759411, -84.387917], popUp: "Presidential Suite" },
    { geocode: [36.281445, -75.794662], popUp: "Garden View Room" },
    { geocode: [36.281445, -75.794662], popUp: "Family Connecting Rooms" },
    { geocode: [52.281445, -63.794462], popUp: "Junior Suite" },
    { geocode: [75.241445, -78.797662], popUp: "Mountain View Chalet" },
    { geocode: [12.281645, -63.794662], popUp: "Luxury Bungalow" },
    { geocode: [63.287445, -29.794612], popUp: "Lake View Room" },
    { geocode: [65.281445, -75.797862], popUp: "Studio Apartment" },
    { geocode: [34.281445, -79.794662], popUp: "City View Room" },
  ];
  return (
    <div>
      <h2 className="text-center mt-10 mb-10 marcellus  text-6xl">
        see the location of out hotel
      </h2>
      <MapContainer
        className="h-[500px]"
        center={[52.281445, -63.794462]}
        zoom={2}
        id="map"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.geocode}>
            <Popup> {marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
