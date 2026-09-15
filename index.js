// VISTARA — Intro Opening
// Displays the opening message, then reveals the website.

window.addEventListener("load", () => {
  const introTitle = document.getElementById("intro-title");
  const body = document.body;

  if (!introTitle) return;

  const message = "WE’RE HERE TO HELP YOU GROW";
  const characters = message.split("");
  const startDelay = 500;
  const letterDelay = 70;
  const endingPause = 1100;

  setTimeout(() => {
    characters.forEach((character, index) => {
      const span = document.createElement("span");

      if (character === " ") {
        span.className = "intro-space";
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = character;
      }

      span.style.animationDelay = `${index * letterDelay}ms`;
      introTitle.appendChild(span);
    });

    const typingDuration = characters.length * letterDelay + 550;

    setTimeout(() => {
      body.classList.remove("intro-active");
      body.classList.add("intro-done");
    }, typingDuration + endingPause);
  }, startDelay);
});
