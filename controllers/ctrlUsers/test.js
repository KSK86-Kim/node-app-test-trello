const test = (req, res, next) => {
  console.log(req)
  console.log(res)

  res.json({
    status: 'success',
    code: 200,
  })
}

module.exports =
  test
