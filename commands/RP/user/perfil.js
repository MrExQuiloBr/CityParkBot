module.exports = ({
  name: "perfil",
  aliases: ['ver', 'profile', 'view'],
  code: `
$title[Perfil de $username[$mentioned[1;true]]]
$description[👵 | idade: **$getGlobalUserVar[idade;$mentioned[1;true]] Anos**
💼 | emprego: **$getGlobalUserVar[emprego;$mentioned[1;true]]**
🏢 | altura: **$getGlobalUserVar[altura;$mentioned[1;true]]cm**
⚖️ | peso: **$getGlobalUserVar[peso;$mentioned[1;true]]kg**
🧬 | biotipo: **$getGlobalUserVar[biotipo;$mentioned[1;true]]**
💦 | hidratação: **$getGlobalUserVar[hidratação;$mentioned[1;true]]**%
🍗 | Fome: **$getGlobalUserVar[fome;$mentioned[1;true]]**%
🦟 | doenças: **$getGlobalUserVar[doenças;$mentioned[1;true]]**
🌞 | status: **$getGlobalUserVar[status;$mentioned[1;true]]**
🏘️ | bairro: **$getGlobalUserVar[bairro;$mentioned[1;true]]**
]
$color[#ffffff]
$thumbnail[$userAvatar[$mentioned[1;true]]]
$onlyIf[$getGlobalUserVar[cmc;$mentioned[1;true]]==yes;❌ | <@$authorID>, o usuário **$username[$mentioned[1;true]]** não está registrado na cidade!]
`
})