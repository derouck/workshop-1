import { PageHeader } from 'antd'
import React from 'react'

const AviatizeHeader = ({ title, subTitle, backIcon = false, extra }) => {
  return (
    <PageHeader
      title={title}
      subTitle={subTitle}
      backIcon={backIcon}
      extra={extra}
    />
  )
}

export default AviatizeHeader
