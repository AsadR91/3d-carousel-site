const carousel = document.querySelector('.carousel');

const gallery = Array.from({ length: 9 }, (_, i) => ({
  src: `assets/image${i + 1}.jpg`,
  caption: `Image ${i + 1}`
}));

function createCarouselItems() {
  gallery.forEach(({ src, caption }) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-item');

    const img = document.createElement('img');
    img.src = src;
    img.alt = caption;

    const label = document.createElement('div');
    label.className = 'caption';
    label.textContent = caption;

    slide.appendChild(img);
    slide.appendChild(label);
    carousel.appendChild(slide);
  });
}
createCarouselItems();

const items = gsap.utils.toArray('.carousel-item');

function positionInCircle(radius = 300) {
  const total = items.length;
  items.forEach((item, i) => {
    const angle = (360 / total) * i;
    gsap.set(item, {
      rotationY: angle,
      transformOrigin: `50% 50% ${-radius}px`,
      transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(${-angle}deg)`
    });
  });
}
positionInCircle();

// Slowly rotate the whole carousel left to right
gsap.to(carousel, {
  rotationY: 360,
  duration: 60,
  repeat: -1,
  ease: "none",
  transformOrigin: "center center"
});
