import React, { useEffect, useState } from 'react'
import slowFunction from './slowFunction'

const SlowColumnView = ({ value }) => {
  const [state, setState] = useState()

  const loadSlowFunction = async () => {
    const result = await slowFunction(value)
    setState(result)
  }

  useEffect(() => {
    loadSlowFunction()
  }, [])

  if (!state) {
    return <p>Calculating {value}...</p>
  }

  return (
    <div>
      {value}: {state}
    </div>
  )
}

export default SlowColumnView
