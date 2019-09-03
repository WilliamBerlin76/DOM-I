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
    "h1": "DOM \n Is Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let header = document.querySelector('header')

let navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[0].style.color = "green"
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[1].style.color = "green"
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[2].style.color = "green"
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[3].style.color = "green"
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[4].style.color = "green"
navBar[5].textContent = siteContent.nav["nav-item-6"];
navBar[5].style.color = "green";

const newNav = document.createElement('a');
newNav.textContent = "Shop";
newNav.style.fontSize = "1.8rem";
newNav.style.color = "Red";
newNav.style.display = "flex";
newNav.style.marginTop = "32px";
newNav.style.marginLeft = '20px'
header.appendChild(newNav)

const beforeNav = document.createElement('a');
beforeNav.textContent = 'Join';
beforeNav.style.fontSize = "1.8rem";
beforeNav.style.color = "purple";
beforeNav.style.marginTop = "32px";
beforeNav.style.marginRight = '20px'
header.prepend(beforeNav)

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const headerText = document.querySelector('h1')
headerText.textContent = siteContent.cta.h1;
headerText.style.wordSpacing= '250px';

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainContentH4 = document.querySelectorAll("h4");
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentH4[5].textContent = siteContent.contact["contact-h4"]

let p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];
p[5].textContent = siteContent.contact.address;
p[5].style.maxWidth = "140px"
p[6].textContent = siteContent.contact.phone;
p[7].textContent = siteContent.contact.email;
p[8].textContent = siteContent.footer.copyright;