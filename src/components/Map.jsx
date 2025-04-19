import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#b280ff" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#292929" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#202020" }] }
];

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 40.7128, // Example: New York City
  lng: -74.0060
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC4YeTsSIsSM-heuQouUGGbYEYyLeDqRTw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
      </GoogleMap>
    </LoadScript>
  );
}