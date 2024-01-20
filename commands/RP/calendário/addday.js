module.exports = ({
  name: "add-day",
  code: 
  `ok, definido para dia: <t:$getVar[date]:d>
  $setVar[date;$sum[$getVar[date];1204000]]
  $if[$message==payday;$setVar[payday;true] payday definido como true]
  $onlyForIDs[$clientOwnerIds;You can't use that command!]`
})