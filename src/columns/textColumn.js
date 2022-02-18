const textColumn = ({ name, label }) => {
  return {
    dataIndex: name,
    title: label,
    sorter: (a, b) => a[name] >= b[name],
  }
}

export default textColumn
