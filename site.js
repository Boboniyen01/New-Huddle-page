let clickButton = document.getElementById("1st-btn")
console.log(clickButton)
  let Bodycolor = document.body

function changeBackgroundColor(){
  
  clickButton.textContent ="Registered"
Bodycolor.style.backgroundColor =" hsl(300, 69%, 71%)" 

console.log(clickButton)
}

clickButton.addEventListener("click", changeBackgroundColor )