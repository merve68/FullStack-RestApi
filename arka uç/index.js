const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
  console.log("Server Çalıştı");
});

app.get("/", (req, res) => {
  const a = "CPU core : " + os.cpus().toString();
  const b = "OS : " + os.arch();
  const c = "Free memory space :  " + os.freemem();
  const d = "Host name : " + os.hostname();
  const f = "Platform : " + os.platform();
  const h = "Total amount of system memory : " + os.totalmem();
  const j = "Type : " + os.type();
  const k = "System uptime : " + os.uptime();

  const result = a + b + c + d + f + h + j + k;
  res.send(result + "");
});

app.post("/CPU", (req, res) => {
  res.send( os.cpus());
});

app.post("/freemem", (req, res) => {
  res.send("Free memory space :  " + os.freemem());
});

app.post("/arch", (req, res) => {
  res.send("OS : " + os.arch());
});
app.post("/hostname", (req, res) => {
  res.send("Host name : " + os.hostname());
});
app.post("/platform", (req, res) => {
  res.send("Platform : " + os.platform());
});

app.post("/totalmem", (req, res) => {
  res.send("Total amount of system memory : " + os.totalmem());
});

app.post("/type", (req, res) => {
  res.send("Type : " + os.type());
});

app.post("/uptime", (req, res) => {
  res.send("System uptime : " + os.uptime());
});
