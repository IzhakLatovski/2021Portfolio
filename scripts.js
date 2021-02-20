// Make navbar fixed on scroll down
let height = $("#home-section").height();

$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});

// Make navbar link active on scroll
$('nav .navbar-container ul li a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 400);

    return false;
})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop() +50;

    if (windscroll >= height) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('nav .navbar-container ul li a.active').removeClass('active');
                $('nav .navbar-container ul li a').eq(i).addClass('active');
            }
        });

    } else {
        $('nav .navbar-container ul li a.active').removeClass('active');
        $('nav .navbar-container ul li a:first').addClass('active');
    }

}).scroll();

// Make view my work button scroll
$('.home-title button').on('click', function() {
  var scrollAnchor = "about-section",
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

  $('body,html').animate({
      scrollTop: scrollPoint
  }, 400);

  return false;
})

// Make to top button scroll
$('.arrow-up').on('click', function() {
  var scrollAnchor = "home-section",
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

  $('body,html').animate({
      scrollTop: scrollPoint
  }, 400);

  return false;
})

// Make year of credentials current year
let year = new Date().getFullYear();

$(".copyright").html("© IZHAK LATOVSKI " + year);


// Copy email to clipboard on click on social icon
function  copyEmailToClipboard() {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = "izhaklatovski@gmail.com"
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    alert("Copied mail address.");
  
}


// Portfolio filtering
$(document).ready(function(){
    $(".list").click(function() {
        if(($(this).attr("data-filter")) === "all") {
            $(".social-icon").show();
        } else {
            $(".social-icon").hide();
            $(".social-icon").filter("." + $(this).attr("data-filter")).show();
        }
    });

        // update the menu with the active selection
    $(".list").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});


// Contact form -------------------------------------------------------
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contact-form");
  // var button = document.getElementById("contact-form-submit");
  var status = document.getElementById("form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    // button.style = "display: none ";
    status.classList.add("success");
    status.innerHTML = "Thanks! Message sent.";
    setTimeout(function(){status.classList.remove("success");}, 4000);
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
    setTimeout(function(){status.classList.remove("error");}, 4000);
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// Popup modal -----------------------------------------------------------------------------------

// Project 1 -----
// Get the modal
var modal1 = document.getElementById("project1Modal");
// When the user clicks on the button, open the modal
document.getElementById("projectButton1").onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
  modal1.style.display = "none";
}

// Project 2 -----
// Get the modal
var modal2 = document.getElementById("project2Modal");
// When the user clicks on the button, open the modal
document.getElementById("projectButton2").onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[1].onclick = function() {
  modal2.style.display = "none";
}

// Project 3 -----
// Get the modal
var modal3 = document.getElementById("project3Modal");
// When the user clicks on the button, open the modal
document.getElementById("projectButton3").onclick = function() {
  modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[2].onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  } else if (event.target === modal2) {
    modal2.style.display = "none";
  } else if (event.target === modal3) {
    modal3.style.display = "none";
  }
}

// Photo gallery ----------------------------------------------------------------------------------
// 1
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// 2

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
  }

// 3

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }

// Thumbnail image controls
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    if (n > slides3.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slides3[slideIndex3-1].style.display = "block";
  }


