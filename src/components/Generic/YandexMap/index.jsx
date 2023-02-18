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

const YandexMap = ({ center }) => {
  return (
    <YMaps>
      <Map
        style={mapStyle}
        defaultState={{ center: center || [42.461891, 59.616631], zoom: 12 }}
      >
        <Placemark key={2} geometry={[42.461891, 59.616631]} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
