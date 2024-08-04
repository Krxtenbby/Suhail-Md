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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_18_44_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFbFhpUm16RWZpRXVzb2VJeU9zaXVoWjcvc2tqcnVSaVNRNFYxVmZXb2k4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWkNCQm5FNlRxeTVvbEhYUnFsRHJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlMzg3NWRmLTNjNjAtNGIyOC05ODFhLWNiODc0YjIwMDY0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE2MSxcbiAgICAgIDI1MyxcbiAgICAgIDEyMCxcbiAgICAgIDU1LFxuICAgICAgNTQsXG4gICAgICAyNDAsXG4gICAgICAxNyxcbiAgICAgIDEwMixcbiAgICAgIDk0LFxuICAgICAgMTAwLFxuICAgICAgMjAwLFxuICAgICAgMTc1LFxuICAgICAgNzUsXG4gICAgICA1OSxcbiAgICAgIDM3LFxuICAgICAgMzAsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDI1LFxuICAgICAgOTEsXG4gICAgICAxMjMsXG4gICAgICAxNjEsXG4gICAgICA0MCxcbiAgICAgIDMsXG4gICAgICAyNDIsXG4gICAgICA5MixcbiAgICAgIDk3LFxuICAgICAgODUsXG4gICAgICAxNzIsXG4gICAgICAxNjMsXG4gICAgICAxNDEsXG4gICAgICAyNDQsXG4gICAgICAyNixcbiAgICAgIDI0NyxcbiAgICAgIDEwOCxcbiAgICAgIDQyLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRRNEwyMzJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ4NTQ2NDI2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTg1NjI1ODk5MDIyMjoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ3RuL1FGRU9TWHY3VUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhTNDVnZjlxNXZmZWNDT2Y5NzNMSG9yZWZpYmxJaDVMekpFWTIzQWZya2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZE1JbFE4WGpGekdhUkR2a2U0WElRWUNLSHlVdEluY2RJS3RrR1dWZFpoRDRkV3Q5bHRjMHZtMHJsbmZSMllHT1cwdnhSRzdQd2pvNjVnZGNKbzVTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWMrdFViTmhXaG5SdHgxNXdyVFVEOXlhUm1uQmM5MHg4Z1hOVEtlSU9qZ3pOZFFOaDVZT2p3bEgybEZPanlHd0ZpZWxFUzdxSGRwS0ZBbjRqZUZaQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODU0NjQyNjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3OTcwMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxCSS5qc29uIjogIntcImtleURhdGFcIjpcImN5a1Y1bDExcnJXQjBJUEIwdFY5aVZTeFllNWVnVkRlS1VmZm11M3gxRVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NTk2MDU5MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"
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
