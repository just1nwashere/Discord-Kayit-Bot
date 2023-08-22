module.exports = ({
          name: "kayıtsıza-at",
          code: `
          <@$mentioned[1]> Kayıtsıza Atıldı!
          $setUserNickname[$mentioned[1];İsim | Yaş;Kayıtsız]
          $giveRole[$guildID;$mentioned[1];$findRole[$getGuildVar[kayıtsızrol]]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kayıtsıza-at @etiket]
          `
});