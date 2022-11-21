const rgb=document.getElementById("rgb")
const btn =document.getElementById("btn")
const span =document.getElementById("span")
btn.addEventListener("click",colorfunc)
function colorfunc() {
  const randomRgbaColor1=[Math.floor(Math.random()*255)];
  const randomRgbaColor2=[Math.floor(Math.random()*255)];
  const randomRgbaColor3=[Math.floor(Math.random()*255)];
  const rgbColor=`rgb(${randomRgbaColor1},${randomRgbaColor2},${randomRgbaColor3})`;
  span.innerText=rgbColor;
document.body.style.backgroundColor=rgbColor;

  
}