import React from 'react'
import Map from './Map/Map'
import PlaydateForm from './PlaydateForm/PlaydateForm'
import PlaydateContextProvider from './PlaydateContextProvider'

// import './_PlaydateFormAndMap.scss'

const PlaydateFormAndMap = ({ currentUserId, selectedUserId, updateProfile, updateCurrentUser }) => {
  return (
    <PlaydateContextProvider>
      <section className='playdate-form-map-container'>
        <Map />
        <PlaydateForm
          currentUserId={currentUserId}
          selectedUserId={selectedUserId}
          updateProfile={updateProfile}
          updateCurrentUser={updateCurrentUser}
        />
      </section>
    </PlaydateContextProvider>
  )
}

export default PlaydateFormAndMap
