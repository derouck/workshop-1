import { Table } from 'antd'
import React from 'react'

const AviatizeTable = ({ data, columns }) => {
  // console.log('AviatizeTable', data, columns)

  return <Table dataSource={data} columns={columns} pagination={false} />
}

export default AviatizeTable
