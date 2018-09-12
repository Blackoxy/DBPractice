const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.listen(port, () => {
    console.log(`listening on ${port}`)    
    console.log(queries)
})

app.get('/', (req, res) => {
    queries.getAll()
    .then(response => res.send(response))
})