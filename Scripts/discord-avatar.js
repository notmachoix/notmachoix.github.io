// Not Macho - Discord Avatar Loader
// Displays your Discord profile picture directly from the CDN

document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("discord-avatar");
  if (avatar) {
    avatar.src = "https://cdn.discordapp.com/avatars/1283001548892536865/a_8c3c689536ee3a0a8b7e2c9affc6bc63.gif?size=1024";
  }
});
