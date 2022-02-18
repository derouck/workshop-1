import getRandomNumber from './getRandomNumber'

const getRandomUser = (users) => {
  if (!users) {
    return null
  }

  const randomNumber = getRandomNumber(users.length)

  const randomUser = users[randomNumber]

  return randomUser
}

export default getRandomUser
