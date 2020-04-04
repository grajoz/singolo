console.log("kukusiky");

const NAV_BUTTON=document.getElementById('nav-button');
const SUBMIT=document.getElementById('submit');
const CLOSE_BUTTON=document.getElementById('close-button');
const PORTFOLIO__BUTTONS=document.getElementById('portfolio__buttons');
const PORTFOLIO__IMGS=document.getElementById('portfolio__imgs');
const CHEV_SLIDE1_R=document.getElementById('chev_slide1_r');
const CHEV_SLIDE2_R=document.getElementById('chev_slide2_r');
const CHEV_SLIDE1_L=document.getElementById('chev_slide1_l');
const CHEV_SLIDE2_L=document.getElementById('chev_slide2_l');
const BUTTON_IPHONE_HORIZONTAL=document.getElementById('button-iphone-horizontal');

const BUTTON_IPHONE_VERTICAL=document.getElementById('button-iphone-vertical');


const TIME33=50;
const TIME66=300;


NAV_BUTTON.addEventListener('click', (event) => {
    let elem_nav=document.getElementById('nav');
    elem_nav.classList.toggle('nav__menu_active');
    let elem_nav_button=document.getElementById('nav-button');
    elem_nav_button.classList.toggle('hamburg-active');
    let elem_h1_ac=document.getElementById('h1');
    elem_h1_ac.classList.toggle('h1-active');
    let elem_h1=document.getElementById('h1');
    elem_h1.classList.toggle('h1');
});

///// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
///// плавный скролл



const NAV=document.getElementById('nav');
NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');




    let elem_nav_button=document.getElementById('nav-button');
    if (elem_nav_button.classList.value==='hamburg hamburg-active'){
        let elem_nav=document.getElementById('nav');
        elem_nav.classList.toggle('nav__menu_active');
        let elem_nav_button=document.getElementById('nav-button');
        elem_nav_button.classList.toggle('hamburg-active');
        let elem_h1_ac=document.getElementById('h1');
        elem_h1_ac.classList.toggle('h1-active');
        let elem_h1=document.getElementById('h1');
        elem_h1.classList.toggle('h1');

};
    
});






window.onscroll = function() {
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    

        if (posTop>=0&&posTop<=470){
            NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
            document.getElementById('home__nav').classList.add('active');
        }
        if (posTop>=470&&posTop<=1044){
            NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
            document.getElementById('services__nav').classList.add('active');
        }
        if (posTop>=1044&&posTop<=1914){
            NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
            document.getElementById('portfolio__nav').classList.add('active');
        }
        if (posTop>=1914&&posTop<=2618){
            NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
            document.getElementById('about__nav').classList.add('active');
        }
        if (posTop>=2618&&posTop<=3718){
            NAV.querySelectorAll('li').forEach(el =>el.classList.remove('active'));
            document.getElementById('contact__nav').classList.add('active');
        }
    }


// Horizontal
BUTTON_IPHONE_HORIZONTAL.addEventListener('click', (event) => {

    let elem=document.querySelector('#black-dislay-iphone-horizontal');
    elem.classList.toggle("black-dislay-iphone-horizontal");
    elem.classList.toggle("display-none");
    
});


//Vertical

BUTTON_IPHONE_VERTICAL.addEventListener('click', (event) => {
    let elem=document.querySelector('#black-dislay-iphone-vertical');
    elem.classList.toggle("black-dislay-iphone-vertical");
    elem.classList.toggle("display-none");

});


CHEV_SLIDE1_L.addEventListener('click', (event) => {
    let elem5=document.querySelector('#black-dislay-iphone-vertical');
    if (elem5.classList.contains("black-dislay-iphone-vertical")){
        elem5.classList.toggle("black-dislay-iphone-vertical");
    elem5.classList.toggle("display-none");
    }

    let elem6=document.querySelector('#black-dislay-iphone-horizontal');
    if (elem6.classList.contains("black-dislay-iphone-horizontal")){
        elem6.classList.toggle("black-dislay-iphone-horizontal");
    elem6.classList.toggle("display-none");
    }

    let elem=document.querySelector('#slide1img');
    elem.classList.remove('slide1');
    elem.classList.add('slide1Right33');
    let slide2img=document.querySelector('#slide2img');
    slide2img.classList.remove('slide2');
    slide2img.classList.add('slide1left66');

    function sayHi() {
        elem.classList.remove('slide1Right33');
         elem.classList.add('slide1Right66');
         slide2img.classList.remove('slide1left66');
         slide2img.classList.add('slide1left33');
      }      setTimeout(sayHi, TIME33); 
     
      function sayHi2() {
    elem.classList.remove('slide1Right66');
    elem.classList.add('slide1');
    slide2img.classList.remove('slide1left33');
    slide2img.classList.add('slide2');
}     setTimeout(sayHi2, TIME66);

function sayHi3() {
    let elem=document.querySelector('#slide1');
   
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide2');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');
}      setTimeout(sayHi3, TIME66+1);
});

CHEV_SLIDE2_L.addEventListener('click', (event) => {

    let elem=document.querySelector('#slideP2');
    elem.classList.remove('slide2');
    elem.classList.add('slide1Right33');
    let slide2img=document.querySelector('#slideP1');
    slide2img.classList.remove('slide1');
    slide2img.classList.add('slide1left66');

    function sayHi() {
        elem.classList.remove('slide1Right33');
         elem.classList.add('slide1Right66');
         slide2img.classList.remove('slide1left66');
         slide2img.classList.add('slide1left33');
      }      setTimeout(sayHi, TIME33); 

      function sayHi2() {
    elem.classList.remove('slide1Right66');
    elem.classList.add('slide2');
    slide2img.classList.remove('slide1left33');
         slide2img.classList.add('slide1');
}     setTimeout(sayHi2, TIME66);


function sayHi3() {
    let elem=document.querySelector('#slide2');
   
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide1');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');
}      setTimeout(sayHi3, TIME66+1);
});

CHEV_SLIDE1_R.addEventListener('click', (event) => {
    let elem5=document.querySelector('#black-dislay-iphone-vertical');

    if (elem5.classList.contains("black-dislay-iphone-vertical")){
        elem5.classList.toggle("black-dislay-iphone-vertical");
    elem5.classList.toggle("display-none");
    }

    let elem6=document.querySelector('#black-dislay-iphone-horizontal');

    if (elem6.classList.contains("black-dislay-iphone-horizontal")){
        elem6.classList.toggle("black-dislay-iphone-horizontal");
    elem6.classList.toggle("display-none");
    }


    let elem=document.querySelector('#slide1img');
    elem.classList.remove('slide1');
    elem.classList.add('slide1left33');
    let slide2img=document.querySelector('#slide2img');
    slide2img.classList.remove('slide2');
    slide2img.classList.add('slide1Right66');

    function sayHi() {
        elem.classList.remove('slide1left33');
         elem.classList.add('slide1left66');
         slide2img.classList.remove('slide1Right66');
         slide2img.classList.add('slide1Right33');
      }      setTimeout(sayHi, TIME33); 

      function sayHi2() {
    elem.classList.remove('slide1left66');
    elem.classList.add('slide1');
    slide2img.classList.remove('slide1Right33');
    slide2img.classList.add('slide2');
}     setTimeout(sayHi2, TIME66);

    function sayHi3() {

    elem=document.querySelector('#slide1');
    console.log(elem);
    elem.classList.remove('slider-img__active');
    elem.classList.add('slider-img__pacive');
   
    elem=document.querySelector('#slide2');
    elem.classList.remove('slider-img__pacive');
    elem.classList.add('slider-img__active');
}      setTimeout(sayHi3, TIME66+1);
});

CHEV_SLIDE2_R.addEventListener('click', (event) => {

    let elem=document.querySelector('#slideP2');
    elem.classList.remove('slide2');
    elem.classList.add('slide1left33');
    let slide2img=document.querySelector('#slideP1');
    slide2img.classList.remove('slide1');
    slide2img.classList.add('slide1Right66');

    function sayHi() {
                elem.classList.remove('slide1left33');
                elem.classList.add('slide1left66');
                slide2img.classList.remove('slide1Right66');
                slide2img.classList.add('slide1Right33');
      }      setTimeout(sayHi, TIME33); 

      function sayHi2() {
            elem.classList.remove('slide1left66');
            elem.classList.add('slide2');
            slide2img.classList.remove('slide1Right33');
            slide2img.classList.add('slide1');
}     setTimeout(sayHi2, TIME66);



    function sayHi3() {
            let elem=document.querySelector('#slide2');
        
            elem.classList.remove('slider-img__active');
            elem.classList.add('slider-img__pacive');
        
            elem=document.querySelector('#slide1');
            elem.classList.remove('slider-img__pacive');
            elem.classList.add('slider-img__active');
}      setTimeout(sayHi3, TIME66+1);
});
let controlPosition;
/*const PORTFOLIO__IMGS=document.getElementById('portfolio__imgs');*/
PORTFOLIO__IMGS.addEventListener('click', (event) => {
    let div="div";
    PORTFOLIO__IMGS.querySelectorAll(div).forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');
    controlPosition=event.target.classList.value;
    controlPosition=controlPosition.match(/\d/g);
    controlPosition=Number(controlPosition.join(''));
 
});


let controlRandom=0;

PORTFOLIO__BUTTONS.addEventListener('click', (event) => {
PORTFOLIO__BUTTONS.querySelectorAll('button').forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');
      let y=0;
      let x=0;
      let z=0;
        let r; 
       let random=Math.ceil(Math.random()*12);
       while (controlRandom==random){random=Math.ceil(Math.random()*12)};
    let a="", b="";
    for (let i=1;i<13;i++){

            controlRandom=random;
            r=i+random;
            if (r>12){r=r-12};
            a="portfolio_img_img"+r;  
            let elem = document.querySelector("#img"+i);
            elemR = document.querySelector("#img"+r);
          
            if (elem.classList.contains("active")){
                 elem.classList.remove(elem.classList[1]);
                 y=i;
            } 

            elem.classList.remove(elem.classList[1]);
            elem.classList.add(a);

            
           
        
    } 
    
    for (let i=1;i<13;i++){
 
    elem = document.querySelector("#img"+i); 
    elem1 =Number(elem.classList.value.match(/\d/g).join(''));

  if (controlPosition==elem1){elem.classList.add("active");
 
}
   



}
    
 
});

SUBMIT.addEventListener('click', () => {
if (document.getElementById('input__text_name').value==""){alert('Fill in "Name"')}else
    {
        if (document.getElementById('input__text_email').value==""){alert('Fill in "Email"')}else
            {
                if (!(/^[\w-\.]+@[\w-\.]+\.[\w-]{2,}$/i).test(document.getElementById('input__text_email').value)){alert('Fill in "Email" correctly')}else
                    {

                    let subject = document.getElementById('subject').value.toString();
                    if (subject==''){subject="No subject."}else
                    {
                        subject='Subject: '+subject;
                    }
                    document.getElementById('result__subject').innerText = subject;


                    let description = document.getElementById('description').value.toString();
                    if (description==''){description="No description."}else
                    {
                        description='Description: '+description;
                    }
                    document.getElementById('result__description').innerText = description;

                    document.getElementById('message-block').classList.remove('hidden');
                    }
            }

    }
});

CLOSE_BUTTON.addEventListener('click', () => { 
    
    document.getElementById('result__subject').innerText = '';
    document.getElementById('result__description').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('input__text_name').value='';
    document.getElementById('input__text_email').value='';
    document.getElementById('subject').value='';
    document.getElementById('description').value='';
});

