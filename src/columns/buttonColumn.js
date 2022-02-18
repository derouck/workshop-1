import AviatizeButton from '../antd/AviatizeButton'

const buttonColumn = ({ name, label = 'Action', onClick }) => {
  return {
    key: name,
    render: (value, row) => (
      // TODO: BitViewButton
      <AviatizeButton label={label} onClick={() => onClick(value, row)} />
    ),
  }
}

export default buttonColumn
