module.exports = [{
  name: "emprego",
  code: `
  $title[Empregos disponíveis:]
  $description[
  **🍽️ | Garçom:**   R$1380 P/mês  -  0XP
  **🛒 | F. d. Mercado:**   R$1400 P/mês  -  0XP
  **🚚 | Entregador:**   R$20 P/viagem  -  13XP
  **🚎 | Mot. Ônibus:**   R$50 P/Viagem  -  180XP
  **🧑‍🏫 | Professor Infantil:**   R$1700 P/mês  -  250XP
  **👩‍🔬 | Professor de química:**   R$3200 P/mês  -  500XP
  ]
  $footer[fique de olho nos empregos disponíveis, eles se atualizam com o tempo!]
  $color[#ffffff]

  $addSelectMenu[1;string;empregos;🦺 | Selecione seu emprego aqui! | 🦺;1;1;false;Garçom:R$1380 P/mês 0XP:garçom:false:🍽️;Funcionário de super mercado:R$1400 P/mês - 0XP:fdmercado:false:🛒;Entregador:R$20 P/viagem - 13XP:entregador:false:🚚;Motorista de Ônibus:R$50 P/viagem - 180XP:motonibus:false:🚎;Professor Infantil:R$1700 P/mês - 250XP:profinfantil:false:🧑‍🏫;Professor de química:R$3200 P/mês:profquimica:false:👩‍🔬]
  
  `
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:🍽️ | Garçom}{description:
  **🍽️ | $username Você se tornou um garçom! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;Garçom;$authorID]
  $setGlobalUserVar[salário;1380;$authorID]
  $setGlobalUserVar[tiposalario;mensal;$authorID]
  $onlyIf[$interactionData[values[0]]==garçom;]`
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:🛒 | F.d super mercado}{description:
  **🛒 | $username Você se tornou um funcionário de super mercado! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;mercadista;$authorID]
  $setGlobalUserVar[salário;1400;$authorID]
  $setGlobalUserVar[tiposalario;mensal;$authorID]
  $onlyIf[$interactionData[values[0]]==fdmercado;]`
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:🚚 | Entregador}{description:
  **🚚 | $username Você se tornou um entregador! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;entregador;$authorID]
  $setGlobalUserVar[salário;20;$authorID]
  $setGlobalUserVar[tiposalario;viagem;$authorID]
  $setGlobalUserVar[limitviagem;68;$authorID]
  $onlyIf[$getGlobalUserVar[xpe;$authorID]>=13;{newEmbed:{title:❌ | Erro!}{description:Você precisa de 13XP para se tornar um entregador!}{color:ffffff}{thumbnail:$authorAvatar}}]
  $onlyIf[$interactionData[values[0]]==entregador;]`
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:🚎 | Motorista de ônibus}{description:
  **🚎 | $username Você se tornou um motorista de ônibus! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;motor;$authorID]
  $setGlobalUserVar[salário;50;$authorID]
  $setGlobalUserVar[tiposalario;viagem;$authorID]
  $setGlobalUserVar[limitviagem;30;$authorID]
  $onlyIf[$getGlobalUserVar[xpe;$authorID]>=180;{newEmbed:{title:❌ | Erro!}{description:Você precisa de 180XP para se tornar um motorista de ônibus!}{color:ffffff}{thumbnail:$authorAvatar}}]
  $onlyIf[$interactionData[values[0]]==motonibus;]`
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:🧑‍🏫 | Professor infantil}{description:
  **🧑‍🏫 | $username Você se tornou um professor infantil! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;prof. infantil;$authorID]
  $setGlobalUserVar[salário;1700;$authorID]
  $setGlobalUserVar[tiposalario;mensal;$authorID]
  $onlyIf[$getGlobalUserVar[xpe;$authorID]>=250;{newEmbed:{title:❌ | Erro!}{description:Você precisa de 250XP para se tornar um professor infantil!}{color:ffffff}{thumbnail:$authorAvatar}}]
  $onlyIf[$interactionData[values[0]]==profinfantil;]`
},{
  name: "empregos",
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;{newEmbed:{title:👩‍🔬 | Professor de química}{description:
  **👩‍🔬 | $username Você se tornou um professor de química! parabéns!**}{color:ffffff}{thumbnail:$authorAvatar}}]
  $setGlobalUserVar[emprego;prof. quimica;$authorID]
  $setGlobalUserVar[salário;3200;$authorID]
  $setGlobalUserVar[tiposalario;mensal;$authorID]
  $onlyIf[$getGlobalUserVar[xpe;$authorID]>=500;{newEmbed:{title:❌ | Erro!}{description:Você precisa de 500XP para se tornar um professor de química!}{color:ffffff}{thumbnail:$authorAvatar}}]
  $onlyIf[$interactionData[values[0]]==profquimica;]`
}]