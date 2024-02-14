const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepLive() {
  server.listen(3000, () => {
    console.log("Hello Trinity")
  })
}

module.exports = keepLive