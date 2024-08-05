document.addEventListener("DOMContentLoaded", function () {
  const studentElement = document.getElementById("clickable-student");
  if (studentElement) {
    studentElement.addEventListener("click", function () {
      spawnEmojis();
    });
  } else {
    console.error("The clickable student element was not found.");
  }
});

function spawnEmojis() {
  const emojis = ["✏️", "🤔", "📚"];

  for (let i = 0; i < 70; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.textContent = emoji;
    emojiElement.style.left = `${Math.random() * 100}vw`;
    emojiElement.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(emojiElement);

    emojiElement.addEventListener("animationend", () => {
      emojiElement.remove();
    });
  }
}
