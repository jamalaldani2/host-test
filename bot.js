const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://3rb-bot.glitch.me/`);
}, 280000);


/////
const Discord = require('discord.js');
const client = new Discord.Client();
const queue = new Map();
const prefix = "$"
const fs = require('fs');
/////////////////////////////////////////////////////////////////////////////////////////////////////////



 


////////////////////////////////////////////////////////////////////////////////////////////////////////////
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#soon 3rbbot v.1`,)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "s") {
 message.author.sendMessage(`
 **
__~~3rb bot~~__ By: Wolf Gamer#3068


╔[❖════════════❖]╗
             Prefix = ' $ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ $kick <mention > ➾ لطرد عضو من السيرفر
 
 ❖ $role <mention> <rank> ➾ لاعطاء شخص رتبة
 
 ❖ $roleremove <mention> <rank> ➾ لسحب الرتبة من شخص

 ❖ $role humans <rank> ➾ لاعطاء البشر رتبة
 
 ❖ $role bots <rank> ➾ لاعطاء رتبة للبوتات
  
 ❖ $role all <rank> ➾ لاعطاء الكل رتبة

 ❖ $clear ➾ تنظيف الشات
 
 ❖ $mute < mention > ➾ اسكات عضو

 ❖ $unmute <mention> ➾ لفك الاسكات كن الشخص

 ❖ $lock  ➾ اقفال الروم

 ❖ $unlock   ➾ فتح الروم
  
 ❖ $ban < mention > ➾ حظر عضو من السيرفر

 ❖ $hide ➾ اخفاء الروم
 
 ❖ $show ➾ لاظهار الروم
 
 ❖ $new ➾ فتح تيكيت

╔[❖════════════❖]╗
            General  Commands 
╚[❖════════════❖]╝

❖ $roll <number> ➾ لعمل قرعة

❖ $user ➾ لمعرفة كم لك في الديسكورد

❖ $bot ➾ لمعرفة معلومات البوت

❖ $date ➾ معرفة الوقت

❖ $member ➾ معرفة حالات الاعضاء

❖ $id ➾ لمعرفة الهوبة الشخصية

❖ $avatar ➾ لاخذ صورتك

❖ $ping ➾ لمعرفة سرعة اتصالك
 
❖ $server ➾ لمعرفة معلومات السيرفر

❖ $invite ➾ لدعوة البوت

❖ $slap <mention> ➾ يعطي كف

❖ $love <mention> ➾ يعبر بشعورك بلحب

❖ $boom <metion> ➾ يطير جبه الي تبي 

❖ $hug <mention> ➾ يعطي وحضن او ضمه

❖ $sad <mention> ➾ يقول للشخص انك خزين بسببه  او زعلان منه

❖ $miss <mention> ➾  يرسله اشتقت

❖ 

❖ $cr ➾لانشاء روم صوتي او كتابي

❖ $roles ➾ عرض رومات السيرفر

❖so0n ➾

❖so0n ➾

❖so0n ➾
╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

سوي روم اسمها ولكم


==================================================================

سيرفر الدعم: https://discord.gg/XBs6New

==================================================================

لاضافة البوت:https://discordapp.com/oauth2/authorize?client_id=532604442785349642&permissions=0&scope=bot
==================================================================

`);

    }
});

client.on('message', message => {
     if (message.content === (prefix + "he.")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});


/////////////////////////////////////////////////////
////////////////////////////////////////////////////
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {
         if(message.content === prefix + "lock") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "unlock") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', async message =>{
  var prefix = "$";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});
////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on("message", msg => {
    var prefix = "$";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === ('$bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@ᴀʟ » Wolf Gamer#8526 id:530062292969062412>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

////////////////
///////////////////////////////////////////////////////////
client.on('message' , message => {
  var prefix = "$";//البرفكس
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
 });
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bc-users')){
if(!message.author.id === '530062292969062412') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {//Mrx - Dev
    if (message.content.startsWith(prefix + 'sug')) {//Mrx - Dev
        if (message.author.bot) return//Mrx - Dev
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//Mrx - Dev
        var args =  message.content.split(' ').slice(1).join(' ')//Mrx - Dev
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})//Mrx - Dev
        let Room = message.guild.channels.find(`name`, "suggestions")//Mrx - Dev
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))//Mrx - Dev
        let embed = new Discord.RichEmbed()//Mrx - Dev
        .setColor('RANDOM')//Mrx - Dev
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)//Mrx - Dev
       .addField('**Suggestion**',`${args}`)//Mrx - Dev
       .setThumbnail(message.author.avatarURL)//Mrx - Dev
       .setFooter(`ID: ${message.author.id}`)//Mrx - Dev
       Room.sendEmbed(embed).then(c => {//Mrx - Dev
           c.react('✅').then(() => //Mrx - Dev
               c.react('❌'))//Mrx - Dev
           
       }).catch(e => console.error(e)//Mrx - Dev
       )
   }//Mrx - Dev
});//Mrx - Dev
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////

client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content.startsWith( "$invite")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  3rb™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=532604442785349642&permissions=0&scope=bot')

message.channel.sendEmbed(embed);

}
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

client.on('message', message => {
    var prefix = "$"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});
////////////////////////////////////////////////////////////
	client.on('message', message => {
   
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
   
      if(message.content === prefix + "show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});
////////////////////////////////////////////////////////////



client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**🎛 **");

}
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message',  (message) => {
        if(message.content.startsWith('$slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('$boom')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let bombs = [
    'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
    'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
	'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
    'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
	'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
	'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
    'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
	'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
	'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
    'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
	'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
	'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
    'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
	'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
	'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
    'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
	'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
	'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
    'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
	'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
	'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
    'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
	'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
	'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
    'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
	'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
	'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
    'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} لقد تم تطير الجبه بنجاح  جبهتك طارت ${user.username}!`,
      image: {
        url: bombs[Math.floor(Math.random() * bombs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('$sad')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let sads = [
    'https://media.giphy.com/media/3oriO4SMR6ThimOQbS/giphy.gif',
    'https://media.giphy.com/media/QhCAwDXZ0BltK/giphy.gif',
	'https://media.giphy.com/media/Q8FaD6GjQ97jO/giphy.gif',
    'https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif',
	'https://media.giphy.com/media/VqcflcXbbud2M/giphy.gif',
	'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
    'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
	'https://media.giphy.com/media/Txh1UzI7d0aqs/giphy.gif',
	'https://media.giphy.com/media/GyNeHf5IrpQNG/giphy.gif',
    'https://media.giphy.com/media/lKWlXRBGltz2g/giphy.gif',
	'https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif',
	'https://media.giphy.com/media/vzpy2NjOKdeyk/giphy.gif',
    'https://media.giphy.com/media/jRtGjzkm8JbRC/giphy.gif',
	'https://media.giphy.com/media/iyfeJqd6NLNK0/giphy.gif',
	'https://media.giphy.com/media/z2ug5EHHBuFaM/giphy.gif',
    'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
	'https://media.giphy.com/media/5bukWFXJ6pn5S/giphy.gif',
	'https://media.giphy.com/media/13RfBpyqVyvIME/giphy.gif',
    'https://media.giphy.com/media/CL2Y9t4YQbp2U/giphy.gif',
	'https://media.giphy.com/media/3ov9ka1OzbTGjQtCXC/giphy.gif',
	'https://media.giphy.com/media/l3vR11Mr4XpqhtSHm/giphy.gif',
    'https://media.giphy.com/media/l2R08A0HfJkV2lwQg/giphy.gif',
	'https://media.giphy.com/media/3o6YghZV15YGZoOtIk/giphy.gif',
	'https://media.giphy.com/media/8LM1P6bkXTyhy/giphy.gif',
    'https://media.giphy.com/media/l4FGooziZSanyKS3u/giphy.gif',
	'https://media.giphy.com/media/4TnZKIJHMhjKh3mIB1/giphy.gif',
	'https://media.giphy.com/media/l0HlyXP3OkdhvO61G/giphy.gif',
    'https://media.giphy.com/media/SXCQWrsob9TGg/giphy.gif',
    'https://media.giphy.com/media/6nYwftjsGdKgOXB5C4/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} حزين بسببك او زعلان منك ${user.username}!`,
      image: {
        url: sads[Math.floor(Math.random() * sads.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('$hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
	'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
	'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
	'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
	'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
	'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
	'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
	'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
	'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
	'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
	'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
	'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
	'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
	'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
	'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
	'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
	'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
	'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
	'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
	'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
	'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
	'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
	'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
	'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
	'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
	'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
	'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك حضن او ضمه ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('$kiss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let kiss = [
    'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
    'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
    'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif',
	'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
	'https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
	'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
	'https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif',
	'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
	'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
	'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
	'https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif',
	'https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif',
	'https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif',
	'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
	'https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif',
	'https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif',
	'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
	'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
	'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
	'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
	'https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif',
	'https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif',
	'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
    'https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username}اداك قبله ا�� بوسه ${user.username}!`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('$miss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let misss = [
    'https://media.giphy.com/media/3o6vXUgk6M0h07MnuM/giphy.gif',
    'https://media.giphy.com/media/NfOD0Bv11XnhK/giphy.gif',
    'https://media.giphy.com/media/2Jl7a8ixNlNHa/giphy.gif',
    'https://media.giphy.com/media/WkNXHaiV9HLji/giphy.gif',
    'https://media.giphy.com/media/3DiUM4dGYyali/giphy.gif',
    'https://media.giphy.com/media/17CdXoPQo7Un6/giphy.gif',
    'https://media.giphy.com/media/pjgaGMqsNhjhe/giphy.gif',
    'https://media.giphy.com/media/qdhgMbi5mwS9W/giphy.gif',
    'https://media.giphy.com/media/xTgJVYEHoVzpe/giphy.gif',
    'https://media.giphy.com/media/o1UKv4TutEOUo/giphy.gif',
    'https://media.giphy.com/media/3o6QLcNZgGKvFBluKs/giphy.gif',
    'https://media.giphy.com/media/to8AmZ3lEUhqg/giphy.gif',
    'https://media.giphy.com/media/3o6QKXms0mJznYVkm4/giphy.gif',
    'https://media.giphy.com/media/148LYpgc9AIUdW/giphy.gif',
    'https://media.giphy.com/media/4MDnmxVxCZcYM/giphy.gif',
    'https://media.giphy.com/media/5XHHIFJZpQsXS/giphy.gif',
    'https://media.giphy.com/media/3o7TKzEQfYQ7inapoI/giphy.gif',
    'https://media.giphy.com/media/l2Je61TcDeJ4ZOIyk/giphy.gif',
    'https://media.giphy.com/media/3o6Mb3mYI1yuqEwgFi/giphy.gif',
    'https://media.giphy.com/media/mfAGXwxCd3D8Y/giphy.gif',
    'https://media.giphy.com/media/l0HlFinR4G1JvptjG/giphy.gif',
    'https://media.giphy.com/media/9iVgOohm2SKT6/giphy.gif',
    'https://media.giphy.com/media/26gsj4kyT3LwhPufK/giphy.gif',
    'https://media.giphy.com/media/116mAogyorg84U/giphy.gif',
    'https://media.giphy.com/media/l2ZDOR1uY9yo6MJyM/giphy.gif',
    'https://media.giphy.com/media/l2ZDWLIIZLhLiuMSs/giphy.gif',
    'https://media.giphy.com/media/OT89Nuhy3GAFbW359x/giphy.gif',
    'https://media.giphy.com/media/82AkGaEtqrybM2RFSh/giphy.gif',
    'https://media.giphy.com/media/1o1ouZSWwFVwysKcnm/giphy.gif',
    'https://media.giphy.com/media/8mqyDwYRdzdRof6fzu/giphy.gif',
    'https://media.giphy.com/media/3oriO0bDWiobwAWqGY/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اشتاق اليك كثيرا  ${user.username}!`,
      image: {
        url: misss[Math.floor(Math.random() * misss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('$love')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} :heart:  يعبر لك عن حبه الحقيقي   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});




 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('•🔰|Name» الإسم',`${member}`)
        .addField('•🌹|Welcome » نورت السيرفر' , `Welcome to the server, ${member}`)
        .addField('•🆔| User » اي دي العضو', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)                     
                                     .addField('•🔮|Server Name » اسم السيرفر', `${member.guild.name}`,true)
    .addField('•🕣|Time Create » مدة انشاء حسابك', member.user.createdAt.toLocaleString(), true)
 
                                       
   
      channel.sendEmbed(embed);
});

//////////////////////////

client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content.startsWith( "$support")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  3rb™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':click here')
.setURL('https://discord.gg/XBs6New')

message.channel.sendEmbed(embed);

}
});


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

////////////////////////

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "$roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});


client.on("message",async msg => {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
  let Alpha = '$';//البرفكس
  if(msg.content.startsWith(Alpha + "croom")){//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.reply("**You Don't Have Administrator Permission**").then(a => {
      a.delete(2222)
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    if(!msg.guild.members.get(client.user.id).hasPermission('ADMINISTRATOR')) return msg.reply("**I'm Don't Have Administrator Permission**").then(b => {
      b.delete(2222)
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    let fltr = m => m.author.id === msg.author.id
    let name = '';
    //Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    await msg.reply("**اكتب اسم الروم الان**").then(e => {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      msg.channel.awaitMessages(fltr, {//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
        time: 60000,
        max:1
      })
      .then(co => {
      name = co.first().content
      co.first().delete();
      let type = '';
      e.edit(`${msg.author},**اكتب نوع الروم الان | Text Or Voice**`).then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 600000,
        max: 1
      })
      .then(co => {
        type = co.first().content
        co.first().delete();
        e.edit(`${msg.author},**هل انت متاْكد؟**| ✔ | | ❌ |`).then(od => {
          od.react("✔")
          .then(()=> od.react("✔"))
          .then(()=> od.react("❌"))
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
          //Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
          let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
          let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
          reaction1.on("collect", r => {
            msg.reply("**تم صنع الروم بنجاح ✔**").then(op => {
              op.delete(2222)
              od.delete(2222)
              msg.guild.createChannel(name,type);
            })
          })    
          reaction2.on("collect", r => {
            msg.reply("**تم الغاء صنع الروم بنجاح ✔**").then(de => {
              de.delete(2222)
              od.delete(2222)
            })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
          })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ  
        })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
      })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
    })//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
  }//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ
})//Alpha Codes & ּا̍ڵــٿــڔٰ̍ا̍ ا̍ڪــڛۜ





client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content.startsWith( "$web")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  3rb™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':click here')
.setURL('http://www.3rb-bot.tk/')

message.channel.sendEmbed(embed);

}
});

client.on('message', async message => {//alpha codes & Mrx -Dev
                    if (message.content.startsWith(prefix + 'crole')) {//alpha codes & Mrx -Dev
                        let args = message.content.split(' ').slice(1);//alpha codes & Mrx -Dev
                        if (!args) return message.reply('Type Name Role') //alpha codes & Mrx -Dev
                        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                        await message.channel.sendMessage(`➕ | To Create Role
:x: | To Cancel the process`).then(e => {//alpha codes & Mrx -Dev
                            e.react("➕")//alpha codes & Mrx -Dev
                            .then(()=> e.react("➕"))//alpha codes & Mrx -Dev
                            .then(()=> e.react("❌")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
                            let reaction1Filter = (reaction, user) => reaction.emoji.name === '➕' && user.id === message.author.id;//alpha codes & Mrx -Dev
                            let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
                            let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
                            let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
                            reaction1.on("collect", c => {//alpha codes & Mrx -Dev
                  message.guild.createRole({
                    name : args.join(' '),
                    permissions : [1]
      
                })
                  e.edit(`Role Created ! :heavy_check_mark:`).then(g => {
                    g.delete(5000)
                    message.delete()
                                    })
                                }
                  
                                    )//alpha codes & Mrx -Dev
                                    reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                                      e.edit('**Successfully Canceled :x:**').then(c => {
                                        c.delete(5000)
                                        message.delete()
                                        
                        })
                      })
                    }
                        )}
                        
                })



//////

client.on('guildCreate', guild => {
client.channels.get("570819747097083904").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("570819747097083904").send(`❎ **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes

 
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"top-servers")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});



/////////////////////////////////

////

const devs     = ["530062292969062412"];
let mtickets   = true;
let tchannels  = [];
let current    = 0;


client.on('ready',async () => console.log(`   - " ${client.user.username} " , Tickety is ready to work.`));
client.on('message',async message => {
    const emojis   = { yes: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'yes')}`, wrong: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'wrong')}`,arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };
    if(message.author.bot || message.channel.type === 'dm') return;

    let args = message.content.split(" ");
    let author = message.author.id;
var command = message.content.toLowerCase().split(" ")[0];
    	if(command == prefix + 'help-ticket') {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setColor("#36393e")
            .addField(`${emojis.arrow} لعمل تكت, \`${prefix}new\``, `» Syntax: \`${prefix}new [Reason]\`\n» Description: **لعمل روم فقط يظهر لك ولأدارة السيرفر.**`)
            .addField(`${emojis.arrow} قائمة الأوامر, \`${prefix}help\``, `» Syntax: \`${prefix}help\`\n» Description: **يظهر لك جميع اوامر البوت.**`)
            .addField(`${emojis.arrow} لإيقاف الأعضاء من عمل تكتات, \`${prefix}mtickets\``, `» Syntax: \`${prefix}mtickets [Disable/Enable]\`\n» Description: **لجعل جميع اعضاء السيرفر غير قادرون على عمل تكت.**`)
			.addField(`❯ لأقفال جميع التكتات المفتوحة, \`${prefix}deletetickets\``, `» Syntax: \`${prefix}deletetickets\`\n» Description: **لمسح جميع رومات التكتات المفتوحة في السيرفر**`)
            .addField(`${emojis.arrow} لقفل التكت المفتوح, \`${prefix}close\``, `» Syntax: \`${prefix}close\`\n» Description: **لأقفال تكت.**\n\n للمزيد من المعلومات تواصل مع احد ادارة سيرفر عرب بوت.`)
            await message.channel.send(`${emojis.yes}, **هذه قائمة بجميع اوامر البووت.**`);
            await message.channel.send(embed);
    } else if(args[0].toLowerCase() === `${prefix}new`) {
        if(mtickets === false) return message.channel.send(`${emojis.wrong}, **تم ايقاف هذه الخاصية من قبل احد ادارة السيرفر**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emojis.wrong}, **البوت لا يملك صلاحيات لصنع الروم**`);
		console.log(current);
		let openReason = "";
		current++;
      message.guild.createChannel(`ticket-${current}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
	      		message.channel.send(`${emojis.yes}, **تم عمل التكت.**`);
		if(args[1]) openReason = `nسبب فتح التكت , " **${args.slice(1).join(" ")}** "`;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor("#36393e")
		.setDescription(`**انتظر قليلا الى حين رد الادارة عليك**${openReason}`);
		c.send(`${message.author}`);
		c.send(embed);
	});
    } const tickets = require('./tickets.json')
if (message.content.toLowerCase().startsWith(prefix + "mtickets enable")) {
    if (!tickets[message.guild.id]) {
        tickets[message.guild.id] = {
            tickets: 'On'
        }
        fs.writeFile("./tickets.json", JSON.stringify(tickets, null, 4), err => {
            if (err) throw err;
            message.channel.send("Done!")
        })
    } else {
        if (tickets[message.guild.id] === "On") return message.channel.send("it's already on!")
        tickets[message.guild.id].tickets = "On"
        fs.writeFile("./tickets.json", JSON.stringify(tickets, null, 4), err => {
            if (err) throw err;
            message.channel.send(`Done`)
        })
    }
}
if (message.content.toLowerCase().startsWith(prefix + "mtickets disable")) {
    if (!tickets[message.guild.id]) {
        tickets[message.guild.id] = {
            tickets: 'Off'
        }
        fs.writeFile("./tickets.json", JSON.stringify(tickets, null, 4), err => {
            if (err) throw err;
            message.channel.send("Done!")
        })
    } else {
        if (!tickets[message.guild.id]) return message.channel.send(`Please use \`${prefix}setup\` first`)
        if (tickets[message.guild.id] === "Off") return message.channel.send("it's already Off!")
        tickets[message.guild.id].tickets = "Off"
        fs.writeFile("./tickets.json", JSON.stringify(tickets, null, 4), err => {
            if (err) throw err;
            message.channel.send(`Done Tickets Are now ${tickets[message.guild.id].tickets}`)
        })
    }

    } else if(args[0].toLowerCase() === `${prefix}close`) {
		if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`${emojis.wrong}, **هذا الروم ليس من رومات التكت.**`);
		
		message.channel.send(`${emojis.yes}, **سيتم اغلاق الروم في 3 ثواني من الاَن.**`);
		tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
		setTimeout(() => message.channel.delete(), 3000);
	} else if(args[0].toLowerCase() === `${prefix}restart`) {
		if(!devs.includes(message.author.id)) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`);
		message.channel.send(`${emojis.yes}, **جارى اعادة تشغيل البوت.**`);
		client.destroy();
	} else if(args[0].toLowerCase() === `${prefix}deletetickets`) {
		let iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`${emojis.yes}, **تم مسح \`${iq}\` من التكتات.**`);
			}
		}
	}
});
        








client.on('message',async message => {
var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };

     		var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'help') {

        
       message.channel.send(`** • قـــائمة الاومر ** :
        ${emojis.arrow}, **| ${prefix}help-ticket ⇏ اوامر التكت
        ${emojis.arrow},  | ${prefix}help-general ⇏ اوامر العامة
        ${emojis.arrow},  | ${prefix}help-games ⇏ اوامر الالعاب
        ${emojis.arrow},  | ${prefix}help-admin ⇏ اوامر الادار 
        ${emojis.arrow},  | ${prefix}help-active ⇏ الرومات اليجب عملها
**`)


   }

});


client.on('message',async message => {
var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };
var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'help-admin') {
        
       message.channel.send(`** • قـــائمة الاومر ** :
        ${emojis.arrow}**| $ban < mention > ➾ حظر عضو من السيرفر
        ${emojis.arrow}  | $role <mention> <rank> ➾ لاعطاء شخص رتبة
        ${emojis.arrow}  | $kick <mention > ➾ لطرد عضو من السيرفر
        ${emojis.arrow}  | $roleremove <mention> <rank> ➾ لسحب الرتبة من شخص
        ${emojis.arrow}  | $role humans <rank> ➾ لاعطاء البشر رتبة
        ${emojis.arrow}  | $role bots <rank> ➾ لاعطاء رتبة للبوتات
        ${emojis.arrow}  | $role all <rank> ➾ لاعطاء الكل رتبة
        ${emojis.arrow}  | $clear ➾ تنظيف الشات
        ${emojis.arrow}  | $mute < mention > ➾ اسكات عضو
        ${emojis.arrow}  | $unmute <mention> ➾ لفك الاسكات كن الشخص
        ${emojis.arrow}  | $lock ➾ اقفال الروم
        ${emojis.arrow}  | $unlock ➾ فتح الروم
        ${emojis.arrow}  | $hide ➾ اخفاء الروم
        ${emojis.arrow}  | $show ➾ لاظهار الروم
     **`)



   }

});


client.on('message',async message => {
var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };
var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'help-general') {
      
       message.channel.send(`**
        ${emojis.arrow},  | $support ➾ لدخول سيرفر السبورت
        ${emojis.arrow},  | $invite ➾ لدعوة البوت
        ${emojis.arrow},  | $server ➾ لمعرفة معلومات السيرفر
        ${emojis.arrow},  | $ping ➾ لمعرفة سرعة اتصالك
        ${emojis.arrow},  | $avatar ➾ لاخذ صورتك
        ${emojis.arrow},  | $id ➾ لمعرفة الهوبة الشخصية
        ${emojis.arrow},  | $member ➾ معرفة حالات الاعضاء
        ${emojis.arrow},  | $date ➾ معرفة الوقت
        ${emojis.arrow},  | $bot ➾ لمعرفة معلومات البوت
        ${emojis.arrow},  | $user ➾ لمعرفة كم لك في الديسكورد
        ${emojis.arrow},  | $roll <number> ➾ لعمل قرعة
        ${emojis.arrow},  | $roles ➾ عرض رومات السيرفر
        ${emojis.arrow},  | $points
   **`)

}

});



client.on('message',async message => {
var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')}` };
var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'active') {
      
       message.channel.send(`**
        ${emojis.arrow},  | room \`log\` ➾ تفعيل اللوق
        ${emojis.arrow},  | room \`welcome\` ➾ للترحيب
        ${emojis.arrow},  | room \`suggestions\` ➾ لتشغيل امر الاقتراح \`$sug\`


   **`)

}

});

///////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////



client.on("message", message => {
  var prefix = "$";
  if(message.content.startsWith(prefix + "oe")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });


const Client = new Discord.Client();
const SQLite = require('sqlite'); // SQLite Package to read & write to sql files and databases
const path = require('path'); // Path Package to get paths easily
const moment = require('ms'); // SQLite Package to read & write to sql files and databases
const ids = ["530062292969062412"]
SQLite.open(path.join(__dirname, 'profile.sql')) // Read SQL file



client.on("message", message => {
    var prefix ="$";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(`${args}\n ${m}
**by server:** ${message.guild.name}
`);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });



const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credits")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**Only Numbers | :x:**');
    if(mention.bot) return message.channel.send(`**Please Include Right name | :x:**`);
    if(mention.id === message.author.id) return message.channel.send('**You Cant Translate credits to youself**');
    if(credits[author].credits < balance) return message.channel.send('**Your balance is not enough for that | :x:**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**Write This Number \`${number}\`**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**You Translate \`${balance}\` Coins To ${mention} | :atm:**`);
          mention.send(`**:atm:  |  Transfer Receipt 
\`\`\`You have received ${balance} from user ${mention} (ID:${mention.id})\`\`\``)
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`**Timed Out | :x:**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**Please Include Right name | :x:**`);
    message.channel.send(`**${message.author.username}, your :credit_card: balance is $\`${credits[mention.id].credits}\`.**`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**You need to wait a Day | :x:**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**Write This Number \`${number}\`**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:moneybag:|${message.author.username} has transalte \`${daily}\`  to ${args} **`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: ${message.author.username} you received your :yen:  \`${daily}\`  daily credits!**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      console.log("Happy New Day!").catch();
    }, ms("1d"));
  }
});





        client.on('message', message => {
            const credits = require('./credits.json');

            let mention = message.mentions.users.first()
             let amout = message.content.split(" ").slice(2).join("")
             if(message.content.startsWith(prefix + 'add')) {
                                if(!message.author.id === '530062292969062412') return;
              if(!mention) return message.channel.send(`You Should Mention The Target, Example: ${prefix}add @Example 1000`);
                if(!amout) return message.channel.send(`You Should Write The Amout Of Wins, Example: ${prefix}add @Example 1000`)
                             if (!credits[mention.id].credits) credits[mention.id].credits = 200
      credits[mention.id].credits += parseInt(amout)
               message.channel.send('Done')

             }
                                              fs.writeFile("./credits.json", JSON.stringify(credits) ,(err) =>{
          if (err) console.log(err.message);
      });
        });










client.on('message', message => {
  var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')} ` };

     if (message.content === (prefix + "hi")) {
                    message.channel.send(`
                                         \`-\`InviteReward\`-\`


5invite ${emojis.arrow} 75k credit

7invite ${emojis.arrow} 100k credit

\`#\`Legend Staff`)
     }
});


client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage("args")
  })
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});


client.login("NTUwNzAxNTY0NjA4OTA1MjE3.XOhE9A.FZe6awOBQ3tsutvuqMOX53RW_y8");
	
	
	
	
	
	
	
	
	
