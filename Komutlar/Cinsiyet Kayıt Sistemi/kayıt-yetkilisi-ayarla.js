module.exports = ({
          name: "kayıt-yetkilisi-ayarla",
          code: `
          <@$authorID> Kayıt Yetkilisi <@$getGuildVar[kayıtyetkili]> Olarak Ayarlandı!
          $setGuildVar[kayıtyetkili;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **YÖNETİCİ** Kullanabilir!]
          $onlyIf[$message!=;!kayıt-yetkilisi-ayarla @rol]`
});