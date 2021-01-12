console.log('-----------------------------------------')
console.log(`API_MOCKING is ${process.env.API_MOCKING}`)
console.log('-----------------------------------------')


const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
