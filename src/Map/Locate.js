import React from 'react'
import target from '../assets/target.png'
import './Map.css'

const Locate = ({ panTo, center, setSelected }) => {
  const showMyLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }, 14)
    }, () => console.log('failed to locate user'))
    setSelected(null)
  }

  return (
    <article className='locate-container'>
      <button
        className='locate__show-my-location-btn'
        onClick={showMyLocation}
      >
        <img src={target} alt='show my location' />
      </button>
      <button
        className='locate__reset-map-btn'
        onClick={() => {
          panTo({ lat: center.lat, lng: center.lng }, 11)
          setSelected(null)
        }}
      >reset map</button>
    </article>
  )
}

export default Locate
