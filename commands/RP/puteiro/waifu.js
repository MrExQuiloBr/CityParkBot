module.exports = [{
  name: "waifu",
  aliases: ["wa"],
  code: `
  $title[Waifu]
  $description[**Source:** $jsonRequest[https://nekos.best/api/v2/waifu;results[0].source_url;]]
$image[$getGlobalUserVar[ultWaifu;$authorID]]
$color[#e91e63]
$setGlobalUserVar[ultWaifu;$jsonRequest[https://nekos.best/api/v2/waifu;results[0].url;];$authorID]
$addButton[1;+Add Waifu;primary;IDWA_$authorID;false;➕]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[;{newEmbed:{title:você guardou essa waifu!}{description:Waifu guardada com sucesso!}{image:$getGlobalUserVar[ultWaifu;$authorID]}{color:#e91e63}}]
  $setGlobalUserVar[colectionW;$getGlobalUserVar[colectionW;$authorID]__$getGlobalUserVar[ultWaifu;$authorID];$authorID]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==IDWA;]
  `
}]