  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.continuous-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 1, // 1ms delay for seamless
        disableOnInteraction: false,
      },
      freeMode: true,
      freeModeMomentum: false,
      grabCursor: true,
      allowTouchMove: true,
    });
  });

    const galleryImages = document.querySelectorAll('.custom-gallery-item a');
    const modalImage = document.getElementById('modalImage');

    galleryImages.forEach(image => {
        image.addEventListener('click', function(event) {
            event.preventDefault();
            const imageUrl = this.getAttribute('href');
            modalImage.setAttribute('src', imageUrl);
        });
    });