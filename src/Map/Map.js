import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const containerDimensions = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: 39.74846723935253,
  lng: -105.04736793135767
}

const Map = () => {

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCOwqWZQDbUMMCFOsyYUKtLmxll4AIM-6g'
    >
      <GoogleMap
        mapContainerStyle={containerDimensions}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
