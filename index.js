const sideMenu = document.querySelector("aside");
const menuBtn =document.querySelector('#menu-btn');
const closeBtn = document.querySelector("#close-btn");

menu-Btn.addEventListener('click' ,()=>{
sideMenu.style.display ='block';
})
close-Btn.addEventListener('click',() =>{
    sideMenu.style.display ='none';
    })
    themeToggler.addEventListener('click',() => {
        document.body.classList.toggle('dark-theme-variables');

        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    })
