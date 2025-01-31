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
global.sudo = process.env.SUDO || "50941220398";
global.owner = process.env.OWNER_NUMBER || "50941220398";
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

global.SESSION_ID=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxxTHZUd2VUdDQ1aE82Z3BESXdtVFlMeUE2eDM3eDJOZEJjY2FlVXFYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVRRQjlaZ3djLzhJQ0NwTlBBZm5XVW1teXEwcjZPUXZNbm9PUTQ5STFXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSkRLNHlGTUNnNnlHa3hMTzYxS09jSndBYXVmMERsay90R0pycEpDZDNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSFd3cExnajlBMWxNMTdKbmVzUFMvNkdwRW1MclBlSWNnY0hnWEpQbXdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEL0hXTjl5V1RwY0xFUzd3cUNRT3g0Y1kwaWtNdVNkRmFTV3YvSEZIRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9SZm9WUWI1NlhRWUZMckZ0OVNVdnBteHovZDJ1ZWRiRElTMzNBKytBbjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZGTFVKNEZqNFljRS9QdHNOem55aVBaN1ZzWEpjY3VBeWtxSnBSVG9HUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBDeDUzTWxFOGlDR0ExTjVUdzRvRzEvQ3dBY1U2RUE1eXlzT3A0djVUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9nTmV1ZHdOQ0ZxRTEwdGNvZm15bUs3M1hXZW5mYktlbTBpQVZUZzJTNVhKT29aZmk0VkF4SWpEb0FCQm1BTTd1WU9UMDMyRXZ2bXlnZER6OEdkWmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJmUmxubExKWHo2bHlBQkdpZGlvK2orNzIvRVJFYkJINzdKK1hZeGV5eThNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvVHZSbGhfMlRaYVBBcWhiVHNBRVlBIiwicGhvbmVJZCI6IjY0OGQ4MTE1LWJjZjUtNGMzZS1hZDI4LTMyN2JiNTlhZWZjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjbzVXemFxTVk1N0JTTFMvSlBucEQ5QXZSZjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2lQZDlReTdtU1dwMUN5YW4xbUJoMDlja2dZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhYQlc4WUI1IiwibWUiOnsiaWQiOiI1MDk0MTIyMDM5ODo2NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlBhd3FzREVOV283N3dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNmJoV2dFemlLdUxvWmRYODFGNGd3enJjRlpIaHNJa3kySk1Bc0phVXRFST0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2pFUnpLbzJSckM1eUl1UGM1QmQxTHZxQTRyWTBMdlVxMjhVWXU4TmtJRFBQakVDVDFZWEt6V0Jod2pZcktDNkMrNEdscitxMUdiQmFRS3BxNkxjQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlnZkdlcHdzcmllb0wweDhSTkY0Qk51TlRMNFVHVUt3enoxVTM2dUxYWm5GSXY2NnRSSVFEbXpnZjNING5JM2N0dUUxbW84ckdzYmQxQkhxUERFcWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDEyMjAzOTg6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZW00Vm9CTTRpcmk2R1hWL05SZUlNTTYzQldSNGJDSk10aVRBTENXbExSQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODI2NTY5N30=
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
