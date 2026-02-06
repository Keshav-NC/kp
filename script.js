const no = document.getElementById("no");
const yes = document.getElementById("yes");
const container = document.querySelector(".container");
const boy = document.getElementById("boy");
const sectionContainer = document.getElementById("section-container");

const messages = [
  "Take a little moment 💭",
  "Pause… this might mean something 💗",
  "Some clicks are special 🌸",
  "Think gently before you click 💕",
  "Not every click is just a click ✨",
  "This click holds a feeling 💖",
  "A small pause can be beautiful 🌷",
  "Are you ready for this? 😌",
  "Let your heart decide 💓",
  "Some choices are made with care 💝",
];

let level = 1;

yes.addEventListener("mouseover", () => {
  const noDuddu = document.getElementsByClassName("no");
  boy.src = `https://media.tenor.com/SKVyZ47LhkYAAAAi/rose-propose.gif`;
  noDuddu[0].src =
    "https://media.tenor.com/V963h-HMxd0AAAAi/tkthao219-bubududu.gif";
});

no.addEventListener("mouseover", () => {
  ++level;
  if (level >= 10) {
    no.style.display = "none";
    yes.classList.add("xl:w-[44vw]", "w-[55vw]");
    const img = document.createElement("img");
    console.log(img);
    img.src = "https://media.tenor.com/hMrjwfIKGYsAAAAi/iklog.gif";
    img.classList.add(
      "no",
      "absolute",
      "left-10",
      "bottom-0",
      "animate-[slide-up_0.8s_ease-out_forwards]",
      "xl:w-[15vw]",
      "w-[30vw]",
    );
    sectionContainer.appendChild(img);
    return;
  }
  const maxX = container.clientWidth - no.offsetWidth;
  const maxY = container.clientHeight - no.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  const text = messages[Math.floor(Math.random() * messages.length)];

  no.style.transition = `all ${Math.max(0.05, 0.3 - level * 0.02)}s ease`;
  // no.style.transform = `scale(${Math.max(0.5, 1 - level * 0.05)})`;
  no.style.fontSize = `${Math.max(20, 16 - level)}px`;
  no.textContent = text;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  boy.src = `https://media.tenor.com/pLDe0NLTTQgAAAAi/sad.gif`;
});
