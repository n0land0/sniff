import React from 'react'
import target from '../assets/target.png'

const Locate = ({ panTo }) => {
  return (
    <button onClick={() => {
      navigator.geolocation.getCurrentPosition(position => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, () => console.log('fail'))
    }}>
      <img src={target} alt='show my location' />
    </button>
  )
}

export default Locate
