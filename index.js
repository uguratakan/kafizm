const express = require("express");
const Discord = require("discord.js");
const ytdl    = require("ytdl-core");
const ffmpeg = require ("ffmpeg-static")
var moment = require("moment");
const token = ''; //token here
const youAreNotInVoiceChannel = "ses kanalına gir.";
const iAmNotInChannel = "Zaten bir kanalda değilim...";
const bot = new Discord.Client();
const app = express();
var durum="Kafizm Radyosu";
var k = 0;
var d = new Date();
var datetime = moment().utcOffset(+3).format("D, M, YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"
var tarih = (`Logg ${datetime}!`);
const channelid = '837074689984823367';
app.get("/", (request, response) => {
    response.sendStatus(200);
});

bot.on('ready', () => {

  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", message => {


  /* setInterval(() => {
    message.guild.channels.find("name", "general").setName("Testing");


    }, 1000);

*/
const addVoices = (whereIsTheVoice, whatIsMessage, radioname) => {
        if (message.content.toLocaleLowerCase() == whatIsMessage) {
          durum=radioname;
            if(!message.member.voice.channel) {
                message.channel.send(youAreNotInVoiceChannel)
                return;
            }
            message.member.voice.channel.join().then(VoiceConnection => {
                k = 1;
                VoiceConnection.play(whereIsTheVoice);
            }).catch(e => console.log(e))
        };
    }
if (message.content.toLocaleLowerCase()=="bot.test") {
    message.channel.send(tarih)
//  message.channel.setName(`Logg ${datetime}!`)
//    message.channel.setName(datetime)


}

    if (message.content.toLocaleLowerCase() == "!bot.kapat") {
        if(k == 1){
            k=0;
            message.guild.voice.connection.disconnect();
        }else
            message.channel.send(iAmNotInChannel);
    }
});
bot.login(token);
