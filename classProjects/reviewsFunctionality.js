//local reviews data
const reviews = [
    {
      name: "Mike Jefferson",
      rating: 5,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-anna-nekrashevich-6801642.jpg",
      timeUsed:"Used for 1 Week",
      review: "Oh, man! When I first heard about Fluffernutter Whizbang! from www.FunkyFluffernutterWhizbang.com, I thought it was a joke. But just one week in and my life is already on a new trajectory. I can't believe how much joy this product brings me every day. Can't recommend it enough!",
    },
    {
      name: "Sarah Thompson",
      rating: 4,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-criativithy-1821095.jpg",
      timeUsed:"Used for 3 days",
      review: "Only three days and I'm sold! At first, I chuckled at the name - Fluffernutter Whizbang? But the results? Absolutely no joke. My mornings have been transformed. Thank you, www.FunkyFluffernutterWhizbang.com for this little miracle!",
    },
    {
      name: "Jake Miller",
      rating: 3,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-bruno-salvadori-2269872.jpg",
      timeUsed:"Used for 2 Months",
      review: "It's been two months with my Fluffernutter Whizbang, and honestly, I can't remember life before it. It's that essential. The name might sound silly, but the benefits are profoundly serious. www.FunkyFluffernutterWhizbang.com, you've got a lifelong customer!",
    },
    {
      name: "Emily Roberts",
      rating: 2,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-andrea-piacquadio-3779760.jpg",
      timeUsed:"Used for 6 Hours",
      review: "Okay, so I've only had the Fluffernutter Whizbang for a few hours, but I HAD to leave a review. It's already making waves in my day-to-day routine. If you haven't been to www.FunkyFluffernutterWhizbang.com yet, you're missing out. Big time.",
    },
    {
      name: "Chris Johnson",
      rating: 1,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-kelvin-frança-3242038.jpg",
      timeUsed:"Used for 1 Year",
      review: "A full year with the Fluffernutter Whizbang and every day feels like the first! Whenever someone asks me about the secret to my happiness, I just point them to www.FunkyFluffernutterWhizbang.com. This product is the epitome of 'Don't judge a book by its cover' (or name)!",
    },
    {
      name: "Lisa Williams",
      rating: 5,
      image: "C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\pexels-monstera-production-5876695.jpg",
      timeUsed:"Used for 5 Days",
      review: "Just five days in, and I'm already wondering how I ever managed without the Fluffernutter Whizbang. I was skeptical given the quirky name, but it's safe to say I'm now a huge fan! For anyone on the fence, just visit www.FunkyFluffernutterWhizbang.com and take the leap. Life-changing, to say the least!",
    }
  ]

//select items

const author = document.getElementById("author");
const rating = document.getElementById("rating");
const img = document.getElementById("personImg");
const timeUsed = document.getElementById("timeUsed");
const reviewInfo = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item
let currentIndex = 0;

//load intial item
window.addEventListener('DOMContentLoaded', function(){
 loadReviews(currentIndex)

});

function loadReviews(person){
  const reviewsData = reviews[person];
  img.src = reviewsData.image;
  author.textcontent = reviewsData.name;
  //rating.innerText = reviewsData.rating;
  timeUsed.textContent = reviewsData.timeUsed;
  reviewInfo.textContent = reviewsData.review;
  let fillStar = "<img class=\"fillStar\" src=\"C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\star-fill.svg\" alt=\"\">";
  let emptyStar = "<img class=\"emptyStar\" src=\"C:\\Users\\zgfon\\OneDrive\\Desktop\\GitHub Repositorys\\Enmishpat.github.io\\classProjects\\reviewsImages\\star.svg\" alt=\"\">";
  rating.innerHTML = "";

  for(star=0; star<reviewsData.rating; star++){
    rating.innerHTML += fillStar;
    
  };

}; 

// show next person

nextBtn.addEventListener('click', function(){
  currentIndex++;
  if(currentIndex > reviews.length){
    currentIndex = 0; 
  }
  loadReviews(currentIndex);
});

// show previous person
preBtn.addEventListener('click', function(){
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = reviews.length-1;
  }
  loadReviews(currentIndex);
});

//shows random person
randomBtn.addEventListener('click', function(){
  currentIndex = Math.floor(Math.random()* reviews.length);
  loadReviews(currentIndex);
})

//adding stars to rating
//function ratingStars(){}