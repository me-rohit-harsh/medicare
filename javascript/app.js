// Menu-toggle button

$(document).ready(function () {
    $(".ham").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
    $(".navbar-item").on("click", function () {
        $("nav ul").removeClass("showing");
    });

});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})

// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}
// testi ends 
// owl carsoul start 

jQuery(document).ready(function ($) {
    $('#articles .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        autoWidth: false,
        nav: false,
        navText: ["<i class='fas fa-angle-left fa-2x'></i>",
            "<i class='fas fa-angle-right fa-2x'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.6,
                dots: true
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
});
// owl carsoul end 

// search box js start 

$(document).ready(function () {
    /* initially hide product list items */
    $("#dino-list li, .search").hide();

    /* highlight matches text */
    var highlight = function (string) {
        $("#dino-list li.match").each(function () {
            var matchStart = $(this)
                .text()
                .toLowerCase()
                .indexOf("" + string.toLowerCase() + "");
            var matchEnd = matchStart + string.length - 1;
            var beforeMatch = $(this).text().slice(0, matchStart);
            var matchText = $(this).text().slice(matchStart, matchEnd + 1);
            var afterMatch = $(this).text().slice(matchEnd + 1);
            var imgSrc = $(this).data("img"); // get the image URL from the data-img attribute
            if (imgSrc === undefined || imgSrc === "") {
                imgSrc = "images/Default.webp"; // set default image URL if none specified
            }
            $(this).html(
                '<div class="search-card"><img src="' +
                imgSrc +
                '" class="dino-img" alt="' +
                $(this).text() +
                '"><p>' +
                beforeMatch +
                '<em>' +
                matchText +
                "</em>" +
                afterMatch +
                "</p></div>"
            );
        });
    };

    /* filter products */
    $("#search-medicine").on("keyup click input", function () {
        if (this.value.length > 0) {
            $("#dino-list li,.search").removeClass("match").hide().filter(function () {
                return $(this).text().toLowerCase().indexOf($("#search-medicine").val().toLowerCase()) != -1;
            }).addClass("match").show();
            highlight(this.value);
            $("#dino-list,.search").show();
        } else {
            $("#dino-list, #dino-list li, .search").removeClass("match").hide();
        }
    });


});
// search box js end 

// contact card js start 

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");

WebCifarIcon.addEventListener("click", () => {
    WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
    WebCifarEl.classList.remove("active");
});
// contact card js end 

// map js start 
var initializeMap = function () {
    var mapOptions = {
        center: concordeLatLng,
        zoom: 15,
        streetViewControl: true,
        mapMaker: true,
        heading: 20,
    };
    var map = new google.maps.Map(document.getElementById("js-map"), mapOptions);

    var marker = new google.maps.Marker({
        position: concordeLatLng,
        map: map,
        // icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>My Location</strong><br>Bihar(patna)<br>'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}

var concordeLatLng = new google.maps.LatLng(25.606007, 85.178756);
google.maps.event.addDomListener(window, 'load', initializeMap);


// map js end 

// pop up contact form start 

// Get the modal
var popup_modal = document.getElementById('email-now-modal');

// Get the button that opens the modal
var btn = document.getElementById("email-now-cta");

// Get the <span> element that closes the modal
var span = document.getElementById("pop-close");


// When the user clicks on the button, open the modal 
btn.onclick = function () {
    popup_modal.style.display = "block";
    popup_modal.classList.add("fade-in-popup");
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    popup_modal.style.display = "none";
}
// pop up contact form end 