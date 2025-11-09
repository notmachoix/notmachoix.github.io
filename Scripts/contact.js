// Simple webhook contact form sender
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return;
    }

    status.textContent = "Sending...";
    status.style.color = "#38bdf8";

    try {
      await fetch("https://discord.com/api/webhooks/1436646480269148263/4OSkmhxawI7UZwLoOV8dZa6Zq3HSH0JYvuVLGP5OKOP9Vjo2TijpZO-kegcyMaOj_GHt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "📩 New Contact Form Submission",
              color: 4437377,
              fields: [
                { name: "Name", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Message", value: message }
              ],
              footer: { text: "Not Macho | Website Form" },
              timestamp: new Date().toISOString()
            }
          ]
        })
      });

      status.textContent = "Message sent successfully ✅";
      status.style.color = "limegreen";
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = "Failed to send message ❌";
      status.style.color = "red";
    }
  });
});
