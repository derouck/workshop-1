import React from 'react'
import AviatizeTable from '../antd/AviatizeTable'
import buttonColumn from '../columns/buttonColumn'
import emailColumn from '../columns/emailColumn'
import slowColumn from '../columns/slowColumn'
import textColumn from '../columns/textColumn'

const UserTable = ({ data, onView }) => {
  const columns = [
    textColumn({
      name: 'id',
      label: 'ID',
    }),
    textColumn({
      name: 'first_name',
      label: 'First Name',
    }),
    textColumn({
      name: 'last_name',
      label: 'Last Name',
    }),
    emailColumn({
      name: 'email',
      label: 'Email',
    }),
    textColumn({
      name: 'gender',
      label: 'Gender',
    }),
    textColumn({
      name: 'phone',
      label: 'Phone',
    }),
    slowColumn({ name: 'slow', label: 'Slow' }),
    buttonColumn({ name: 'view', label: 'View', onClick: onView }),
  ]

  return <AviatizeTable data={data} columns={columns} />
}

export default UserTable
