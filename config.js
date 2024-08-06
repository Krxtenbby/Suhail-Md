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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_08_12_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHEzVml1SkxReU43NDgwSzhYRXpFdjBocHUzakJPSU1ZaDRZbzhRQzFodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNm56WVJHc2xTclNIQ0FQMzFpaDBYd1wiLFxuICBcInBob25lSWRcIjogXCIyZTE2MWRkNC03NjRlLTRmOTgtYjhjNC1kODlmNjVhZjc5M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxMjMsXG4gICAgICAyMjgsXG4gICAgICAyLFxuICAgICAgNTksXG4gICAgICAxNzMsXG4gICAgICA5MixcbiAgICAgIDEzNSxcbiAgICAgIDgyLFxuICAgICAgMTI4LFxuICAgICAgNzYsXG4gICAgICAxNjUsXG4gICAgICA0OCxcbiAgICAgIDExNSxcbiAgICAgIDg0LFxuICAgICAgNDcsXG4gICAgICAyMjcsXG4gICAgICAxNyxcbiAgICAgIDE3OSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMCxcbiAgICAgIDIyNSxcbiAgICAgIDEwLFxuICAgICAgMzksXG4gICAgICAxMTEsXG4gICAgICA2MCxcbiAgICAgIDE5MSxcbiAgICAgIDEzNSxcbiAgICAgIDExNixcbiAgICAgIDIzOSxcbiAgICAgIDEyMixcbiAgICAgIDEzNyxcbiAgICAgIDI5LFxuICAgICAgMjAyLFxuICAgICAgMTk1LFxuICAgICAgMTU4LFxuICAgICAgMTQxLFxuICAgICAgMjE0LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkd0bi9RRkVPNjF4N1VHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4UzQ1Z2Y5cTV2ZmVjQ09mOTczTEhvcmVmaWJsSWg1THpKRVkyM0FmcmtnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh2ZFpldnkvTldiQ1htTzRjd3k2ZHJtRGYrQjZ4NE1rc3lHZWRpWjBLS3IvMVFwQXRCSGRXRHFBdmxwYmdpMklZT25qZ2tRTnhoQVoxYWJHMGZHa0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFKZStLZjVwV3Budnl5MFE1RkFsbUthaENrcFFmL1hWS3p1RWtTUk83R3VmM055LzRUa2lNSVhvaHh4MzV5b05sazJTTjdBbTR6U2kveG9uZC9OSkRRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0ODU0NjQyNjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzE4NTYyNTg5OTAyMjI6MjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ4NTQ2NDI2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkzMTk1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt6OFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3o3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzF2d245aE10VUJPbGczZmc1NkxEZy93YW1ZQXJralpENmpVMHZscWRXRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg1OTYwNTkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5Mjc3MjM0NDJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLejguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzRTdDSXhpNHdRcGNpNmdCaTdNZzVJWEgxSUZTQlMweVMvL0MvZFAvVXlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODU5NjA1OTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjkyOTYxNTAyNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt6OS5qc29uIjogIntcImtleURhdGFcIjpcImZ3Zkl6UURCb1JYS2FLbllNZmhzbDRGRGlQODkrR1pLZFdRcnBIYUhXZHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NTk2MDU5MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTMxOTM5ODM0XCJ9Igp9"
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
