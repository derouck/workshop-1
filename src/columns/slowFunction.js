const slowFunction = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(id * id)
    }, id * 10000)
  })

export default slowFunction
