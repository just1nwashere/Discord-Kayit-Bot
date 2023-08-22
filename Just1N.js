//Modüller                                                                                                                                                                                                          
const { AoiClient, LoadCommands, AoiInviteSystem } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

//Main.js
const bot = new AoiClient({
    token: process.env.token,
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages",],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete",],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    },
});
//SoundCloud & Youtube
const voice = new AoiVoice(bot, {
    searchOptions: {
        youtubeClient: "",
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);

//Komutlar Dosyası
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Komutlar/");

//Değişkenler Ayarlar
bot.variables({
    kayıtyetkili: "$mentionedRoles[1]",
    erkekrol: "$mentionedRoles[1]",
    kızrol: "$mentionedRoles[1]",
    kayıtsızrol: "$mentionedRoles[1]",
    kayıtrol: "$mentionedRoles[1]"
});
//Bunları Ellemeyiniz.

//Bot Durumu
bot.status({
    text: "Made By 💖 Just1N#0057",
    type: "PLAYING",
    time: 12
});
//Text: Durum Yazısı, Type: Oynuyor, Time: Zaman 12 kalsın



















//Made By 💖 Just1N, Bot'da Hata Çıkarsa Ulaşın!