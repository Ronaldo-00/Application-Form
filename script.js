//top-toogle button display

const mybutton = document.getElementById("top-toggle");

window.onscroll = function() {scrollings()};

function scrollings() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//to click the top-toggle button its scroll top of the page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}