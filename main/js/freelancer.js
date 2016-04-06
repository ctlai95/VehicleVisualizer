/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Add the number of years in the options

var years = {
  "2016": "2016",
};

var cars = {
  "Ferrari": "Ferrari"};

var models = {
    "488 Spider": "488 Spider",
    "F12 Berlinetta": "F12 Berlinetta"
}

var $ysel = $("#year_select");
$ysel.empty(); // remove old years
$.each(years, function(value,key) {
  $ysel.append($("<option></option>")
     .attr("value", value).text(key));
});

var $csel = $("#car_select");
$csel.empty(); // remove old cars
$.each(cars, function(value,key) {
  $csel.append($("<option></option>")
     .attr("value", value).text(key));
});

var $msel = $("#model_select");
$msel.empty(); // remove old models
$.each(models, function(value,key) {
  $msel.append($("<option></option>")
     .attr("value", value).text(key));
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Change the exterior vehicle color
function changeExterior(my_color){
  image=document.getElementById('my_exterior');
  image.src=my_color;
}

function changeInterior(my_color){
  image=document.getElementById('my_interior');
  image.src=my_color;
}

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
