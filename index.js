const slider = document.querySelector('.slider__container');
const slides = [...document.querySelectorAll('.slider__slide')];

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTransition = 0;
let animationID = 0;
let currentIndex = 0;

const slideImgPreventDragstart = (singleSlide) => {
	const slideImg = singleSlide.querySelector('img');
	if (slideImg){
		slideImg.addEventListener('dragstart', (e) => e.preventDefault())
	}
}

const touchStart = (index) => {

}

const touchEvents = (singleSlide) => {
	singleSlide.addEventListener('touchstart', touchStart)
}

slides.forEach((slide, index )=> {
	slideImgPreventDragstart(slide);
	
})