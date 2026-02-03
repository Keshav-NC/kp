const no = document.getElementById("no");
const yes = document.getElementById("yes");
const container = document.querySelector(".container");
const boy = document.getElementById("boy");

let level = 1;

yes.addEventListener("mouseover", () => {
  boy.src = `https://media.tenor.com/SKVyZ47LhkYAAAAi/rose-propose.gif`;
});

no.addEventListener("mouseover", () => {
  ++level;
  const maxX = container.clientWidth - no.offsetWidth;
  const maxY = container.clientHeight - no.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.transition = `all ${Math.max(0.05, 0.3 - level * 0.02)}s ease`;
  no.style.transform = `scale(${Math.max(0.5, 1 - level * 0.05)})`;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  boy.src = `https://media.tenor.com/pLDe0NLTTQgAAAAi/sad.gif`;
});
