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

global.warncount = process.env.WARN_COUNT || 2
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_57_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFtVThDWXpkY20vMnBVZWxXUW1OYys2ODVyNnRvZWkrelVLYThwZWtndUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZwdkxONjloVGZlYUlKUjlUcGxmeGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFhY2RlYTMtMzM5NC00YThjLWI3YzktZmIxMjJiZWQ2YzM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMjI2LFxuICAgICAgNjUsXG4gICAgICAxMjcsXG4gICAgICAyMjcsXG4gICAgICA5OSxcbiAgICAgIDEwMSxcbiAgICAgIDgsXG4gICAgICAyMTUsXG4gICAgICAyNTAsXG4gICAgICAxNTcsXG4gICAgICAzOSxcbiAgICAgIDg1LFxuICAgICAgODAsXG4gICAgICAyNTUsXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDE5LFxuICAgICAgMTY1LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAxNSxcbiAgICAgIDQ0LFxuICAgICAgMTEsXG4gICAgICAyMzUsXG4gICAgICA1OCxcbiAgICAgIDEzNyxcbiAgICAgIDksXG4gICAgICAyNDMsXG4gICAgICAyNTMsXG4gICAgICAyMTMsXG4gICAgICAyMjMsXG4gICAgICAxNTcsXG4gICAgICAyMTksXG4gICAgICA2NyxcbiAgICAgIDE4OCxcbiAgICAgIDEwOSxcbiAgICAgIDU1LFxuICAgICAgMjQsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krdG4vUUZFTHE4b0xVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFM0NWdmOXE1dmZlY0NPZjk3M0xIb3JlZmlibEloNUx6SkVZMjNBZnJrZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrS0lmdEZCWUxjWHNyQTBBZ05Hd0x0b1JpSjV2a3A1NVZPSmJlcXV2MURoZEJmRVkxemJYY2JZaUh1U0R3UEF5VWd5UWovYzBZMGFkZVNaMTdSd0FDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4RC94SGNES1J3bnlSandoaUU4c0g2cHpFK0FEdmRLWHFFOGE4aHpOSjR0ZjYvS0NoQ3doQWVRMGZLempkQmlpeTY2eDU4K25RbnJITkh5bFo5YVdDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDg1NDY0MjY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxODU2MjU4OTkwMjIyOjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODU0NjQyNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyOTM4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxCSC5qc29uIjogIntcImtleURhdGFcIjpcIkZQTWtYUkt5bnplUDlWNjY2YUtmbmNPL1ZiWW9UbkZUKzJhM1BqMUJpNms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NTk2MDU5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEJJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY3lrVjVsMTFycldCMElQQjB0VjlpVlN4WWU1ZWdWRGVLVWZmbXUzeDFFWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg1OTYwNTkxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyOTM3NjM1NTFcIn0iCn0="

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
