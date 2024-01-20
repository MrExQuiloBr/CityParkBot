module.exports = ({
  name: "banco",
  aliases: ['bank', 'saldo', 'money', 'm', 'b'],
  code: `$onlyIf[$getGlobalUserVar[cmc;$mentioned[1;true]]==yes;❌ | O usuário ainda não iniciou sua jornada.]
$title[🏦 | Saldo bancário]
$description[
> > 💵 | Dinheiro: **R$$numberSeparator[$getGlobalUserVar[money;$mentioned[1;true]]]**
> > 🏦 | Banco: **R$$numberSeparator[$getGlobalUserVar[bank;$mentioned[1;true]]]**
> > 💰 | Total: **R$$numberSeparator[$sum[$getGlobalUserVar[money;$mentioned[1;yes]];$getGlobalUserVar[bank;$mentioned[1;true]]]]**
]
$color[30ff00]
$thumbnail[$userAvatar[$mentioned[1;true]]]`
})