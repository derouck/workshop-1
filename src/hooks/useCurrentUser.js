import { useEffect, useState } from 'react'
import getRandomUser from './getRandomUser'
import useUsers from './useUsers'

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState()
  const users = useUsers()

  const updateCurrentUser = () => {
    const randomUser = getRandomUser(users)
    setCurrentUser(randomUser)
  }

  useEffect(() => {
    if (!currentUser && users) {
      updateCurrentUser()
    }
  }, [users])

  return [currentUser, updateCurrentUser]
}

export default useCurrentUser
