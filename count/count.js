let num = 0;
const count = document.querySelector(".count");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", () => {
    num++;
    count.textContent = num;
})
btn2.addEventListener("click", () => {
  num--;    
  count.textContent = num;
});