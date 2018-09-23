const express = require('express')
const app = express()
const port = 3000
const { createElement } = require('react')
const { renderToString } = require('react-dom/server')

let App = require('./main.js')
let elem = createElement(App)

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/asifgay', (req, res) => {
  let html = renderToString(elem)
  res.write(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
