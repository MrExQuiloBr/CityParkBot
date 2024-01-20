module.exports = [{
  name: "colection w",
  aliases: ['coleção w', 'colecao w', 'c w'],
  code: `
  $title[coleção de waifu]
  $description[página: $getGlobalUserVar[page;$authorID]]
  $image[$splitText[$getGlobalUserVar[page;$authorID]]]
$if[$getGlobalUserVar[page;$authorID]==1;$addButton[1;;primary;W1ID_$authorID;false;▶️]
$addButton[1;;primary;W2ID_$authorID;true;◀️]]
  $textSplit[$getGlobalUserVar[colectionW;$authorID];🔷]
  $setGlobalUserVar[page;1;$authorID]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[;{newEmbed:{title:coleção de waifu}{description:página: $getGlobalUserVar[page;$authorID]}{image:$splitText[$getGlobalUserVar[page;$authorID]]}};{actionRow:{button:◀️:primary:W2ID_$authorID:false}{button:▶️:primary:W1ID_$authorID:false}}]
  $textSplit[$getGlobalUserVar[colectionW;$authorID];__]
  $setGlobalUserVar[page;$sum[$getGlobalUserVar[page;$authorID];1];$authorID]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==W1ID;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[;{newEmbed:{title:coleção de waifu}{description:página: $getGlobalUserVar[page;$authorID]}{image:$splitText[$getGlobalUserVar[page;$authorID]]}};{actionRow:{button:◀️:primary:W2ID_$authorID:false}{button:▶️:primary:W1ID_$authorID:false}}]
  $textSplit[$getGlobalUserVar[colectionW;$authorID];__]
  $setGlobalUserVar[page;$sub[$getGlobalUserVar[page;$authorID];1];$authorID]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==W2ID;]
  `
}]