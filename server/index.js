import express from "express";
import next from "next";
import dotenv from 'dotenv';
dotenv.config();
import { mappedDataSearch, mappedDataDetails } from './utils.js';
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
import cors from 'cors';


app.prepare().then(() => {
  const server = express();
  const API_URL = process.env.MELI_API_URL;

  // Only from test in localhost
  server.use(cors({ origin: "http://localhost:3000" }));
  // Endpoint to search products
  server.get("/api/search", async (req, res) => {
    try {
      const { q, name, lastname } = req.query;
      const author = { name, lastname } || {name: "", lastname: ""};
      const response = await fetch(`${API_URL}sites/MLA/search?q=${q}`);
      const data = await response.json();
      const dataResult = mappedDataSearch(data?.results, author);
      res.json(dataResult);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error fetching MELI data search" });
    }
  });

  // Endpoint to get product details
  server.get("/api/items/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastname } = req.query;
      const author = { name, lastname } || {name: "", lastname: ""};
      const response = await fetch(`${API_URL}items/${id}`);
      const data = await response.json();
      const dataResult = mappedDataDetails(data, author);
      res.json(dataResult);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error fetching MELI data details" });
    }
  });
  
  server.get("*", (req, res) => handle(req, res));
  server.listen(3001, (err) => {
    if (err) throw new err;
    console.log("Server is running on port 3001");
  })
});
