 //Watch on scroll and update nav
 var logo = document.getElementsByClassName('navbar-brand')[0];
 var nav = document.getElementsByTagName('header')[0];
 var bars = document.querySelectorAll('span.icon-bar');

 var hamburger = document.getElementsByClassName('navbar-toggle collapsed')[0];
 var navbar = document.getElementById('main-navbar');

 Element.prototype.hasClass = function(className) {
     return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
 };
 Element.prototype.addClass = function(className) {
     if (!this.hasClass(className)) {
         this.className += ' ' + className;
     }
 };
 Element.prototype.removeClass = function(className) {
     var newClass = ' ' + this.className.replace( /[\t\r\n]/g, ' ') + ' ';
     if (this.hasClass(className)) {
         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
             newClass = newClass.replace(' ' + className + ' ', ' ');
         }
         this.className = newClass.replace(/^\s+|\s+$/g, '');
     }
 };
 Element.prototype.toggleClass = function(className) {
	var newClass = ' ' + this.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (this.hasClass(className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        this.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        this.className += ' ' + className;
    }
};

 window.addEventListener('scroll', function() {
     logo.addClass('default-logo');
     nav.style.backgroundColor = "rgba(255,255,255,.97)";
     nav.style.boxShadow = "1px 1px 5px grey";
     for (var i = 0; i <= 2; i++) {
         bars[i].style.backgroundColor = "#006495";
     }
     if (!window.scrollY >= 1) {
         logo.removeClass('default-logo');
         nav.style.backgroundColor = "transparent";
         nav.style.boxShadow = "none";
         for (var i = 0; i <= 2; i++) {
             bars[i].style.backgroundColor = "#FFF";
         }
     }
 });
 hamburger.addEventListener("click", function() {
     hamburger.toggleClass('collapsed');
     navbar.toggleClass('in');
     navbar.style.transition = "height 258ms ease-out";
 });