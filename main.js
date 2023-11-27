const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const hamMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click',  toggleHamMenu);
cart.addEventListener('click',  toggleCart);

function toggleDesktopMenu (){

    const isDeskMenuClosed = menuEmail.classList.contains('inactive');

    if(!isDeskMenuClosed){
        myOrder.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleHamMenu (){

    const isAsideClosed = cart.classList.contains('inactive');

    if(!isAsideClosed){
        myOrder.classList.add('inactive')
    }

    hamMenu.classList.toggle('inactive');
}

function toggleCart (){
    const isProductClosed = iconMenu.classList.contains('inactive');

    if(!isProductClosed){
        hamMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }


    myOrder.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: '20.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
})

productList.push({
    name: 'bike',
    price: '20.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
})

productList.push({
    name: 'bike',
    price: '20.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
})

productList.push({
    name: 'bike',
    price: '20.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
})

productList.push({
    name: 'bike',
    price: '20.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600',
})