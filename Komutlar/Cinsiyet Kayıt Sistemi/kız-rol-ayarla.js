module.exports = ({
          name: "kız-rol-ayarla",
          code: `
          <@$authorID> Kız Kayıt Rolü <@$getGuildVar[erkekrol]> Olarak Ayarlandı!
          $setGuildVar[kızrol;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kız-rol-ayarla @rol]`
});