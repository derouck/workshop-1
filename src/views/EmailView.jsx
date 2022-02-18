import AviatizeButton from '../antd/AviatizeButton'

const EmailView = ({ value }) => (
  <AviatizeButton href={`mailto:${value}`} label={value} />
)

export default EmailView
