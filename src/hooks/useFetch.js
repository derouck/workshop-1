import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)

        return response.json()
      })
      .then((json) => {
        console.log('fetch', json)
        setData(json)
      })
  }, [])

  return data
}

export default useFetch
