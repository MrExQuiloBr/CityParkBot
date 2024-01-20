module.exports = ({
  name: "calendário",
  aliases: ['calendario', 'data'],
  code: `
  $title[Calendário]
  $description[hoje é dia: <t:$getVar[date]:d>]
  $footer[$getVar[date]]
  `
});