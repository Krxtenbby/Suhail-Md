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
global.DATABASE_URL = process.env.DATABASE_URL || ""

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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEk5c2UzS3V4SXgvMzlVQk1yTjhqR2w2OG9vUFdqWnZDU1hPdkxFSzErOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ4NTQ2NDI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOUYzNzdBMzc4MkNDMTM2ODhGMjBGOTRENDU2NkQxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyODk0MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWdLYWFVanZTVi1PdURFVzJZLXZZQVwiLFxuICBcInBob25lSWRcIjogXCIyYmE3OTM2OC05ZGFkLTRjMmQtYTU3ZC1mMTBjODI1NGFlZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMjE1LFxuICAgICAgMTkxLFxuICAgICAgMjI2LFxuICAgICAgMTYzLFxuICAgICAgNzAsXG4gICAgICAxMTksXG4gICAgICAyMTEsXG4gICAgICAyMDAsXG4gICAgICA3MixcbiAgICAgIDc0LFxuICAgICAgMTE0LFxuICAgICAgMjMzLFxuICAgICAgMTg3LFxuICAgICAgMjIsXG4gICAgICAyMjMsXG4gICAgICA3NSxcbiAgICAgIDE0MCxcbiAgICAgIDE1OSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMjM2LFxuICAgICAgNDMsXG4gICAgICA2NyxcbiAgICAgIDgxLFxuICAgICAgMTAzLFxuICAgICAgMjAsXG4gICAgICA5MCxcbiAgICAgIDIyMCxcbiAgICAgIDk0LFxuICAgICAgMjgsXG4gICAgICAyNTIsXG4gICAgICAxNTksXG4gICAgICAxMixcbiAgICAgIDI0LFxuICAgICAgMTE1LFxuICAgICAgOTEsXG4gICAgICAxODYsXG4gICAgICA5MixcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krdG4vUUZFSkNhb0xVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFM0NWdmOXE1dmZlY0NPZjk3M0xIb3JlZmlibEloNUx6SkVZMjNBZnJrZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXdDd2QzZSY3hDN1RVM0Y4SWhhWjBTa1R1OVptTEtVUGpoMlkycXlkYzVVTVhBQUgwaFJwa1hUSXo3bGJNTFVidG1CRXpNMjdXOHBQMmpES0R2RzNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5YXNPd2RBb3pGbDB1SWppVERhTFZTdEp4YzRjbmZobTlBSHd0YWh0UnRvWHNRcUppZWpVSU1LbkJBRjkxUlFmWGVEZFQ3T0Rhd1RXZmwwNEpuVlFBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDg1NDY0MjY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxODU2MjU4OTkwMjIyOjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIjRwZiBCbHVmaXgg8J+rgFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODU0NjQyNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODk0MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQkhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxCSC5qc29uIjogIntcImtleURhdGFcIjpcIkZQTWtYUkt5bnplUDlWNjY2YUtmbmNPL1ZiWW9UbkZUKzJhM1BqMUJpNms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NTk2MDU5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjg5MjAxNzA3XCJ9Igp9"  // PUT your SESSION_ID 


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
