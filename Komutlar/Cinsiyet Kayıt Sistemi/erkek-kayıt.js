module.exports = ({
          name: "erkek-kayıt",
          code: `
          <@$mentioned[1]> Erkek Olarak Kayıt Edildi!
          $setUserNickname[$mentioned[1];$noMentionMessage[1] | $noMentionMessage[2];erkek]
          $giveRole[$guildID;$mentioned[1];$findRole[$getGuildVar[erkekrol]]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!erkek-kayıt @etiket]`
});