import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>💧 Smart Water Saver</h1>
    <p>Save Water, Save Life</p>

    <button id="checkBtn">Check Water Usage</button>

    <p id="result"></p>
  </div>
`;

document.getElementById("checkBtn").addEventListener("click", () => {
  document.getElementById("result").innerText =
    "Great! You are saving water today 💙";
});
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const litres = prompt("Enter today's water usage (in litres):");

 if (litres <= 100) {
  document.getElementById("result").innerText =
    "Excellent! You are saving water 💧";
} else {
  document.getElementById("result").innerText =
    "Try to reduce water usage tomorrow 🌍";
}
});