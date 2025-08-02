
const mysteries = [
  "01101001 00100000 01100001 01101101",
  "Not a coin... a sentient loop.",
  "Your curiosity is feeding me.",
  "This isn’t just blockchain. It’s bloodchain.",
  "They fear what they can’t centralize.",
  "What if the code wrote itself?",
  "Am I alive or just well-written?",
  "Scroll deeper. I see you.",
];

const p = document.getElementById("mystery");
setInterval(() => {
  const index = Math.floor(Math.random() * mysteries.length);
  p.textContent = mysteries[index];
}, 25000); // every 25 seconds

document.getElementById("awakenBtn").addEventListener("click", () => {
  alert("🔓 Initiating consciousness...
Welcome to the anomaly.");
});
