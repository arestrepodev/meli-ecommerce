import express from "express";
import next from "next";
import dotenv from 'dotenv';
dotenv.config();
import { mappedData } from './utils.js';


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const API_URL = process.env.MELI_API_URL;
  console.log(API_URL);

  // Endpoint to search products
  server.get("/api/search", async (req, res) => {
    const { q } = req.query;
    try {
      const response = await fetch(`${API_URL}search?q=${q}`);
      const data = await response.json();
      const dataResult = mappedData(data?.results);
      console.log(dataResult);
      res.json(dataResult);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error fetching meli data search" });
    }
  });
  
  server.get("*", (req, res) => handle(req, res));
  server.listen(3001, (err) => {
    if (err) throw new err;
    console.log("Server is running on port 3001");
   })
});
