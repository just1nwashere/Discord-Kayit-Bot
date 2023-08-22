module.exports = ({
          name: "kayıt",
          code: `
          <@$mentioned[1]> Normal Olarak Kayıt Edildi!
          $setUserNickname[$mentioned[1];$noMentionMessage[1] | $noMentionMessage[2];erkek]
          $giveRole[$guildID;$mentioned[1];$findRole[$getGuildVar[kayıtrol]]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kayıt @etiket]`
});