
import "dotenv/config";
import { createServer } from "./express.server";

const app = createServer()

app.listen(process.env.PORTA, () =>
  console.log(`Servidor ta rodando na porta ${process.env.PORTA}`)
);

