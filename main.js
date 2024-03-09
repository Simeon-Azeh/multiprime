
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
  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeIcon = document.querySelector('.ri-close-circle-line');
    const dropdowns = document.querySelectorAll('.mobile-dropdown');

    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('mobile-nav-open');

        // Apply animation to mobile navigation
        mobileNav.style.transition = 'transform 0.3s ease-in-out';
        if (mobileNav.classList.contains('mobile-nav-open')) {
            mobileNav.style.transform = 'translateX(0)';
        } else {
            mobileNav.style.transform = 'translateX(-100%)';
        }

        // Close other dropdowns when mobile nav is opened
        dropdowns.forEach(function(otherDropdown) {
            otherDropdown.classList.remove('open');
        });
    });

    closeIcon.addEventListener('click', function() {
        mobileNav.classList.remove('mobile-nav-open');

        // Apply animation to close the mobile navigation
        mobileNav.style.transition = 'transform 0.3s ease-in-out';
        mobileNav.style.transform = 'translateX(-100%)';
    });

    dropdowns.forEach(function(dropdown) {
        const parentItem = dropdown.querySelector('.mobile-menu-item');

        parentItem.addEventListener('click', function(event) {
            event.preventDefault();
            dropdown.classList.toggle('open');

            // Close other dropdowns when a dropdown is opened
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('open')) {
                    otherDropdown.classList.remove('open');
                }
            });
        });
    });
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


  


