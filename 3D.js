//Movement Animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
//Items
const title = document.querySelector("body > div > div > div.info > h1:nth-child(1)")
const tetle = document.querySelector("body > div > div > div.info > h1:nth-child(2)")
const sneaker = document.querySelector('.sneakers img')
const circle = document.querySelector('.sneakers circle')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.active')

//Moving Animation Event
container.addEventListener('mouseover', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = '.5s ease-in-out';
    //popout
    title.style.transform = 'translateZ(300px)';
    tetle.style.transform = 'translateZ(500px)';
    sneaker.style.transform = 'translateZ(800px) rotateY(180deg) rotateZ(15deg)';
    // circle.style.transform = 'translateZ(200px) rotateY(180deg)';
    description.style.transform = "translateZ(150px)"
    sizes.style.transform = "translateZ(100px)"
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = '.5s ease-in-out';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin
    title.style.transform = 'translateZ(0px)';
    tetle.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateY(0deg) rotateZ(0deg)';
    // circle.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
});