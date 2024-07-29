const receiveH = document.getElementById("Home");
const senderH = document.getElementById("Homelink");
const senderHs = document.getElementById("Homelinks");

senderH.addEventListener('click', function(event){
  event.preventDefault();
  receiveH.scrollIntoView({behavior: "smooth"})
});

senderHs.addEventListener('click', function(event){
  event.preventDefault();
  receiveH.scrollIntoView({behavior: "smooth"})
});

const receiveA = document.getElementById("About");
const senderA = document.getElementById("Aboutlink");
const senderAs = document.getElementById("Aboutlinks");

senderA.addEventListener('click', function(event){
  event.preventDefault();
  receiveA.scrollIntoView({behavior: "smooth"})
});

senderAs.addEventListener('click', function(event){
  event.preventDefault();
  receiveA.scrollIntoView({behavior: "smooth"})
});

const receiveE = document.getElementById("Education");
const senderE = document.getElementById("Educationlink");
const senderEs = document.getElementById("Educationlinks");

senderE.addEventListener('click', function(event){
  event.preventDefault();
  receiveE.scrollIntoView({behavior: "smooth"})
});

senderEs.addEventListener('click', function(event){
  event.preventDefault();
  receiveE.scrollIntoView({behavior: "smooth"})
});

const receiveS = document.getElementById('Skills');
const senderS = document.getElementById("Skillslink");
const senderSs = document.getElementById("Skillslinks");

senderS.addEventListener('click', function(event){
    event.preventDefault();
    receiveS.scrollIntoView({behavior: "smooth"})
});

senderSs.addEventListener('click', function(event){
  event.preventDefault();
  receiveS.scrollIntoView({behavior: "smooth"})
});

const receiveC = document.getElementById('Contract');
const senderC = document.getElementById("Contractlink");
const senderCs = document.getElementById("Contractlinks");

senderC.addEventListener('click', function(event){
    event.preventDefault();
    receiveC.scrollIntoView({behavior: "smooth"})
});

senderCs.addEventListener('click', function(event){
  event.preventDefault();
  receiveC.scrollIntoView({behavior: "smooth"})
});


const text = document.getElementById("Hello");
let strtext = text.textContent
text.textContent = "";
let i = 1;

function typingtext(){
  if(i <= (strtext.length)){
    let newtext = strtext.slice(0, i);
    text.textContent = newtext +"|";
    i++;
    setTimeout(() => typingtext(), 150);
  }else {
    text.textContent = "";
    i = 1;
    typingtext();
  }
}
typingtext();
window.addEventListener('scroll', reveal);

function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for(let j = 0; j < reveals.length; j++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[j].getBoundingClientRect().top;
    let revealpoint = 100;

    if(revealtop < (windowheight - revealpoint)){
      reveals[j].classList.add('active');
    }else{
      reveals[j].classList.remove('active');
    }
  }
}
function openNav(){
  let openN = document.querySelector('.side-nav');
  openN.style.width = 300+"px";
}
function closeNav(){
  let closeN = document.querySelector('.side-nav');
  closeN.style.width = 0;
}