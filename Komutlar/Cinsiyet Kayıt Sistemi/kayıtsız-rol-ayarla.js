module.exports = ({
          name: "kayıtsız-rol-ayarla",
          code: `
          <@$authorID> Kayıtsız Rolü <@$getGuildVar[erkekrol]> Olarak Ayarlandı!
          $setGuildVar[kayıtsızrol;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kayıtsız-rol-ayarla @rol]`
});