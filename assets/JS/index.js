document.querySelectorAll(".carousel").forEach((carousel) => {
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");

  let currentIndex = 0;

  const updateCarousel = () => {
    carouselItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  updateCarousel();

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });
});
