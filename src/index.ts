import express from "express"

const app  = express()


app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/working", (req, res) => {
  res.send("Hello World on EC2 Done")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})