const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")))


app.set("view engine", "ejs");

app.get("/bienvenida", (req, res) => {
  res.render("bienvenida", {nombre: "Javier"})
});

app.get("/edad-perruna/:edadHumana", (req, res) => {

  const edadHumana = Number(req.params.edadHumana);
  let edadPerruna = edadHumana * 7;

    res.send(`Tu perro tendría ${edadPerruna} años humanos`);
});


app.get("/impares", (req, res) => {

   const impares = [];

   for (let i = 1; i <= 15; i++){
      if (i % 2 !== 0) impares.push(i);
   }

   res.json(impares);
});








//Arrancar Servidor
app.listen(PORT, () => {
console.log(`Servidor en localhost:${PORT}`)
})