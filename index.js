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
	return (event) => {
		isDragging = true;
		console.log('log');
	}
}
const touchMove = () => {
	if (isDragging){
		console.log('move');
	}
}
const touchEnd = () => {
	isDragging = false;

	console.log('test');
}

const touchEvents = (singleSlide) => {
}

slides.forEach((slide, index )=> {
	slideImgPreventDragstart(slide);

	slide.addEventListener('touchstart', touchStart(index))
	slide.addEventListener('touchend', touchEnd)
	slide.addEventListener('touchmove', touchMove)

	slide.addEventListener('mousedown', touchStart(index))
	slide.addEventListener('mouseup', touchEnd)
	slide.addEventListener('mouseleave', touchEnd)
	slide.addEventListener('mousemove', touchMove)
})