var signUp = document.getElementById("signup")
var signUp = document.getElementById("login")
var suBtn = document.getElementById("subtn")
var closeModal = document.getElementById("close-modal")
var usernameBox = document.getElementById("username-box")
var passwordBox = document.getElementById("password-box")
var typeAgainBox = document.getElementById("type-again-box")
var submitForm = document.getElementById("submit-form")

suBtn.addEventListener("click", function () {
  //signUp.style.display = "block"
  signUp.classList.add("active")
})
closeModal.addEventListener("click", function () {
  //signUp.style.display = "none"
  signUp.classList.remove("active")
})
usernameBox.addEventListener("click", function () {
  usernameBox.focus()
})
passwordBox.addEventListener("click", function () {
  passwordBox.focus()
})
typeAgainBox.addEventListener("click", function () {
  typeAgainBox.focus()
})
function createRipple(event) {
    const button = event.currentTarget
  
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - button.offsetLeft - radius}px`
    circle.style.top = `${event.pageY - button.offsetTop - radius}px`
    circle.classList.add("ripple")
  
    const ripple = button.getElementsByClassName("ripple")[0]
  
    if (ripple) {
      ripple.remove()
    }
  
    button.appendChild(circle)
}

function submitRipple(event) {
  const button = event.currentTarget
  
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - button.offsetLeft - radius - window.innerWidth * 0.745}px`
    circle.style.top = `${event.pageY - button.offsetTop - radius}px`
    circle.classList.add("ripple")
  
    const ripple = button.getElementsByClassName("ripple")[0]
  
    if (ripple) {
      ripple.remove()
    }
  
    button.appendChild(circle)
}
    
const buttons = document.getElementsByClassName("ripplebtn");
for (const button of buttons) {
    button.addEventListener("mousedown", createRipple);
}

submitForm.addEventListener("click", submitRipple)
