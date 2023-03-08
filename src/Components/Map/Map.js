import {
  MapContainer,
  Marker,
  Tooltip,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";

import { useData, usePosition } from "../../store";
import * as L from "leaflet";

import dot from "./circle.svg";
import plates from "./plate";

const corner1 = L.latLng(-90, -200);
const corner2 = L.latLng(90, 200);
const bounds = L.latLngBounds(corner1, corner2);

export default function Map() {
  const data = useData((state) => state.data);
  const position = usePosition((state) => state.position);

  return (
    <MapContainer
      doubleClickZoom={true}
      id="mapId"
      zoom={1}
      center={[0, 0]}
      attributionControl={false}
      maxBoundsViscosity={1.0}
      maxBounds={bounds}
      minZoom={1}
    >
      {position && <ChangeView center={position} />}
      <GeoJSON
        data={plates}
        pathOptions={{
          color: "rgba(0,255,255,0.2)",
          weight: 1,
        }}
      />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        noWrap={true}
      />
      {data.features.map((el) => (
        <Marker
          key={el.id}
          position={el.geometry.coordinates.slice(0, 2).reverse()}
          icon={getMarkerIcon()}
        >
          <Tooltip>
            <p>{el.properties.place}</p>
            <p>
              Mag: <span className="float-right">{el.properties.mag}</span>
            </p>
            <p>
              Depth:{" "}
              <span className="float-right">{el.geometry.coordinates[2]}</span>
            </p>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

const getMarkerIcon = () => {
  return new L.Icon({
    iconUrl: dot,
    iconAnchor: [0, 0],
    className: "dot",
    iconSize: [5, 5],
  });
};
const ChangeView = ({ center }) => {
  const map = useMap();
  map.flyTo(center, 10, {
    animate: true,
    duration: 1.5,
  });

  return null;
};
