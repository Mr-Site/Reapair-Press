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
