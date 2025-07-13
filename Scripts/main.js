let currentImageIndex = 0;
let currentProjectImages = [];

function openModal(projectId) {
    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const image = document.getElementById("modal-image");

    // Example data with multiple images per project
    if (projectId === "supportBot") {
        title.textContent = "Support Bot System";
        description.innerHTML = `
  <strong>What the bot is:</strong><br>
  This bot manages support tickets in real time, logs each request, and can be set up for any community. It's great for community help desks or general support.<br><br>

  <strong>Features:</strong>
  <ul>
    <li>Close Request: Sends a confirmation to the owner of the ticket and requests.</li>
    <li>Add User: Add or remove a user from a ticket.</li>
    <li>Restrict Ticket: Choose a role to restrict the ticket to. That role and above can see the ticket.</li>
    <li>Leveled Tickets: Tickets are categorized so, for example, a development ticket is only visible to developers.</li>
    <li>Close Log: Ticket after Closed Go to a Close Category for Log if They are not being Kept they can be Deleted by a Button</li>
  </ul>
`;
        currentProjectImages = [
            "/Images/Bots/Support_Bot/image1.png",
            "/Images/Bots/Support_Bot/image2.png",
            "/Images/Bots/Support_Bot/image3.png"
        ];
    } else if (projectId === "futureBox") {
        title.textContent = "Future Box System";
        description.innerHTML = `
  <strong>Infomation:</strong><br>
  <br>This is a Box to allow you what Projects I am Currently Working On what Comes Next<br>

  <strong>Planned Features:</strong>
  <ul>
    <li> Administrator Bot</li>
    <li> Overall Verify Bot with Advance Logs</li>
  </ul>
`;
        currentProjectImages = []; // No images for Future Box
    } else {
        currentProjectImages = [];
    }

    currentImageIndex = 0;
    if (currentProjectImages.length > 0) {
        image.src = currentProjectImages[currentImageIndex];
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

// Cycle images with direction: +1 or -1
function changeImage(direction) {
    if (currentProjectImages.length === 0) return;

    currentImageIndex += direction;

    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = currentProjectImages.length - 1;
    } else if (currentImageIndex >= currentProjectImages.length) {
        currentImageIndex = 0;
    }

    document.getElementById("modal-image").src = currentProjectImages[currentImageIndex];
}
