import SlowColumnView from './SlowColumnView'

const slowColumn = ({ name, label }) => {
  return {
    key: name,
    dataIndex: 'id',
    render: (value) => <SlowColumnView label={label} value={value} />,
  }
}

export default slowColumn
