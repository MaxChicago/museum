 
  function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video')
    trailer.classList.toggle('active')
    video.currentTime = 0;
  
  }

  
  
  $('.slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    dots: true,
    cssEase: 'linear',
  
  })