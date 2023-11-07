const menu = document.querySelector(".menu");
const signIn = document.querySelector(".sign-in");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".cancel");
const navBar = document.querySelector("nav");
const showSpan = document.querySelectorAll(".hide-span");
const suscribeBtn = document.querySelector(".suscribe");
const EmailInput = document.querySelector(".email-input");
const textFooter = document.querySelector(".text-footer");
const updateYear = document.querySelector(".footer-span");
const allSection = document.querySelectorAll(".section");
const logOut = document.getElementById('log-out');
const inputAreas = document.querySelector(".input-areas");


const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};
menu.addEventListener("click", function () {
  navBar.classList.toggle("nav-width");
  for (const span of showSpan) {
    span.classList.toggle("show-span");
  }
  console.log(navBar);
  console.log(showSpan);
});

signIn.addEventListener("click", function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
});

closeBtn.addEventListener("click", closeModal);
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
    <div class="area-one"><input type="text" name="" id="" placeholder="Country"></div>
    <div class="area-one input2"><input type="date" name="" id=""></div>
    <button>Search</button>`
  
  return inputAreas.innerHTML = template;

}
inputArea()
logOut.addEventListener('click', function(){
  alert('Are you sure you want to log out?')
})
 