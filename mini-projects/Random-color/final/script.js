let color = "rgb(255,255,255)";
document.getElementsByTagName("main")[0].style.backgroundColor = color;
document.getElementById("colorName").innerText = color;
const changeColor = () => {
  color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  document.getElementById("colorName").innerText = color;
  document.getElementsByTagName("main")[0].style.backgroundColor = color;
};
