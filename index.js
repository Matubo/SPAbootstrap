window.onload=function() {
   setTimeout(()=>{
    $("#my_preloader").remove();
    $("html").css({
    "overflow-y": "auto"
});
},500); 
};

let carusel_items=document.getElementsByClassName("my_carousel_img");

function my_carusel_next(){
carusel_items[0].style.cssText=`
transform:translateX(0,0)

`
}
function my_carusel_previous(){
    console.log("next");
    }