module.exports = ({
          name: "erkek-rol-ayarla",
          code: `
          <@$authorID> Erkek Kayıt Rolü <@$getGuildVar[erkekrol]> Olarak Ayarlandı!
          $setGuildVar[erkekrol;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!erkek-rol-ayarla @rol]`
});