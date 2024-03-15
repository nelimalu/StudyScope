function distance(x1, x2, y1, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function squish(value, in_min, in_max, out_min, out_max) {
  let percentage = (value - in_min) / (in_max - in_min);
  return percentage * (out_max - out_min) + out_min;  
}

function scrollToPrograms() {
  document.getElementById("programs").scrollIntoView({
      behavior: 'smooth'
  });
}


window.onload = function() {
  document.addEventListener('mousemove', (event) => {

    let panels = document.getElementsByClassName("panel");

    for (let panel of panels) {
      let centerX = panel.offsetLeft + panel.offsetWidth / 2;
      let centerY = panel.offsetTop + panel.offsetHeight / 2;

      let xdist = event.x - centerX;
      let ydist = event.y - centerY;

      let xangle = squish(xdist, -panel.offsetWidth / 2, panel.offsetWidth / 2, -8, 8);
      let yangle = squish(ydist, -panel.offsetHeight / 2, panel.offsetHeight / 2, 2, -2);
      console.log(xangle, yangle)

      panel.style.setProperty('--y-angle', `${xangle}deg`);
      panel.style.setProperty('--x-angle', `${yangle}deg`);

    }

  });
}