module.exports = ({
  name: "start",
  aliases: ['começar', 'comecar'],
  code: `
  $title[✈️ | Começando a jornada!]
  $description[🕯️ | Idade: **18 anos**
  ☁️ | Altura: **$getGlobalUserVar[altura;$authorID;main]cm**
  💪 | Peso: **$getGlobalUserVar[peso;$authorID;main]kg**
  🧬 | Biotipo: **$getGlobalUserVar[biotipo;$authorID;main]**
  🏘️ | bairro: **$getGlobalUserVar[bairro;$authorID;main]**
  ]
  $color[#ff7fed]
  $thumbnail[$authorAvatar]
  $setGlobalUserVar[cmc;yes;$authorID;main]
  $setGlobalUserVar[biotipo;$randomText[Ectomorfo;Mesomorfo;Endomorfo];$authorID;main]
$setGlobalUserVar[altura;$round[$multi[$random[130;150];$if[$getGlobalUserVar[biotipo;$authorID]==Ectomorfo;1.2;1.32]]];$authorID;main]
$setGlobalUserVar[peso;$round[$multi[$random[30;45];$if[$getGlobalUserVar[biotipo;$authorID]==Ectomorfo;1.2;2.1]]];$authorID]
$setGlobalUserVar[bairro;$randomText[Jardim das Flores; Vista Verde; Centro Histórico; Bosque dos Pássaros; Sol Nascente; Rio Claro; Monte Azul; Primavera Hills; Lagoa Serena; Bela Vista; Vila são José];$authorID;main]
$setGlobalUserVar[idade;18;$authorID;main]
$setVar[players;$sum[$getVar[players];1]]
  $onlyIf[$getGlobalUserVar[cmc;$authorID;main]==no;❌ | Você já começou a vida!]
  `
})