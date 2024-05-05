const scriptURL = 'https://script.google.com/macros/s/AKfycbzWjLHy4csExttCViKRxHtXWTuEggXRfCArIQg3QbFg9KHr4-eBkEiLtc3da9sskYwPzg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you for subscribing!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});



const script_URL = 'https://script.google.com/macros/s/AKfycbxRjsayUENjX8gF1zUgB8FHtZXgtovpWSuSKwxlb73cd5XyHe9DlugYu1mtMOmuMld_UQ/exec';
const formss = document.forms['submit-to-second-google-sheet'];
const msgs = document.getElementById("subscribe_msg");

formss.addEventListener('submit', e => {
  e.preventDefault();
  fetch(script_URL, { method: 'POST', body: new FormData(formss)})
    .then(response => {
        msgs.innerHTML = "Thank you for subscribing!";
        setTimeout(function(){
            msgs.innerHTML = "";
        }, 5000);
        formss.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
