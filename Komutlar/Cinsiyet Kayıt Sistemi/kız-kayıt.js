module.exports = ({
          name: "kız-kayıt",
          code: `
          <@$mentioned[1]> Kız Olarak Kayıt Edildi!
          $setUserNickname[$mentioned[1];$noMentionMessage[1] | $noMentionMessage[2];Kız]
          $giveRole[$guildID;$mentioned[1];$findRole[$getGuildVar[kızrol]]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kız-kayıt @etiket]`
});