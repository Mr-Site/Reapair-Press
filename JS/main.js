// extras sub menu

function showExtrasSubmenu() {
  document.getElementById("extrasSubmenu").style.display = "block";
}

function removeExtrasSubmenu() {
  document.getElementById("extrasSubmenu").style.display = "none";
}

// services sub menu

function showServicesSubmenu() {
  document.getElementById("servicesSubmenu").style.display = "block";
  document.getElementById("item1").style.color = "#262626";
  document.getElementById("fa-caret-down").style.transform = "rotate(180deg)";
  document.getElementById("fa-caret-down").style.color = "#262626";
}

function removeServicesSubmenu() {
  document.getElementById("servicesSubmenu").style.display = "none";
  document.getElementById("item1").style.color = "#868484";
  document.getElementById("fa-caret-down").style.transform = "rotate(0deg)";
  document.getElementById("fa-caret-down").style.color = "#868484";
}

// change page

function openPage(pageName, elmnt, kadr, borderBtm, paint) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.border = "";
    tablinks[i].style.borderBottom = "";
    tablinks[i].style.color = "#868684";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.border = kadr;
  elmnt.style.borderBottom = borderBtm;
  elmnt.style.color = paint;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// home page

// main slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

let intrevalSlider = setInterval("plusSlides(1)", 5000);

function stopSlide() {
  clearInterval(intrevalSlider);
}

function resumeSlide() {
  intrevalSlider = setInterval("plusSlides(1)", 5000);
}

// s7 menu item list

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
