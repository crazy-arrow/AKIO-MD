/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0d4TnhmZkQ2Z25GZ29hcitPOEQ3cURUcGY1VjRMNjc2b1NBZUpXU0VrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXNicElVWkFtc0NmUkNCMGN6clJZdWtKOGVJWElVOEx0WVY4TE0ya0dUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRGp2Qm9XamlSbjdxOWh5SjhKNTBhanVpUnhqQmdQOC91M2lUcDU0V0drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqR1NHQzdQZGtWb0VuYWozblF2bXlkOFRMdmFpT2JGV1cwc1pmUUtOblFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOVUUvYmhxY3M5QzV4aTF6ajE1UE5xNVY2UUFxNjdaRjF2akgvSUF3bms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM0WkpibVlhc1NCQkhKMkY5cWNQVGNKekNxclJXSFpkK1lSeUxBSllsVUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU90TWlQdU95dlBnWnIvZTNCeHRXeUpHdFpWZktqN0JNVkhxS21iUVJFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGdLMWVRZmV6NHpnTlQyOGs5YzMrbGdzcWY3QXJxb24yQnBESWtnQ2cwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdVcjVlNkYyT01PVDhKZy9SQndQVjVjb253RnBzYnVLcmNmRnU0aGZXcjMyQnhUNW93T2p2cUZNTW5EQkFTaGhjOE1BbnZpTzJqdDJxcG1NTFRiREJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IkpaYkpuWDViNWprb3JhZm5EQzQxckFpWUZmbHhpZStYblBKdGVnUFB3R2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklPWWlocnQ0VGRlbWZlVWRydkpIWmciLCJwaG9uZUlkIjoiMGQzMTE2YzEtN2M5OS00NjRiLWI0ODYtNWU4MTA0YzNhYzNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlYd2sxbndLSmR6NElSb282d3F3ZkVLL2VjND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwR2wwaVRSYkJWVzcxRUx0eDl1eldmT2ZjcmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFhSSDEyV1QiLCJtZSI6eyJpZCI6Ijk0NzE0ODMxMzg3OjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Inl1cmVzaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXlvOGF3Q0VNbmNucnNHR0VZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL3Jxa205V25MZWs3a3pPdEJnc1MvdGIxdW9ESzNsdExnNGYvTGZpRTRrQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibVpMYVMrdXdVUTZ4aWZra2hwN2ZJNWdpZXQ1b0UyWUZSaXFRR3dBNm9hdDFxRDZQamVpbW5Ua0tVcEplWGR0QkRNc3NOZHA2TTBvRFgwVEdrVVUyQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Im9uZWxiU0pIUVovV1VNdFBBRzlMTzErRFJRMjZWUzZFbVc5RnM4R0oxSzV0MncvZkVicHNXczZ3Ly82YWtLaUJkdEozM0NrQk9DQUF2ZUJRZkFJTUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTQ4MzEzODc6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjY2cEp2VnB5M3BPNU16clFZTEV2N1c5YnFBeXQ1YlM0T0gveTM0aE9KQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDg0ODA4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKOFgifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'yuresh;
const packname = process.env.PACKNAME || 'yuresh';
const dev = process.env.DEV || '263714757857';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'YURESH-𝙼𝙳';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'false';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
