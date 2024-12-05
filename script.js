let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type) {
    let itemSliders = document.querySelectorAll('.carousel .list .item');
    let itemThumbnails = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next') {
        listItemDom.appendChild(itemSliders[0]);
        thumbnailDom.appendChild(itemThumbnails[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSliders.length - 1;
        listItemDom.prepend(itemSliders[positionLastItem]);
        thumbnailDom.prepend(itemThumbnails[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}