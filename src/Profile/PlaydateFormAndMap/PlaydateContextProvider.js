import React, { createContext, useState, useEffect } from 'react'
import fetchCalls from '../../fetchCalls'
// import parksData from '../parksData'
import dayjs from 'dayjs'

export const PlaydateContext = createContext()

const PlaydateContextProvider = ({ children }) => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [selected, setSelected] = useState(null)
  const [location, setLocation] = useState('')
  const [parks, setParks] = useState([])

  const value = { date, setDate, selected, setSelected, location, setLocation, parks, setParks }

  useEffect(() => {
    fetchCalls.getParks()
      .then(parks => setParks(parks))
  }, [])

  return (
    <PlaydateContext.Provider value={value}>
      {children}
    </PlaydateContext.Provider>
  )
}

export default PlaydateContextProvider
