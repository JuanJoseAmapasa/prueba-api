const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo desde railwil.")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`)
})





