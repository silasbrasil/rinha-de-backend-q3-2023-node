import express from 'express';
import { createPerson, getPersonById, searchPerson, countPerson } from './src/index.js';

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/pessoas', createPerson)
app.get('/pessoas', searchPerson)
app.get('/pessoas/:id', getPersonById)
app.get('/contagem-pessoas', countPerson)

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})
