const reviews=[
 {
  id:1,
  src:"https://cdn.glitch.global/a2ecbd25-f9a9-4077-aa40-a3af55201e6f/user1.jpg?v=1706617266670",
  name:"Alexander Hipp",
  profile:"Web developer",
  about:"I couldn't be happier with my choice of using Web Design Enterprise for my new website. Their team were easy to work with and helped me make a terrific website in a short amount of time.Thanks again guys for all your hard work I will recommend you to all my friends!",
 },
 {
  id:2,
  src:"https://cdn.glitch.global/a2ecbd25-f9a9-4077-aa40-a3af55201e6f/user2.jpg?v=1706617266670",
  name:"Mubariz Mehdizadeh",
  profile:"Backend developer",
  about:"As an organization with a sizable development staff, Performance Data had a fully functional, internally developed website in place, but as we approached the launch of a new product line we realized that our functional site was in desperate need of an aestheti",
 },
 {
  id:3,
  src:"https://cdn.glitch.global/a2ecbd25-f9a9-4077-aa40-a3af55201e6f/user3.jpg?v=1706617266670",
  name:"Janko Ferlič",
  profile:"Frontend developer",
  about:"I am really happy with your service, it is exceptional, Web Design Enterprise is just great. When I have a question they answer it at once, they have more than an outstanding customer service.",
 }
];
const container = document.querySelector("#container");
let elem = document.querySelector("#elem");
const nextBtn = document.querySelector("#id2");
const prevBtn = document.querySelector("#id1");
let currentId=1;
function onload(){
  window.addEventListener("load",showItems(currentId));
}
onload();

function showItems(currentId){
  console.log(currentId);
  let reviewItem=reviews.filter((item)=>(item.id===currentId)&&item);
  console.log(reviewItem[0]);
    elem.innerHTML = `
    <div class="image">
      <img src="${reviewItem[0].src}" alt="">
    </div>
    <div class="about">
      <h2>${reviewItem[0].name}</h2>
      <h3>${reviewItem[0].profile}</h3>
      <p>${reviewItem[0].about}</p>
    </div>
  `
  //console.log(elem);
  //container.prepend(elem);
}





nextBtn.addEventListener("click",function(){
 
  if(currentId < reviews.length){
    currentId =currentId+1;
    //console.log(currentId);
    showItems(currentId);
  }
  else if(currentId===reviews.length){
     currentId=1;
     showItems(currentId);
  }
})

prevBtn.addEventListener("click",function(){
  currentId =currentId-1;
  if(currentId===0){
    currentId=reviews.length;
    showItems(currentId);
 }
  else if(currentId > 0){
    //console.log(currentId);
    showItems(currentId);
  }
})






