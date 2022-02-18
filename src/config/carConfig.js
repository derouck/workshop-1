import Bits from '../Bits'

const carConfig = {
  title: 'Cars',
  fields: [
    { name: 'id', label: 'ID', type: Bits.TEXT },
    { name: 'make', label: 'Make', type: Bits.TEXT },
    { name: 'model', label: 'Model', type: Bits.TEXT },
  ],
}

export default carConfig
