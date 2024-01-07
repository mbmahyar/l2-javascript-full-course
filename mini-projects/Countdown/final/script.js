let deadline = new Date("Nov 30 2023 15:37:25").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;

  if (t < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
  } else {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
  }
}, 1000);
