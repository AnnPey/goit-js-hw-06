const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

textSpan.style.fontSize = `48px`;

fontSizeControl.addEventListener("input", function () {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});