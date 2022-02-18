import { Button } from 'antd'
import React from 'react'

const AviatizeButton = ({ label, onClick, type = 'default' }) => {
  return (
    <Button onClick={onClick} type={type}>
      {label}
    </Button>
  )
}

export default AviatizeButton
