document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("close");
    const mobileNav = document.querySelector(".mobile_nav");

    menuBtn.addEventListener("click", function () {
        mobileNav.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const dropdown = this.parentElement;
            dropdown.classList.toggle("active");
        });
    });

    const closeBtn = document.getElementById("close");
    const mobileNav = document.querySelector(".mobile_nav");

    closeBtn.addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
});



// Plain vanilla JavaScript version of jQuery's slideToggle(), slideUp(), and slideDown() functions.
HTMLElement.prototype.slideToggle = function (duration, callback) {
    if (this.clientHeight === 0) {
      _s(this, duration, callback, true);
    } else {
      _s(this, duration, callback);
    }
  };
  
  HTMLElement.prototype.slideUp = function (duration, callback) {
    _s(this, duration, callback);
  };
  
  HTMLElement.prototype.slideDown = function (duration, callback) {
    _s(this, duration, callback, true);
  };
  
  function _s(el, duration, callback, isDown) {
    if (typeof duration === "undefined") duration = 400;
    if (typeof isDown === "undefined") isDown = false;
  
    el.style.overflow = "hidden";
    if (isDown) el.style.display = "block";
  
    var elStyles = window.getComputedStyle(el);
  
    var elHeight = parseFloat(elStyles.getPropertyValue("height"));
    var elPaddingTop = parseFloat(elStyles.getPropertyValue("padding-top"));
    var elPaddingBottom = parseFloat(elStyles.getPropertyValue("padding-bottom"));
    var elMarginTop = parseFloat(elStyles.getPropertyValue("margin-top"));
    var elMarginBottom = parseFloat(elStyles.getPropertyValue("margin-bottom"));
  
    var stepHeight = elHeight / duration;
    var stepPaddingTop = elPaddingTop / duration;
    var stepPaddingBottom = elPaddingBottom / duration;
    var stepMarginTop = elMarginTop / duration;
    var stepMarginBottom = elMarginBottom / duration;
  
    var start;
  
    function step(timestamp) {
      if (start === undefined) start = timestamp;
  
      var elapsed = timestamp - start;
  
      if (isDown) {
        el.style.height = stepHeight * elapsed + "px";
        el.style.paddingTop = stepPaddingTop * elapsed + "px";
        el.style.paddingBottom = stepPaddingBottom * elapsed + "px";
        el.style.marginTop = stepMarginTop * elapsed + "px";
        el.style.marginBottom = stepMarginBottom * elapsed + "px";
      } else {
        el.style.height = elHeight - stepHeight * elapsed + "px";
        el.style.paddingTop = elPaddingTop - stepPaddingTop * elapsed + "px";
        el.style.paddingBottom =
          elPaddingBottom - stepPaddingBottom * elapsed + "px";
        el.style.marginTop = elMarginTop - stepMarginTop * elapsed + "px";
        el.style.marginBottom =
          elMarginBottom - stepMarginBottom * elapsed + "px";
      }
  
      if (elapsed >= duration) {
        el.style.height = "";
        el.style.paddingTop = "";
        el.style.paddingBottom = "";
        el.style.marginTop = "";
        el.style.marginBottom = "";
        el.style.overflow = "";
        if (!isDown) el.style.display = "none";
        if (typeof callback === "function") callback();
      } else {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  // JS
  const overlays = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelector(".menu-items");
  
  // Add class to a tag and ul tag if li parent contains sub-menu
  const liElems = document.querySelectorAll(".menu-items li");
  liElems.forEach((elem) => {
    const childrenElems = elem.querySelectorAll(".dropdown-menu");
    if (childrenElems.length > 0) {
      elem.firstElementChild.classList.add("expand-btn");
      elem.classList.add("dropdown");
    }
  });
  
  function toggle() {
    // disable overflow body
    body.classList.toggle("overflow");
    // dark background
    overlays.classList.toggle("overlay--active");
    // add open class
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }
  
  // Open Menu Mobile
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });
  
  // Closes when the Esc key is pressed
  window.onkeydown = function (event) {
    const key = event.key; // const {key} = event; in ES6+
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
      toggle();
    }
  };
  
  // Closes when clicked outside the area
  document.addEventListener("click", (e) => {
    let target = e.target,
      its_menu = target === menuItems || menuItems.contains(target),
      its_hamburger = target === menuBtn,
      menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggle();
    }
  });
  
  
  // Mobile menu expand
  const expandBtn = document.querySelectorAll(".expand-btn");
  expandBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        // Prevent Default Anchor Click Behavior
        event.preventDefault();
        btn.classList.toggle("open");
        btn.nextElementSibling.slideToggle(300);
      }
    });
  });
  
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      // Off menu mobile on desktop
      if (menuBtn.classList.contains("open")) {
        toggle();
      }
      // Change arrow menu on Desktop
      for (var i = 0; i < expandBtn.length; i += 1) {
        expandBtn[i].classList.remove("open");
      }
      // Off SlideToggle Menu on Desktop
      const dropdownMenu = document.querySelectorAll(
        ".menu-items .dropdown-menu"
      );
      for (var i = 0; i < dropdownMenu.length; i += 1) {
        dropdownMenu[i].style.display = "";
      }
    }
  });
    // Hero section

    document.addEventListener("DOMContentLoaded", function() {
      var mediaList = [
        
          { type: 'image', src: './assets/image1.jpg' }, // Image sources
          { type: 'image', src: './assets/image2.jpg' },
          { type: 'image', src: './assets/image3.jpg' }
      ];
  
      var index = 0;
  
      function changeMedia() {
          var media = mediaList[index];
          index = (index + 1) % mediaList.length;
  
          var heroContainer = document.querySelector('#hero .container');
          
          if (media.type === 'video') {
              heroContainer.innerHTML = '<div class="video-container"><video autoplay muted loop id="bgVideo"><source src="' + media.src + '" type="video/mp4"></video></div>';
          } else if (media.type === 'image') {
              document.getElementById('hero').style.backgroundImage = 'url(' + media.src + ')';
              heroContainer.innerHTML = '<div class="hero_text"><h1>Dream Big, Dream Music</h1><p>Your first hit starts here, Dive into our world of endless entertainment, wether you"re an artist, <br>a listener, a model or a designer, we"ve got something for you</p><button>Start Listening<i class="ri-play-circle-line"></i></button></div>';
          }
      }
  
      changeMedia(); // Initial background change
  
      setInterval(changeMedia, 5000); // Change background every 5 seconds
  });

  
  

  //main section
  
  
  $('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  });


  


