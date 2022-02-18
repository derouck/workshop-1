import AviatizeButton from './antd/AviatizeButton'
import AviatizeHeader from './antd/AviatizeHeader'
import UserTable from './components/UserTable'
import useCurrentUser from './hooks/useCurrentUser'
import useUsers from './hooks/useUsers'
import AviatizeTabs from './antd/AviatizeTabs'

const App = () => {
  const users = useUsers()
  const [currentUser, updateCurrentUser] = useCurrentUser()

  console.log({ currentUser })
  console.log({ users })

  if (!currentUser) {
    return null
  }

  const onView = (value, row) => {
    alert(JSON.stringify(row))
  }

  const men = users.filter((u) => u.gender === 'Male')
  const women = users.filter((u) => u.gender === 'Female')

  return (
    <div className="App">
      <AviatizeHeader title="Workshop" subTitle="18/2/2022" />
      <AviatizeHeader
        title={`Welcome ${currentUser.first_name}`}
        extra={
          <AviatizeButton
            label="Change User"
            onClick={updateCurrentUser}
            type="primary"
          />
        }
      />

      <AviatizeTabs>
        <UserTable title="All" data={users} onView={onView} />
        <UserTable title="Men" data={men} onView={onView} />
        <UserTable title="Women" data={women} onView={onView} />
      </AviatizeTabs>
    </div>
  )
}

export default App
