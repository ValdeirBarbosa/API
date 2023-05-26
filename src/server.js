require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/App.error")
const express = require("express")
const routes = require("./routes")

migrationsRun()
const app = express()
app.use(express.json())

app.use(routes)
app.use((error, request, response, next) => {

  if (error instanceof AppError) {
    return response.status(error.statusCode).json(
      {
        status: "error",
        message: error.message
      }
    )
  }

  console.error(error)


  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  })

})
app.get('/message/:id', (request, response) => {
  const { id } = request.params
  response.send(`Param ${id}`)

})


const PORT = 3333
app.listen(PORT, () => console.log(`The server is running in the ${PORT} port`))