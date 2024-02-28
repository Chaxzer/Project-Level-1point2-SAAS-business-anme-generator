let num = Math.random();
let first, second,third;

if (num < 0.33){
  first = "aradhaya";
}
else if (num>=0.33 && num<0.66){
  first = "isht";
}
else(
  first = "ishwar" 
)


num = Math.random();
if (num < 0.33){
  second = "anant";
}
else if (num>=0.33 && num<0.66){
  second = "sada";
}
else(
  second = "satya" 
)


num = Math.random();
  if (num < 0){second
  third = "shiv";
}
else if (num>=0.33 && num<0.66){
  third = "rudra";
}
else(
  third = "mahadev" 
)



document.body.appendChild(document.createElement("div")).innerHTML = `<h1> ${first}  ${second} ${third} </h1>`;
