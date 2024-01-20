const { AoiClient } = require("aoi.js");
const express = require('express');
const server = express();
server.all('/', (req, res) => {
  res.send('Bot vivo!')
})
function keepAlive() {
  server.listen(3000, () => { console.log("Servidor 24/7 ligado!") });
}
module.exports = keepAlive;
keepAlive();

const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: "d.",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: process.env.Securitykey, // Access the environment variable correctly
  }
});

client.loadCommands("./commands/", true);

client.variables({
  money: "0",
  bank: "0",
  biotipo: "none",
  altura: "none",
  peso: "none",
  idade: "none",
  aniversário: "none",
  bairro: "none",
  saúde: "100",
  hidratação: "100",
  fome: "100",
  doenças: "none",
  status: "none",
  cmc: "no",
  players: "1",
  emprego: "none",
  xpe: 0,
  salário: 0,
  tiposalario: "none",
  trcount: 0,
  limitviagem: 0,
  date: 1705684674,
  ultWaifu: "none",
  colectionW: "",
  page: 1,
  payday: false,
  temperatura: 30,
  clima: "ensolarado",
})
