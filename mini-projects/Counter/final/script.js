let counter = 0;
document.getElementById("counter").innerText = counter;

const decrease = () => {
  console.log("decrease");
  if (counter > 0) {
    counter -= 1;
    document.getElementById("counter").innerText = counter;
  }
};

const increase = () => {
  counter += 1;
  document.getElementById("counter").innerText = counter;
};

const reset = () => {
  counter = 0;
  document.getElementById("counter").innerText = counter;
};
