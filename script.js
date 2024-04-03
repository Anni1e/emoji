import { data } from "./data.js";

const input = document.querySelector("input");
const cards = document.querySelector(".cards");

input.addEventListener("input", (evt) => {
  const text = evt.target.value;
  const search = data.filter(
    (el) =>
      el.keywords.toLowerCase().includes(text.toLowerCase().trim()) ||
      el.title.toLowerCase().includes(text.toLowerCase().trim())
  );
  render(search);
});

function render(arr) {
  cards.innerHTML = "";
  arr.forEach((el) => {
    const article = document.createElement("article");
    article.innerHTML = `<p class="card__emoji">${el.symbol}</p>
            <h3>${el.title}</h3>
            <p class="descr">
             ${[...new Set(el.keywords.split(" "))].join(" ")}</p>`;
    cards.append(article);
  });
}
render(data);
