// Falling Discord Developer Emojis by Not Macho

document.addEventListener("DOMContentLoaded", () => {
  const emojis = ["💻", "⚙️", "🎮", "👨‍💻", "🧠", "💬", "🤖"];
  const emojiContainer = document.createElement("div");
  emojiContainer.classList.add("emoji-container");
  document.body.appendChild(emojiContainer);

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 3 + Math.random() * 3 + "s";
    emoji.style.fontSize = 18 + Math.random() * 20 + "px";
    emojiContainer.appendChild(emoji);

    // Remove emoji after it falls
    setTimeout(() => emoji.remove(), 6000);
  }

  // Create falling emojis periodically
  setInterval(createEmoji, 400);
});
