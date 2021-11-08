import React from 'react'
import Map from '../Map/Map'
import PlaydateForm from '../PlaydateForm/PlaydateForm'
import PlaydateContextProvider from './PlaydateContextProvider'

// import './_PlaydateFormAndMap.scss'

const PlaydateFormAndMap = ({ currentUserId, selectedUserId, updateProfile, updateCurrentUser }) => {
  // const [markers, setMarkers] = useState([])
  // const [selected, setSelected] = useState(null)
  // const [location, setLocation] = useState('')
  // const sharedProps = { markers, setMarkers, selected, setSelected, location, setLocation }

  // {...sharedProps} in Map

  // in PlaydateForm
  // currentUserId={currentUserId}
  // selectedUserId={selectedUserId}
  // updateProfile={updateProfile}
  // updateCurrentUser={updateCurrentUser}
  // {...sharedProps}


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
