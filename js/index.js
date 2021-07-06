const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta = document.querySelector("#cta-img");
cta.src = "img/header-img.png";

/*const navLinks = document.getElementsByTagName("a");
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product"
navLinks[2].textContent = "Vision"
navLinks[3].textContent = "Features"
navLinks[4].textContent = "About"
navLinks[5].textContent = "Contact"*/

const navLinks = document.querySelectorAll("a");
console.log(navLinks);
navLinks.forEach((element,i)=>{
  element.textContent = siteContent["nav"][`nav-item-${i+1}`];
});


const headerText = document.getElementsByTagName( "h1");
headerText[0].textContent = siteContent.cta.h1;

const buttonMain = document.getElementsByTagName("button");
buttonMain[0].textContent = siteContent.cta.button;




const divHeaders = document.querySelectorAll(" .text-content h4");
divHeaders[0].textContent = siteContent["main-content"]["features-h4"];
divHeaders[1].textContent = siteContent["main-content"]["about-h4"];
divHeaders[2].textContent = siteContent["main-content"]["services-h4"];
divHeaders[3].textContent = siteContent["main-content"]["product-h4"];
divHeaders[4].textContent = siteContent["main-content"]["vision-h4"];


const divText = document.querySelectorAll(".text-content p");
divText[0].textContent = siteContent["main-content"]["features-content"];
divText[1].textContent = siteContent["main-content"]["about-content"];
divText[2].textContent = siteContent["main-content"]["services-content"];
divText[3].textContent = siteContent["main-content"]["product-content"];
divText[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg";



document.querySelector("button").onclick = displayDate;

function displayDate() {
 
    document.querySelector(".cta-text h1").innerHTML = Date()
  }
  ;


const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];


const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

function mouseOver(obj) {
  obj.innerHTML = "CLICK ME!!!!";
  obj.style.color = "blue";
}

function mouseOut(obj) {
  obj.innerHTML = "OR DONT!!!"
  obj.style.color = "red";
}

var element = document.querySelector("body");

                                  
element.addEventListener("click", function() {
  if(element.style.color === "red"){
    element.style.color = "black";
  }
    else element.style.color = "red"
    
      
  }, false);

  function blowUp(obj){
    obj.style.color = "hotpink";
    
  }

  function blowOut(obj){
    obj.style.color = "black";
  }

let nav1 = document.createElement("a");
let nav2 = document.createElement("a");
var nav1Text= document.createTextNode('Start');
var nav2Text= document.createTextNode('Finish');

nav1.appendChild(nav1Text);
nav2.appendChild(nav2Text);
let firstNav = document.querySelector("nav");

firstNav.appendChild(nav1);
firstNav.prepend(nav2);


 
  

  

 



