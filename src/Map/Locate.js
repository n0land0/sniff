import React from 'react'
import target from '../assets/target.png'

const Locate = ({ panTo, center }) => {
  return (
    <>
    <button onClick={() => {
      navigator.geolocation.getCurrentPosition(position => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }, 14)
      }, () => console.log('fail'))
    }}>
      <img src={target} alt='show my location' />
    </button>
    <button onClick={() => {
      navigator.geolocation.getCurrentPosition(position => {
        panTo({
          lat: center.lat,
          lng: center.lng
        }, 11)
      }, () => console.log('fail'))
    }}>reset map</button>
    </>
  )
}

export default Locate
