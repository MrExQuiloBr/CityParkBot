module.exports = ({
  name: "trabalhar",
  aliases: ['work', 'w'],
  $if: "old",
  code: `   $if[$getGlobalUserVar[tiposalario;$authorID]==mensal]
  $title[💼 | Trabalho]
  $description[
  <@$authorID>, Você trabalhou como **$getGlobalUserVar[emprego;$authorID]**, e irá ganhar: **R$$numberSeparator[$getGlobalUserVar[salário;$authorID]]**💵 no fim do mês! continue trabalhando $sub[20;$getGlobalUserVar[trcount;$authorID]] vezes para garantir seu salário mensal!]
  $footer[você sabia que se você trabalhar mais de 20 vezes no mês você pode ganhar mais dinheiro?, porem se trabalhar menos irá receber menos dinheiro, mas cuidado! se trabalhar muito você pode adquirir alguma doença!]
  $color[a1ff00]
  $setGlobalUserVar[trcount;$sum[$getGlobalUserVar[trcount;$authorID];1];$authorID]
  $setGlobalUserVar[xpe;$sum[$getGlobalUserVar[xpe;$authorID];$random[2;5]];$authorID]
  $globalCooldown[20m;❌ | <@$authorID>, Você já trabalhou recentemente, aguarde %time%]
  $endif
$if[$getGlobalUserVar[tiposalario;$authorID]==viagem]
 $title[💼 | Trabalho]
  $description[
  <@$authorID>, Você trabalhou como **$getGlobalUserVar[emprego;$authorID]**, e ganhou: **R$$getGlobalUserVar[salário;$authorID]💵!**]
  $color[a1ff00]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[salário;$authorID]];$authorID]
  $setGlobalUserVar[trcount;$sum[$getGlobalUserVar[trcount;$authorID];1];$authorID]
  $setGlobalUserVar[xpe;$sum[$getGlobalUserVar[xpe;$authorID];$random[2;5]];$authorID]
  $if[$getGlobalUserVar[emprego;$authorID]==entregador]
  $globalCooldown[15s; ❌ | <@$authorID>, Você já trabalhou recentemente, aguarde %time%]
  $endif
  $if[$getGlobalUserVar[emprego;$authorID]==motor]
  $globalCooldown[40s; ❌ | <@$authorID>, Você já trabalhou recentemente, aguarde %time%]
  $endif
  $onlyIf[$getGlobalUserVar[trcount;$authorID]<=$getGlobalUserVar[limitviagem;$authorID];❌ | você atingiu o limite de viagens por mês!]
$endif

$onlyIf[$getGlobalUserVar[emprego;$authorID]!=none;❌ | você não tem um emprego! adquira um emprego utilizado d.empregos para ver os empregos disponíveis!]
  `
})