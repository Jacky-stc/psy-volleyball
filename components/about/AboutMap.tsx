"use client";
import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const AboutMap = ({ apiKey }: { apiKey: string }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  const center = useMemo(() => ({ lat: 24.987801, lng: 121.577428 }), []);
  if (!isLoaded) return <div>loading</div>;
  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
      <Marker position={center}></Marker>
    </GoogleMap>
  );
};

export default AboutMap;
