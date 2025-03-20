 export const AutoSwiper = window.addEventListener('DOMContentLoaded', () => {

    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const indicatorDots = document.querySelector(".indicator-dots");
    
    // console.log(updateSlides.length);
    
    let currentIndex = 0;
    let isTransitioning = false;
     
    
    //clone first and last slides for circular effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    sliderTrack.appendChild(firstClone);
    sliderTrack.insertBefore(lastClone, slides[0]);
    
    const updateSlides = document.querySelectorAll(".slider-track .slider")
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    
    // track slides(dot) and change with slides
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add('active');
    
        indicator.addEventListener('click', () => moveToSlide(index + 1));
    
        indicatorDots.appendChild(indicator);
    
    });
     
    let indicator = document.querySelectorAll(".indicator");
    console.log(indicator);
    
    
    function updateIndicator() {
        indicator.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === (currentIndex - 1) % slides.length);
        });
    }
    
    // This is for move for slider
    function moveToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        console.log(index);
    
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
    
    
    
    function moveToNextSlide() {
        // console.log("nextClicked" + currentIndex);
        moveToSlide(currentIndex + 1);
    }
    
    function moveToPrevSlide() {
        console.log("prevClicked");
    
        moveToSlide(currentIndex - 1)
    }
    
    
    nextBtn.addEventListener('click', moveToNextSlide)
    prevBtn.addEventListener('click', moveToPrevSlide)
    
    setInterval(moveToNextSlide, 3000);
    
    });