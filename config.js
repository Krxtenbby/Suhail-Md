const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Test:test@cluster0.ib19qwv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://krxten_user:obmPS2LoznGw16t91Y32kBdVeTGspnAn@dpg-cqmihb2j1k6c73b12090-a/krxten"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349048546426";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_18_45_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwdXhqWXhxWjNpdTAwTlc1TEM5MGJ6OUlmU25xWXZnTzl4cDRUaWR0NUNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfQ2ZaeWQ2cFIzeWt0Ti1IaVVlMXpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1MDliMTgxLTdkZGUtNGYwMC04ZDkzLWU3ZmU2ZDA2Mzg1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE3NSxcbiAgICAgIDY3LFxuICAgICAgMjAyLFxuICAgICAgMTQzLFxuICAgICAgODYsXG4gICAgICA0NyxcbiAgICAgIDEzMixcbiAgICAgIDE3MixcbiAgICAgIDE2MCxcbiAgICAgIDE3MSxcbiAgICAgIDIxOSxcbiAgICAgIDEzOCxcbiAgICAgIDE2NSxcbiAgICAgIDE2MSxcbiAgICAgIDQ5LFxuICAgICAgMTM3LFxuICAgICAgNDEsXG4gICAgICAxMyxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMTA2LFxuICAgICAgMjEwLFxuICAgICAgMjA0LFxuICAgICAgNTMsXG4gICAgICAyNDksXG4gICAgICAyMTksXG4gICAgICAxNzgsXG4gICAgICAxOTUsXG4gICAgICAyMzQsXG4gICAgICAxODIsXG4gICAgICA3NyxcbiAgICAgIDg5LFxuICAgICAgNjEsXG4gICAgICAyMzUsXG4gICAgICAyMzQsXG4gICAgICAxNjIsXG4gICAgICA4NSxcbiAgICAgIDUwLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhcnQ2MEVFTDY3eExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiKzVZTUxueUE5Rm82SExIZ0MwZVBQNXpuUm9XcmNhSlora3laSEtlckdVaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3Nm9VbUJqTFFFVmVnclk4VjRRSXdPOURxWUNvRVlUaTdLbk5ZdUhnTmg4MnpndHFVbjBOL0JDd2Nta1RnMHIzd0pEUWJCZ3I4WlU2VEtjVGk4dTFDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCTmxOd0ZkSFg1RWpIUlJBK2VPWlFyemVvK2luQS90NHVtWTBXdm94QkpsYnV4cWhrSFVjano5d1NsQ3JxWVVxc0tHdTF0THBiWWJuMVlEM040MzZEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2ODc5MjE3ODYzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcmVzaWRlbnQgQmx1Zml4IVwiLFxuICAgIFwibGlkXCI6IFwiNzIzNDQ5ODI4MzkzNDE6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2ODc5MjE3ODYzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODgzNTIzXG59Igp9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Blufix",
  packname: process.env.PACK_NAME || "4pf",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-prByDWg93neCj5TZsFgNT3BlbkFJqTrS1RGjYF8k8NoOpaoX",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "2c375de0f96d53e85561d52fd85abbba";
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
