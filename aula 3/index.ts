import express from 'express'
const app = express()
const port = 3000

import viagensRoutes from './routes/viagens'

app.use(express.json())
app.use("/viagens", viagensRoutes)

app.use("/viagens", viagensRoutes)

app.get('/', (req, res) => {
  res.send('Aula 02: APIs c/ DB!')
})

app.get('/aula2', (req, res) => {
    res.send('Exemplo de rota de consulta de dados.')
  })

app.listen(port, () => {
  console.log(`Servidor rodando na rota ${port}`)
})