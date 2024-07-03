const container = document.querySelector(".container");
const button = document.querySelector("button");

const handleButton = () => {
  let x = Math.floor(
    Math.random() * (window.innerWidth - container.offsetWidth)
  );
  let y = Math.floor(
    Math.random() * (window.innerHeight - container.offsetHeight)
  );

  if (y < 100) {
    y = window.innerHeight;
  }

  container.style.left = `${x}px`;
  container.style.top = `${y}px`;

  console.log(x, y);
  console.log(window.innerHeight);
};

button.addEventListener("mouseenter", handleButton);
