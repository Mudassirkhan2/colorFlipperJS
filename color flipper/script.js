const simple=document.getElementById("simple")
const btn =document.getElementById("btn")
const span =document.getElementById("span")
const simpleColors=["red","green","yellow","blue","brown","purple"]

btn.addEventListener("click",colorfunc1)


function colorfunc1() {
  const randomSimpleColor=simpleColors[Math.floor(Math.random()*simpleColors.length)];
  span.innerText=randomSimpleColor;
  console.log(randomSimpleColor)
  document.body.style.backgroundColor=randomSimpleColor
  
}

