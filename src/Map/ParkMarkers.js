import React, { Component, useState, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import parksData from '../parksData'
import dogPark from '../assets/dog-park.svg'

const ParkMarkers = ({ setSelected }) => {
  const dogParkMarkers = parksData.map(parkObj =>
    <Marker
      key={parkObj.id}
      position={{ lat: parkObj.coords.lat, lng: parkObj.coords.lng }}
      icon={{
        url: dogPark,
        scaledSize: new window.google.maps.Size(30, 30),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15)
      }}
      onClick={() => {
        setSelected(parkObj)
      }}
    />
  )

  return (
    <>
      {dogParkMarkers}
    </>
  )
}

export default ParkMarkers
