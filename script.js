let list = document.querySelectorAll('.list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;1
let leftMockup = 0;//2
let left_each_item = 100 / (list.length -1);// 2

next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + left_each_item;
    changeCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - left_each_item;
    changeCarousel();
}
function changeCarousel(){
    //find item has class  to remove it
    let hidden_old = document.querySelector('.item.hidden');
    if(hidden_old) {
        hidden_old.classList.remove('hidden');
    }
    //find item old active to remove it and add class hidden
    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');
    //add class active in position item active new
    list[active].classList.add('active');
    // change mockup background
    mockup.style.setProperty('--left', leftMockup + '%');
}

// refresh auto run
refreshInterval = setInterval(
    () => next.click(), 5000
)
// add event auto run carousel 5s
let refreshInterval = setInterval(
    () => next.click(), 5000
)
clearInterval(refreshInterval);
