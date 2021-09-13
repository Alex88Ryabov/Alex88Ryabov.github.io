(function() {

  var hamburger = {
    burger: document.querySelector('.burger'),
    nav: document.querySelector('.burger__nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.burger.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.burger.addEventListener('click', function(e) { hamburger.doToggle(e); });
  

}());