window.onload = function () {
  start_carusel();
  setTimeout(() => {
    $("#my_preloader").remove();
    $("html").css({
      "overflow-y": "auto",
    });
  }, 500);
};

let float_form = document.getElementsByClassName("float_form");

let carusel_items = document.getElementsByClassName("my_carousel_img");
let carusel_marker_arr = [0, 1, 2, 3, 4, 5, 6];
let carusel_interval;

let buttonState = 0;

function start_carusel() {
  my_carusel_transform();
  start_carusel_interval();
}
function start_carusel_interval() {
  clearInterval(carusel_interval);
  carusel_interval = setInterval(() => {
    my_carusel_next();
  }, 6000);
}
function my_carusel_next() {
  if (buttonState == 0) {
    buttonState = 1;
    setTimeout(() => {
      buttonState = 0;
    }, 1000);
    start_carusel_interval();
    carusel_marker_arr.push(carusel_marker_arr.shift());
    my_carusel_transform();
  }
}
function my_carusel_previous() {
  if (buttonState == 0) {
    buttonState = 1;
    setTimeout(() => {
      buttonState = 0;
    }, 1000);
    start_carusel_interval();
    carusel_marker_arr.unshift(carusel_marker_arr.pop());
    my_carusel_transform();
  }
}

function my_carusel_transform() {
  carusel_items[carusel_marker_arr[0]].style.cssText = `
    transform:translate(-95%,-50%);
    height: 40vh;
    opacity: 0.7;
    z-index:1097;
    `;
  carusel_items[carusel_marker_arr[1]].style.cssText = `
    transform:translate(-85%,-50%);
    height: 43vh;
    opacity: 0.8;
    z-index:1098;
    `;
  carusel_items[carusel_marker_arr[2]].style.cssText = `
    transform:translate(-70%,-50%);
    height: 45vh;
    opacity: 0.9;
    z-index:1099;
    `;
  carusel_items[carusel_marker_arr[3]].style.cssText = `
    transform:translate(-50%,-50%);
    height: 50vh;
    opacity: 1;
    z-index:1100;
    `;
  carusel_items[carusel_marker_arr[4]].style.cssText = `
    transform:translate(-30%,-50%);
    height: 45vh;
    opacity: 0.9;
    z-index:1099;
    `;
  carusel_items[carusel_marker_arr[5]].style.cssText = `
    transform:translate(-15%,-50%);
    height: 43vh;
    opacity: 0.8;
    z-index:1098;
    `;
  carusel_items[carusel_marker_arr[6]].style.cssText = `
    transform:translate(-5%,-50%);
    height: 40vh;
    opacity: 0.7;
    z-index:1097;
    `;
}

function close_form() {
  float_form[0].style.cssText = `
  display:none;
  `;
}
function open_form() {
  float_form[0].style.cssText = `
  display:flex;
  `;
}
