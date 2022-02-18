import EmailView from '../views/EmailView'

const emailColumn = ({ name, label }) => {
  return {
    dataIndex: name,
    title: label,
    sorter: (a, b) => a[name] >= b[name],
    render: (value) => <EmailView value={value} />,
  }
}

export default emailColumn
