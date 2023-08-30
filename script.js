const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const twitter = document.querySelector('#twitter');
const content1 = document.querySelector('.content-clip1');
const content2 = document.querySelector('.content-clip2');
const content3 = document.querySelector('.content-clip3');

function openInstagram(){
    instagram.checked = true;
    content1.style.zIndex = 10;
    content2.style.zIndex = 1;
    content3.style.zIndex = 1;
}
function openLinkedin(){
    linkedin.checked = true;
    content1.style.zIndex = 1;
    content2.style.zIndex = 10;
    content3.style.zIndex = 1;
}
function openTwitter(){
    twitter.checked = true;
    content1.style.zIndex = 1;
    content2.style.zIndex = 1;
    content3.style.zIndex = 10;
}
