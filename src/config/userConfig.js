import Bits from '../Bits'

const userConfig = {
  title: 'Users',
  fields: [
    {
      name: 'id',
      label: 'ID',
      type: Bits.TEXT,
    },
    {
      name: 'first_name',
      label: 'First Name',
      type: Bits.TEXT,
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: Bits.TEXT,
    },
    {
      name: 'email',
      label: 'Email',
      type: Bits.EMAIL,
    },
    {
      name: 'gender',
      label: 'ID',
      type: Bits.TEXT,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: Bits.TEXT,
    },
  ],
}

export default userConfig
