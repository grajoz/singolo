console.log("kukusiky");

const NAV=document.getElementById('nav');
const SUBMIT=document.getElementById('submit');
const CLOSE_BUTTON=document.getElementById('close-button');

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