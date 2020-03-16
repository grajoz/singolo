console.log("kukusiky");

const NAV=document.getElementById('nav');
const SUBMIT=document.getElementById('submit');
const CLOSE_BUTTON=document.getElementById('close-button');
const PORTFOLIO__BUTTONS=document.getElementById('portfolio__buttons');
const PORTFOLIO__IMGS=document.getElementById('portfolio__imgs');
const J=0;

PORTFOLIO__IMGS.addEventListener('click', (event) => {
    let div="div";
    PORTFOLIO__IMGS.querySelectorAll(div).forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');

});

let elem = document.querySelector("#img1")
let j=0;
//Выведем классы
console.log(elem.classList)

PORTFOLIO__BUTTONS.addEventListener('click', (event) => {
    PORTFOLIO__BUTTONS.querySelectorAll('button').forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');
       let r=0; 
  let a="", b="";
    for (let i=1;i<13;i++){
        
            r=i+j;
            if (r>12){r=r-12};
            a="portfolio_img_img"+r;
            if (i<12){b="portfolio_img_img"+(r+1)}else{b="portfolio_img_img"+1}
            console.log(a,b);
            elem = document.querySelector("#img"+i);
            elem.classList.add(b);
            elem.classList.remove(a);
       
    } j=j+1
});

NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');

});


SUBMIT.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');

});
CLOSE_BUTTON.addEventListener('click', () => {
    
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    
});