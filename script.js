const btn = document.getElementById("loveBtn");
const overlay = document.getElementById("overlay");
const typedText = document.getElementById("typedText");
const closeBtn = document.getElementById("closeBtn");
const replyBtn = document.getElementById("replyBtn");
const replyMsg = document.getElementById("replyMsg");

const steps = [
  "I",
    "I L",
            "I LO",
        "I LOV",
        "I LOVE",
        "I LOVE Y",
        "I LOVE YO",
        "I LOVE YOU",
        "I LOVE YOU H",
        "I LOVE YOU He",
        "I LOVE YOU Hee",
        "I LOVE YOU Heer",
        "I LOVE YOU Heeru",
        "I LOVE YOU Heeru❤️"
];

let timer;

function addLine(text) {
  const p = document.createElement("p");
  p.textContent = text;
  typedText.appendChild(p);
}

function typeMessage() {
  let i = 0;
  typedText.innerHTML = "";
  replyMsg.textContent = "";
  replyBtn.classList.remove("show");
  clearInterval(timer);

  addLine(steps[0]);

  timer = setInterval(() => {
    i++;
    if (i >= steps.length) {
      clearInterval(timer);
      replyBtn.classList.add("show");   // typing khatam, button dikhao
      return;
    }
    addLine(steps[i]);
  }, 500);
}

btn.addEventListener("click", () => {
  overlay.classList.add("show");
  typeMessage();
});

replyBtn.addEventListener("click", () => {
  replyMsg.textContent = "Love you too! 🥰";
  replyBtn.classList.remove("show");
});

function closePopup() {
  overlay.classList.remove("show");
  clearInterval(timer);
}

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});