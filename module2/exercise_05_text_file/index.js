const express = require("express");
const fs = require("fs");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

clearDatabase();

app.post("/api", (request, response) => {
  const data = request.body;
  saveToDatabase(data);
  const allData = getDatabase();
  response.json(allData);
  console.log(allData);
});

function getDatabase() {
  const rawData = fs.readFileSync("database.txt").toString().trim();
  const lines = rawData.split("\n");
  const allData = [];
  for (const line of lines) {
    const data = JSON.parse(line);
    allData.push(data);
  }
  return allData;
}

function saveToDatabase(data) {
  const dataString = JSON.stringify(data);
  fs.appendFileSync("database.txt", dataString + "\n");
}

function clearDatabase() {
  fs.writeFileSync("database.txt", "");
}
