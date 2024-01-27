const menu = document.querySelector(".menu");
const signIn = document.querySelector(".sign-in");
const logo = document.querySelector('.logo')
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".cancel");
const navBar = document.querySelector('.show-lists');
const suscribeBtn = document.querySelector(".suscribe");
const EmailInput = document.querySelector(".email-input");
const textFooter = document.querySelector(".text-footer");
const updateYear = document.querySelector(".footer-span");
const allSection = document.querySelectorAll(".section");
const inputAreas = document.querySelector(".input-areas");


const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

menu.addEventListener("click", function () {
  navBar.classList.toggle("show");
  logo.classList.add('position-logo')

});

signIn.addEventListener("click", function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
});

closeBtn.addEventListener("click", closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal
})
overlay.addEventListener("click", closeModal);

const warning = document.createElement("p");
suscribeBtn.addEventListener("click", function (e) {
  if (EmailInput.value === "") {
    e.preventDefault();
    textFooter.appendChild(warning);
    warning.classList.add("warn");
    warning.textContent = "Input field is required!";
  } else {
    warning.style.display = "none";
  }
});

const date = new Date();
const year = date.getFullYear();
updateYear.textContent = year;


const observerFunc = function(entries, observer){
  const [entry] = entries
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(observerFunc,{
  root: null,
  threshold: 0.1
})

allSection.forEach(section=> {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})
 
function inputArea(){
  let template = ''
 template+=  `
    <div class="area-one">
    <input type="text" name="" id="" placeholder="From">
    <input type="text" name="" id="" placeholder="Destination">
    </div>
    <div class="area-one input2"><input type="date" name="" id=""></div>
    <button>Search</button>`
  
  return inputAreas.innerHTML = template;

}
inputArea()
 
 