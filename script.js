//contact alert button

let op = document.getElementById("btn");
let overlay = document.getElementById("alert");
let backdrop = document.getElementById("contact-overlay");
let cl = document.getElementById("close");

op.addEventListener("click", () => {
  overlay.style.display = "block";
  backdrop.style.display = "block";
});

cl.addEventListener("click", () => {
  overlay.style.display = "none";
  backdrop.style.display = "none";
});

//read- more and read less

let more = document.getElementById("more") 
let goals = document.getElementById("goals")
let goal = document.getElementById("goal")
let Interests = document.getElementById("Interests")
let activity = document.getElementById("activity")
let why = document.getElementById("why")
let portfolio = document.getElementById("portfolio")

let less = document.getElementById("less")

more.addEventListener('click',()=>{
    more.style.display = "none"
    goals.style.display = "block"
    goal.style.display = "block"
    Interests.style.display = "block"
    activity.style.display = "block"
    why.style.display = "block"
    portfolio.style.display = "block"
    less.style.display = "block"
    
})

less.addEventListener("click",()=>{
  more.style.display = "block"
  goals.style.display = "none"
  goal.style.display = "none"
  Interests.style.display = "none"
  activity.style.display = "none"
  why.style.display = "none"
  portfolio.style.display = "none"
  less.style.display = "none"
    
})
