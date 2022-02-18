import AviatizeButton from './antd/AviatizeButton'
import AviatizeHeader from './antd/AviatizeHeader'
import UserTable from './components/UserTable'
import useCurrentUser from './hooks/useCurrentUser'
import useUsers from './hooks/useUsers'
import AviatizeTabs from './antd/AviatizeTabs'
// import useCars from './hooks/useCars'

const App = () => {
  const users = useUsers()
  // const cars = useCars()
  const [currentUser, updateCurrentUser] = useCurrentUser()

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
      <AviatizeHeader
        title="Workshop"
        subTitle="18/2/2022"
        extra="Chris De Rouck - Aviatize BV"
      />
      <AviatizeHeader
        title={`Welcome ${currentUser.first_name}`}
        extra={
          <AviatizeButton
            label="Change User"
            onClick={updateCurrentUser}
            type="primary"
          />
        }
      >
        <AviatizeTabs>
          {/* TODO: build filter in UserTable */}
          <UserTable title="All" data={users} onView={onView} />
          <UserTable title="Men" data={men} onView={onView} />
          <UserTable title="Women" data={women} onView={onView} />

          {/* TODO: Implement a CarTable
          <CarTable title="Cards" data={cars} onView={onView} /> */}
        </AviatizeTabs>
      </AviatizeHeader>
    </div>
  )
}

export default App
