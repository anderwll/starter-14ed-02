import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import { crimeRoutes, criminalRoutes, weaponRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Server is up in port ${process.env.PORT}`)
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("API Delegation - 14ª edition");
});

// CHAMA AS ROTAS
app.use("/crimes", crimeRoutes());
app.use("/criminals", criminalRoutes());
app.use("/weapons", weaponRoutes());
