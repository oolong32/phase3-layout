// Hamburger Style Drawer UI Pattern Menu
// as found @ http://bit.ly/1oMBzRl
//
// Godspeed!

$(document).ready(function() {
  $("#hamburger").click(function() {     // When the user clicks the #hamburger-icon HTML element ...
    $("body").toggleClass("nav-expanded");    // ... toggle the <body> tag's ".nav-expanded" class on or off.
  });
  $("nav > ul > li > a").click(function() {   // When the user clicks a navigation item in the hamburger menu ...
    $("body").removeClass("nav-expanded");    // ... remove the ".nav-expanded" class (if it exists) from the <body> tag.
  });                                         // This makes the menu a bit nicer to interact with for our users.
});

$(window).resize(function() {                 // When the window resizes ...
  $("body").removeClass("nav-expanded");      // ... also remove the ".nav-expanded" class (if it exists) from the <body> tag.
});                                           // This takes care of the case where a user might resize the window for some reason.
