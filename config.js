//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "50947805453";
global.owner = process.env.OWNER_NUMBER || "50947805453";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

GLOBAL.SESSION_ID=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUloTWN4cGpZaTVBak9MbThiNjZIODVEd005Z3pMWDdGSzhnSEdSUlJtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVFIeGJHMDJaRng0bUl5a0pmbmh3Q3ZMVDBQVXUzbnNoVUx2WkFzU0ZRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSXBvaUFKRjZuYnpMeGJtQlRrbThPbjNGMnZrUWdrUk5UZ20zYzh0RUZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNzl0ZlB5YTh0bzg2VDJyY1Azb1FUcDV6d3RlSlFxR1BqUFJjNDFhNDJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNQVcxZ2w3T1hkNlhFTDIyR0lLOWF6bDR6K3ZUcEEyazZYM1dqNXVsRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRtRWs3OUw0ZDFwWm1kK3E4MUJId3krZzdaOHVjNTVuZVk0eEoya1BJU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NNUTJWYmRldHZ4Yi9nN3hIaTdFbnd1RGI3QmhLMWwyNGdISC81aEsyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVVidzJIR1VwdDFTVTJIQWJHTUVzYWczdEZBbnlOK1plbVlYZCtjTHFTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwVkFQRzdEMFplaEpXWVJWU1huMlRid1orUjk0WjVlZTZQWTlVRXVJQzVKdENEMzY3b284UkZ4ekdlZURkYlgvblE0c0JmU1JCaWppbHRTaU13OGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJZVnptY3BDU204b2pVdVY1cG1FWHNYYzByZEFuejk0cHpSd284R3gyNGY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKR3RISzYwNVJ6Q3dCUHZfdFowWEJ3IiwicGhvbmVJZCI6IjZjNGZiN2VkLWMwYTctNGY4OS1iMDlkLWFmMWRiZDM4YzFmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHckxsNG9pRzFSTVdKck42eWZuNnltdHErS0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUIwUUR5VmVvcm5udFNqSUl0anFuUjlDb1lRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBEU1JHNFJMIiwibWUiOnsiaWQiOiI1MDk0NzgwNTQ1Mzo2OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqp8J2ar/CdmrvwnZqw8J2auCDwnZqz8J2auPCdkIoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1dXdid0dFT2k1OUx3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNhdUlFNkpDWWczaHJxMk1EbDlCSHhsWVlLMFhWdmN1eDMyQUpscytleDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJRZ2JUTmo5a1lTbXp4Q2RsMXRNZkxXdEVFWnBYU2c1d0VHM2FVNC9XOEpQajZONkJvYXBVNHJ5bnNCMk5EMzN6dzlmeDBsYW1IV3JiUDJIN1VCZkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUWXZhWTVwRTRjV1hvS2VwNEt5L2dDNkdpTjRDQm9hamQwMzM3am9MUktkQm1BZzI0akdjaXVMWXJsaThWRU4vNHl6akd3MWd2bHZuQkk0Zm5DMXhoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ3ODA1NDUzOjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhHcmlCT2lRbUlONGE2dGpBNWZRUjhaV0dDdEYxYjNMc2Q5Z0NaYlBuc2YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzgzNDk4MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQStQIn0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐁𝐎𝐓𝐈𝐏 𝐌𝐏𝐊`",
  author: process.env.PACK_AUTHER || "BLADE-MD-V2",
  packname: process.env.PACK_NAME || "𝐁𝐎𝐓𝐈𝐏 𝐌𝐏𝐊",
  botname: process.env.BOT_NAME || "𝐁𝐎𝐓𝐈𝐏 𝐌𝐏𝐊",
  ownername: process.env.OWNER_NAME || "Alex-tv",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
