const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923476046075";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_40_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJkaVdWQ0FFNTk3cjJHK3RGY0IzTlVQTnh5aWhucTVHNXFKeXpIdVlHaW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1NeF81eFE5VDFpQ09kTnB3djNsVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmRhZTg5YjItY2VkYy00MjFmLWFlMWItNzk5ZTJiNTVmMzBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMjA0LFxuICAgICAgMTU5LFxuICAgICAgMjA2LFxuICAgICAgMjA0LFxuICAgICAgMTIwLFxuICAgICAgMTY3LFxuICAgICAgMTksXG4gICAgICAxNDksXG4gICAgICAyMzcsXG4gICAgICAxOTAsXG4gICAgICAyMDQsXG4gICAgICAyMDAsXG4gICAgICAyMjAsXG4gICAgICAxNjAsXG4gICAgICA3LFxuICAgICAgNjEsXG4gICAgICAxNDMsXG4gICAgICAxOTEsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDIwMyxcbiAgICAgIDE5MixcbiAgICAgIDE1NyxcbiAgICAgIDU5LFxuICAgICAgMTA2LFxuICAgICAgNDgsXG4gICAgICA4NixcbiAgICAgIDExMixcbiAgICAgIDExNyxcbiAgICAgIDE0MSxcbiAgICAgIDcxLFxuICAgICAgMTUyLFxuICAgICAgMzksXG4gICAgICAxMyxcbiAgICAgIDg3LFxuICAgICAgMTYsXG4gICAgICAyNixcbiAgICAgIDE5MyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWDJQOVFDRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc2MDQ2MDc1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MzY5NzI0MDk3MzM4Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svWS9aY0dFTkdVK2JjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0ZjT2YzbnhSRmozM3o4c2xWUmZlNzc5TW96Tkd3Z0N4RkVFejUzR29YRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOMHZWKzM5cVdyakZ4SzJKRW12T3pOZ01OaDZjL1FMNkZSdlBQTVppUnIwR05kRUtUY21WcGdMWkNRRWI0b0xmTG11ZTFHeW5zdDB4ays3N1pCb2ZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwanhxSElIMnJNaWdUUC9WTXhDazVoWU8xb2ZZeEFad25SbkZNYmtpYi8rSFBNRlhHM0FHM29IRS94V2hsZ1BJMHRXQzBEbGdXNXFmZnFXcHFSdVNEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NzYwNDYwNzU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk0MTIwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk5L1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTkvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
