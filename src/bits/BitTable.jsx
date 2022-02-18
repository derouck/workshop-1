import React from 'react'
import AviatizeTable from '../antd/AviatizeTable'
import buttonColumn from '../columns/buttonColumn'
import getBitColumns from './getBitColumns'

const BitTable = ({ data, bitConfig }) => {
  const columns = getBitColumns({ bitConfig })

  // TODO: BitViewButton
  const onView = (value, row) => {
    alert(JSON.stringify(row))
  }

  const allColumns = [
    ...columns,
    buttonColumn({ name: 'view', label: 'View', onClick: onView }),
  ]

  return (
    <AviatizeTable title={bitConfig.title} data={data} columns={allColumns} />
  )
}

export default BitTable
