window.onload = function () {
  start_carusel();
  setTimeout(() => {
    $("#my_preloader").remove();
    $("html").css({
      "overflow-y": "auto",
    });
  }, 500);
};

let carusel_items = document.getElementsByClassName("my_carousel_img");
let carusel_arr_marker = [0, 1, 2, 3, 4, 5, 6];
let carusel_interval;
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
  start_carusel_interval();
  carusel_arr_marker.push(carusel_arr_marker.shift());
  console.log(carusel_arr_marker);
  my_carusel_transform();
}
function my_carusel_previous() {
  start_carusel_interval();
  carusel_arr_marker.unshift(carusel_arr_marker.pop());
  console.log(carusel_arr_marker);
  my_carusel_transform();
}
function my_carusel_transform() {
  carusel_items[carusel_arr_marker[0]].style.cssText = `
    transform:translate(-95%,-50%);
    height: 40vh;
    opacity: 0.7;
    z-index:1097;
    `;
  carusel_items[carusel_arr_marker[1]].style.cssText = `
    transform:translate(-85%,-50%);
    height: 43vh;
    opacity: 0.8;
    z-index:1098;
    `;
  carusel_items[carusel_arr_marker[2]].style.cssText = `
    transform:translate(-70%,-50%);
    height: 45vh;
    opacity: 0.9;
    z-index:1099;
    `;
  carusel_items[carusel_arr_marker[3]].style.cssText = `
    transform:translate(-50%,-50%);
    height: 50vh;
    opacity: 1;
    z-index:1100;
    `;
  carusel_items[carusel_arr_marker[4]].style.cssText = `
    transform:translate(-30%,-50%);
    height: 45vh;
    opacity: 0.9;
    z-index:1099;
    `;
  carusel_items[carusel_arr_marker[5]].style.cssText = `
    transform:translate(-15%,-50%);
    height: 43vh;
    opacity: 0.8;
    z-index:1098;
    `;
  carusel_items[carusel_arr_marker[6]].style.cssText = `
    transform:translate(-5%,-50%);
    height: 40vh;
    opacity: 0.7;
    z-index:1097;
    `;
}
