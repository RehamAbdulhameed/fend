/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
let items; 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNavList() {

    sections.forEach((sec) => {
        const listItem = document.createElement('li');
        listItem.innerText = sec.firstElementChild.firstElementChild.textContent;
        listItem.classList.add('menu__link');


        // Scroll to anchor ID using scrollTO event
        listItem.addEventListener('click', () => {
            window.scrollTo({ left: sec.offsetLeft, top: sec.offsetTop, behavior: 'smooth' })
        });

        fragment.appendChild(listItem);
    })  
}



// Add class 'active' to section when near top of viewport

function checkActive() {
    items = document.querySelectorAll('li');
    const trigger = window.innerHeight / 5 ;
    
    items.forEach((item, idx) => {
        
        const sectionTop = sections[idx].getBoundingClientRect().top
        const sectionBottom = sections[idx].getBoundingClientRect().bottom

        if (sectionTop < trigger && sectionBottom> trigger) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createNavList();
navList.appendChild(fragment);

// Scroll to section on link click
//within createNavList()

// Set sections as active

window.addEventListener('scroll', checkActive);
