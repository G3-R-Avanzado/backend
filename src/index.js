import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  const hmlResponse = `
    <hml>
        <head>
            <title>Clon MELI</title>
        </head>
        <body>
            <h1>Aqui debe ir las rutas del backend</h1>
        </body>
    </html>
    `;
  res.send(hmlResponse);
});

//asigno un puerto para que escuche el servidor
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
