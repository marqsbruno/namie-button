const container = document.querySelector(".container");
const button = document.querySelector("button");
const img = document.querySelector("img");

const handleButton = () => {
  let x = Math.floor(
    Math.random() * (window.innerWidth - container.offsetWidth)
  );
  let y = Math.floor(
    Math.random() * (window.innerHeight - container.offsetHeight)
  );
  if (x < 50) {
    x = window.innerWidth;
  }
  if (y < 100) {
    y = window.innerHeight;
  }

  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
};

button.addEventListener("mouseenter", handleButton);
button.addEventListener("click", () => {
  window.alert("かっこいい!!!");
});

img.addEventListener("dblclick", () => {
  img.style.animation = "rotate 1s linear";
  console.log("oi erika!");
  setTimeout(() => {
    img.style.animation = "";
  }, 1000);
});
