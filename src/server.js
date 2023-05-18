const express = require("express")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use(routes)

app.get('/message/:id', (request, response) => {
  const { id } = request.params
  response.send(`Param ${id}`)

})


const PORT = 3333
app.listen(PORT, () => console.log(`The server is running in the ${PORT} port`))