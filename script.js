console.log("kukusiky");

const NAV=document.getElementById('nav');
const SUBMIT=document.getElementById('submit');
const CLOSE_BUTTON=document.getElementById('close-button');
const PORTFOLIO__BUTTONS=document.getElementById('portfolio__buttons');
const PORTFOLIO__IMGS=document.getElementById('portfolio__imgs');
const CHEV_SLIDE1_R=document.getElementById('chev_slide1_r');
const CHEV_SLIDE2_R=document.getElementById('chev_slide2_r');
const CHEV_SLIDE1_L=document.getElementById('chev_slide1_l');
const CHEV_SLIDE2_L=document.getElementById('chev_slide2_l');
const BUTTON_IPHONE_HORIZONTAL=document.getElementById('button-iphone-horizontal');
const BUTTON_IPHONE_HORIZONTAL_NONE=document.getElementById('button-iphone-horizontal_none');


BUTTON_IPHONE_HORIZONTAL.addEventListener('click', (event) => {

    let elem=document.querySelector('#black-dislay-iphone-horizontal');
    elem.classList.remove('display-none');
    elem.classList.add('black-dislay-iphone-horizontal');
   
    let elem1=document.querySelector('#button-iphone-horizontal_none');
    elem1.classList.remove('display-none');
    elem1.classList.add('button-iphone-horizontal');

    let elem4=document.querySelector('#button-iphone-horizontal');
    elem4.classList.remove('button-iphone-horizontal');
    elem4.classList.add('display-none');

console.log(elem1)
});

BUTTON_IPHONE_HORIZONTAL_NONE.addEventListener('click', (event) => {

    let elem3=document.querySelector('#black-dislay-iphone-horizontal');
    elem3.classList.remove('black-dislay-iphone-horizontal');
    elem3.classList.add('display-none');
   
    let elem4=document.querySelector('#button-iphone-horizontal');
    elem4.classList.remove('display-none');
    elem4.classList.add('button-iphone-horizontal');

    let elem1=document.querySelector('#button-iphone-horizontal_none');
    elem1.classList.remove('button-iphone-horizontal');
    elem1.classList.add('display-none');


});

CHEV_SLIDE1_R.addEventListener('click', (event) => {

    let elem=document.querySelector('#slide1');
    console.log(elem);
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide2');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');

});

CHEV_SLIDE2_R.addEventListener('click', (event) => {

    let elem=document.querySelector('#slide2');
    console.log(elem);
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide1');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');

});

CHEV_SLIDE1_L.addEventListener('click', (event) => {

    let elem=document.querySelector('#slide1');
    console.log(elem);
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide2');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');

});

CHEV_SLIDE2_L.addEventListener('click', (event) => {

    let elem=document.querySelector('#slide2');
    console.log(elem);
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide1');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');

});


PORTFOLIO__IMGS.addEventListener('click', (event) => {
    let div="div";
    PORTFOLIO__IMGS.querySelectorAll(div).forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');

});



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