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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_21_38_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnNHemtJUHFCOUVpdTlab3ZrMkRNQ2lvNFFjREphdGV4eDBJTWhpK1RNVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ4NTQ2NDI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzhBRjlFM0UxQ0YyMDM4RjdGMTQxNTU2NEJFMjcwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5ODAyODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ4NTQ2NDI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTYwRkU3MkNEOTU5NkE2QkU4RDYyNTM4M0FDQzg2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5ODAyODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEpqajkydnhSWm1OakZEUU0tV2VOd1wiLFxuICBcInBob25lSWRcIjogXCIxOTQzN2MzMS03NmRmLTQ4ZDYtOTk1Yi0wMTM2NmRmMGQ1OGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTA1LFxuICAgICAgMTU1LFxuICAgICAgMTQ2LFxuICAgICAgOTgsXG4gICAgICAyMzUsXG4gICAgICAyMzQsXG4gICAgICAxODQsXG4gICAgICAxMzIsXG4gICAgICAyNDYsXG4gICAgICAxNTksXG4gICAgICAxOCxcbiAgICAgIDQ0LFxuICAgICAgNTEsXG4gICAgICAxODIsXG4gICAgICAxNTIsXG4gICAgICAxNjgsXG4gICAgICAxNTksXG4gICAgICA4NyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDEyNSxcbiAgICAgIDE1MCxcbiAgICAgIDc3LFxuICAgICAgMTk4LFxuICAgICAgMjAzLFxuICAgICAgMjUzLFxuICAgICAgMTI3LFxuICAgICAgMyxcbiAgICAgIDEwNSxcbiAgICAgIDM3LFxuICAgICAgOTcsXG4gICAgICA4NSxcbiAgICAgIDE5OSxcbiAgICAgIDE2MCxcbiAgICAgIDIyMixcbiAgICAgIDEyNCxcbiAgICAgIDE5MCxcbiAgICAgIDU1LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpBVzRYWUs2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ4NTQ2NDI2OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTg1NjI1ODk5MDIyMjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUzN6NDBFRUxTdnlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1MVEs0QnhCMVpTU1lnczc5anM5ZFgzZ2h0RHg1MDNsV3luekRHTjdkQVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXlaSU9kcWdhcW5ZVFhCeW9zZUgzQktTeUNNMGJodDlZTlVPSGt3b050NDBPUlorSndzRU0yc0NnS2h4YnZDT0RqcEYybHdESFFoWFE5d1g0N2ttRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZXJ2NXlkRE9acUtDTkJhMWNQSjRGQXRmNzBFTWJwTXZNb2pPTGxwcFBQb2JraGsyazJoU3lJbVJRUXB6VmtlTTZ5OUxRZ3ZzYlJmR1BkeWRBZ0xNQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODU0NjQyNjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5ODAyNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPOUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU85Qi5qc29uIjogIntcImtleURhdGFcIjpcIkkyWThEay9kOUJMbDhnZnhxOG53L01nQWRlNDlPK3VOZlRIZXRxRjV1ZHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMjMwNjI3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTgwMjg0MTc4XCJ9Igp9"
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
