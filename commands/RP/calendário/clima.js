module.exports = ({
  name: "clima",
  aliases: ["tempo", "temperatura", "previsão", "previsao"],
  code: `
  $title[Clima]
  $description[🌡️ | temperatura: **$getVar[temperatura]°C**
  ☀️ | clima: **$getVar[clima]]**
  $color[$if[$getVar[temperatura]>=27;ffa700;61c7ff]]
  `
})