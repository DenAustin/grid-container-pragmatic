import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = url => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(url)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
    // fetch(url)
    //   .then(response => response.json())
    //   .then(fetchedData => {
    //     setData(fetchedData)
    //   })
  }, [])

  return data
}

// async function anyFunName () {
//     const getSomething = await what you get goes here

// }