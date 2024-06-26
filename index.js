import app from "./src/app.js";
import {connectDB} from "./src/db.js"
import dotenv from "dotenv";
dotenv.config();

connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  const htmlResponse = `
    <hml>
        <head>
            <title>Clon MELI</title>
        </head>
        <body>
            <h1>Aqui debe ir las rutas del backend</h1>
        </body>
    </html>
    `;
  res.send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
