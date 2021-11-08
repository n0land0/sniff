import React, { Component, useState } from 'react'
import Map from '../Map/Map'
import PlaydateForm from '../PlaydateForm/PlaydateForm'

const PlaydateFormAndMap = ({ currentUserId, selectedUserId, updateProfile, updateCurrentUser }) => {
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)
  const [location, setLocation] = useState('')
  const sharedProps = { markers, setMarkers, selected, setSelected, location, setLocation }

  return (
    <>
      <Map
        {...sharedProps}
      />
      <PlaydateForm
        currentUserId={currentUserId}
        selectedUserId={selectedUserId}
        updateProfile={updateProfile}
        updateCurrentUser={updateCurrentUser}
        {...sharedProps}
      />
    </>
  )
}

export default PlaydateFormAndMap
