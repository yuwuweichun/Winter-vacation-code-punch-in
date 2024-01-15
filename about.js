const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const slideWidth = 100; // 每个轮播项的宽度，单位为百分比
let currentIndex = 0;
const intervalTime = 8000; // 切换间隔时间，单位为毫秒
let timer; // 计时器变量

// 设置轮播项的位置和宽度
slides.forEach((slide, index) => {
  slide.style.position = 'absolute';
  slide.style.left = `${index * slideWidth}%`;
});

function slideCarousel() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${translateX}%)`;

  // 清除计时器并重新启动
  clearInterval(timer);
  timer = setInterval(slideCarousel, intervalTime);
}

function reverseSlideCarousel() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  const translateX = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${translateX}%)`;

  // 清除计时器并重新启动
  clearInterval(timer);
  timer = setInterval(slideCarousel, intervalTime);
}

prevButton.addEventListener('click', reverseSlideCarousel);
nextButton.addEventListener('click', slideCarousel);

// 启动计时器
timer = setInterval(slideCarousel, intervalTime);