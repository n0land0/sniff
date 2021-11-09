import React, { useCallback, useRef, useContext } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Search from './Search'
import Locate from './Locate'
import ParkMarkers from './ParkMarkers'
import {PlaydateContext} from '../PlaydateContextProvider'
import { containerDimensions, center, options, libraries } from './mapConfig'

const Map = () => {
  const { selected, setSelected } = useContext(PlaydateContext)

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
      <article className='search-locate-container'>
        <Search panTo={panTo} />
        <Locate panTo={panTo} center={center}/>
      </article>
      <GoogleMap
        mapContainerStyle={containerDimensions}
        center={center}
        zoom={12}
        options={options}
        onLoad={onMapLoad}
      >
        <ParkMarkers panTo={panTo}/>
        {selected ? (
          <InfoWindow
            className='info-window'
            position={{ lat: selected.coords.lat, lng: selected.coords.lng }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <p className='info-window__park-name-display'>{selected.name}</p>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
