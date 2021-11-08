import React, { Component, useState, useCallback, useRef, useContext } from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Search from './Search'
import Locate from './Locate'
import ParkMarkers from './ParkMarkers'
import PlaydateContext from '../PlaydateFormAndMap/PlaydateContextProvider'
import { containerDimensions, center, options, libraries } from './mapConfig'
import dogPark from '../assets/dog-park.svg'

const Map = ({ markers, setMarkers, selected, setSelected }) => {
  // const [markers, setMarkers] = useState([])
  // const [selected, setSelected] = useState(null)

  // const onMapClick = useCallback((event) => setMarkers(current =>
  //   [...current, {
  //     lat: event.latLng.lat(),
  //     lng: event.latLng.lng(),
  //     time: new Date()
  //   }]
  // ), [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = useCallback(({ lat, lng }, zoom) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(zoom)
  })

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCOwqWZQDbUMMCFOsyYUKtLmxll4AIM-6g'
      libraries={libraries}
    >
      <Search panTo={panTo} />
      <Locate panTo={panTo} center={center} setSelected={setSelected}/>
      <GoogleMap
        mapContainerStyle={containerDimensions}
        center={center}
        zoom={11}
        options={options}
        onLoad={onMapLoad}
      >
        <ParkMarkers panTo={panTo} setSelected={setSelected}/>
        {selected ? (
          <InfoWindow
            position={{ lat: selected.coords.lat, lng: selected.coords.lng }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
// export default React.memo(Map)
