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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_07_03_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdTVTNsWm80MlBjVVpLM1JQY1FWQjZNZytINEtxNkMzVTJjc3RBM3k4M2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFkNnE0Nm5CUTNxV3c2UmZSYVQ2ZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZlZTczMDMtOGExMS00ZjEzLWFiNmYtZmEzMzhmOWY4MDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTE2LFxuICAgICAgMjExLFxuICAgICAgNixcbiAgICAgIDYwLFxuICAgICAgMTMsXG4gICAgICAxMDMsXG4gICAgICAxNjQsXG4gICAgICAzMyxcbiAgICAgIDQ4LFxuICAgICAgMTkwLFxuICAgICAgMTE2LFxuICAgICAgNDQsXG4gICAgICA4MixcbiAgICAgIDc4LFxuICAgICAgNzMsXG4gICAgICAyMTYsXG4gICAgICA4LFxuICAgICAgMTYzLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAxNjcsXG4gICAgICA3NCxcbiAgICAgIDI1LFxuICAgICAgOTUsXG4gICAgICAxMzYsXG4gICAgICAxODUsXG4gICAgICAxMzEsXG4gICAgICAxMjEsXG4gICAgICAyMDgsXG4gICAgICA3MyxcbiAgICAgIDI1MCxcbiAgICAgIDE4MixcbiAgICAgIDEyMixcbiAgICAgIDE2MCxcbiAgICAgIDIwOSxcbiAgICAgIDEwMSxcbiAgICAgIDI0MCxcbiAgICAgIDE5LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHdG4vUUZFTGVWeDdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFM0NWdmOXE1dmZlY0NPZjk3M0xIb3JlZmlibEloNUx6SkVZMjNBZnJrZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ZC96Vjk5Mm10YnhaVFZacnIzV1BjYjA3Y0JXRDhzNmtoWFhOK2psQmtRdWMvck1FZE5LK2hCak9GelBYWDVLbitBcXIvT1hUWU8yazhJbHA5R1FEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1MHlBWlJhbXkwdWZ5YWZCcGFFcTlYNEVaOUp3MWVRZGZHVzJmRkgzN1ZlbzY4ZHJzUmxBN0l2bitHRnBoUjlzSndCNHk1cTlkNDF2UmxYNVJDcVRqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDg1NDY0MjY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxODU2MjU4OTkwMjIyOjI0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODU0NjQyNjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5Mjc4MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLejdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt6Ny5qc29uIjogIntcImtleURhdGFcIjpcIkcxdnduOWhNdFVCT2xnM2ZnNTZMRGcvd2FtWUFya2paRDZqVTB2bHFkV0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NTk2MDU5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTI3NzIzNDQyXCJ9Igp9"
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
