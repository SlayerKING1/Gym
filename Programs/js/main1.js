/*-------Show menu--------*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== IMAGE SLIDER YOGA ===============*/

// JavaScript for Yoga Slider
const positionImages = document.querySelectorAll(".position__img");
let positionIndex = 0; // Current index for the yoga slider

function goNextPosition() {
    positionImages[positionIndex].classList.remove('active'); // Hide the current image
    positionIndex = (positionIndex + 1) % positionImages.length; // Update the index
    positionImages[positionIndex].classList.add('active'); // Show the next image
}

function goPreviousPosition() {
    positionImages[positionIndex].classList.remove('active'); // Hide the current image
    positionIndex = (positionIndex - 1 + positionImages.length) % positionImages.length; // Update the index
    positionImages[positionIndex].classList.add('active'); // Show the previous image
}

positionImages[positionIndex].classList.add('active'); // Initialize the first yoga image

// JavaScript for Exercise Slider
const exerciseImages = document.querySelectorAll(".exercise__img");
let exerciseIndex = 0; // Current index for the exercise slider

function goNextExercise() {
    exerciseImages[exerciseIndex].classList.remove('active'); // Hide the current image
    exerciseIndex = (exerciseIndex + 1) % exerciseImages.length; // Update the index
    exerciseImages[exerciseIndex].classList.add('active'); // Show the next image
}

function goPreviousExercise() {
    exerciseImages[exerciseIndex].classList.remove('active'); // Hide the current image
    exerciseIndex = (exerciseIndex - 1 + exerciseImages.length) % exerciseImages.length; // Update the index
    exerciseImages[exerciseIndex].classList.add('active'); // Show the previous image
}

exerciseImages[exerciseIndex].classList.add('active'); // Initialize the first exercise image

// JavaScript for Muscle Flexing Slider
const muscleImages = document.querySelectorAll(".muscle__img");
let muscleIndex = 0; // Current index for the muscle slider

function goNextMuscle() {
    muscleImages[muscleIndex].classList.remove('active'); // Hide the current image
    muscleIndex = (muscleIndex + 1) % muscleImages.length; // Update the index
    muscleImages[muscleIndex].classList.add('active'); // Show the next image
}

function goPreviousMuscle() {
    muscleImages[muscleIndex].classList.remove('active'); // Hide the current image
    muscleIndex = (muscleIndex - 1 + muscleImages.length) % muscleImages.length; // Update the index
    muscleImages[muscleIndex].classList.add('active'); // Show the previous image
}

// Initialize the first muscle image as visible
muscleImages[muscleIndex].classList.add('active');

let currentLiftIndex = 0;
const liftImages = document.querySelectorAll('.lift__img');

function showLiftImage(index) {
    liftImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function goNextLift() {
    currentLiftIndex = (currentLiftIndex + 1) % liftImages.length;
    showLiftImage(currentLiftIndex);
}

function goPreviousLift() {
    currentLiftIndex = (currentLiftIndex - 1 + liftImages.length) % liftImages.length;
    showLiftImage(currentLiftIndex);
}

// Initialize the first image as active
showLiftImage(currentLiftIndex);



/*=============== SCROLL SECTRIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION  ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,

})
sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 700, origin:'bottom'})
sr.reveal(`.position__img`, {origin:'right'})
sr.reveal(`.cardio__data`)
sr.reveal(`.cardio__img`, {delay: 700, origin:'bottom'})
sr.reveal(`.exercise__img`, {origin:'right'})
sr.reveal(`.flexmuscle__data`)
sr.reveal(`.flexmuscle__img`, {delay: 700, origin:'bottom'})
sr.reveal(`.muscle__img`, {origin:'right'})
sr.reveal(`.mulifting__data`)
sr.reveal(`.mulifting__img`, {delay: 700, origin:'bottom'})
sr.reveal(`.lift__img`, {origin:'right'})
sr.reveal(`.footer__container, .footer__content, .footer__group`)




/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






/*=============== EMAIL JS ===============*/

 const contactForm = document.getElementById('contact-form')
    contactMessage = document.getElementById('contact-message')
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the filed has a value
    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //Show Messsage
        contactMessage.textContent = 'You must enter your email😅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000);
    }else{
        emailjs.sendForm('service_qrctyrt','template_s89qzme','#contact-form','SWYOHfsD-jqujuTiM')
        .then(() =>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully😀'

            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 4000)
        }, (error) =>{
            alert('Opps Something Went Wrong!!😶',error)
        })

        contactUser.value = ''
    }
}

contactForm.addEventListener('submit',sendEmail)

