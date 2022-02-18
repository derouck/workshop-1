import bitData from '../bitData'

const getBitColumns = ({ bitConfig }) => {
  if (!bitConfig.fields) {
    console.log('No fields')
    return
  }

  console.log(bitConfig.fields)

  const tableColumns = bitConfig.fields
    .map((field) => {
      const currentBit = bitData.find((bit) => bit.value === field.type)
      if (!currentBit) {
        return null
      }

      console.log(currentBit)
      return currentBit.column(field)
    })
    .filter((col) => !!col)

  console.log({ tableColumns })
  return tableColumns
}

export default getBitColumns
