import React, { Component, useState, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Search from './Search'
import Locate from './Locate'
import mapStyles from './mapStyles'
import dogPark from '../assets/dog-park.svg'

const containerDimensions = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: 39.74846723935253,
  lng: -105.04736793135767
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const libraries = ['places']

const Map = () => {
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

  const onMapClick = useCallback((event) => setMarkers(current =>
    [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    }]
  ), [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  })

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCOwqWZQDbUMMCFOsyYUKtLmxll4AIM-6g'
      libraries={libraries}
    >
      <Search panTo={panTo} />
      <Locate panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerDimensions}
        center={center}
        zoom={10}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker =>
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: dogPark,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15)
            }}
            onClick={() => {
              setSelected(marker)
            }}
          />)}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null)
              }}
            >
              <p>hellur</p>
            </InfoWindow>
          ) : null}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
// export default React.memo(Map)
