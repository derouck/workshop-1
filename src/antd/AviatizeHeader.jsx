import { PageHeader } from 'antd'
import React from 'react'

const AviatizeHeader = ({
  title,
  subTitle,
  backIcon = false,
  extra,
  children,
}) => {
  return (
    <PageHeader
      title={title}
      subTitle={subTitle}
      backIcon={backIcon}
      extra={extra}
    >
      {children}
    </PageHeader>
  )
}

export default AviatizeHeader
