import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "50vh",
  overflow: "hidden",
};

const YandexMap = ({ mark }) => {
  return (
    <YMaps>
      <Map style={mapStyle} defaultState={{ center: mark, zoom: 12 }}>
        <Placemark key={2} geometry={mark} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
