window.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const indicatorDots = document.querySelector(".indicator-dots");

    let currentIndex = 1;
    let isTransitioning = false;

    //This is for - Clone first and last slides for circular effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    sliderTrack.appendChild(firstClone);
    sliderTrack.insertBefore(lastClone, slides[0]);

    const updateSlides = document.querySelectorAll(".slider-track .slider");
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    //This is for - Create indicator dots
    function createIndicators() {
        slides.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.classList.add("indicator");
            if (index === 0) indicator.classList.add('active');

            indicator.addEventListener('click', () => moveToSlide(index + 1));
            indicatorDots.appendChild(indicator);
        });
    }

    //This is for - Update active indicator
    function updateIndicator() {
        const indicators = document.querySelectorAll(".indicator");
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === (currentIndex - 1) % slides.length);
        });
    }

    //This is for - Move to specific slide
    function moveToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex = index;
        sliderTrack.style.transition = `transform 0.5s ease-in-out`;
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

        setTimeout(() => {
            if (currentIndex === updateSlides.length - 1) {
                sliderTrack.style.transition = 'none';
                currentIndex = 1;
                sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            if (currentIndex === 0) {
                sliderTrack.style.transition = 'none';
                currentIndex = updateSlides.length - 2;
                sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            updateIndicator();
            isTransitioning = false;
        }, 500);
    }

    //This is for - Navigation functions
    function moveToNextSlide() {
        moveToSlide(currentIndex + 1);
    }

    function moveToPrevSlide() {
        moveToSlide(currentIndex - 1);
    }

    //This is for - Event listeners
    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPrevSlide);

    //This is for - Initialize indicators and auto-slide
    createIndicators();
    setInterval(moveToNextSlide, 3000);
});
