import { Button } from 'antd'
import React from 'react'

const AviatizeButton = ({
  label,
  onClick = () => {},
  href,
  type = 'default',
}) => {
  return (
    <Button onClick={onClick} type={type} href={href}>
      {label}
    </Button>
  )
}

export default AviatizeButton
