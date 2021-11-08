import React from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, ComboboxOptionText } from '@reach/combobox'
import '@reach/combobox/styles.css'

const Search = ({ panTo }) => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions, } =
    usePlacesAutocomplete({
      requestOptions: {
        location: {
          lat: () => 39.74846723935253,
          lng: () => -105.04736793135767
        },
        radius: 2000
      }
    })

  return (
    <Combobox
      onSelect={(address) => {
        setValue(address, false)
        clearSuggestions()
        getGeocode({ address })
          .then(results =>
            getLatLng(results[0])
              .then(({ lat, lng }) =>
                panTo({ lat, lng }, 14)
              )
          )
          .catch(error => console.log(error.message))
      }}
    >
      <ComboboxInput
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        disabled={!ready}
        placeholder='enter a landmark or address'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' && data.map(({place_id, description}) =>
            <ComboboxOption key={place_id} value={description} />
          )}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default Search
