import express from 'express';
import { createPerson, getPersonById, searchPerson, countPerson } from './src/index.js';

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/pessoas', createPerson)
app.get('/pessoas/:id', getPersonById)
app.get('/pessoas', searchPerson)
app.get('/contagem-pessoas', countPerson)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
