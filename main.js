const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const hamMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');
const cartsContainer = document.querySelector('.cards-container');

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

/*<div class="cards-container">
      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
*/

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price ;

    const productName = document.createElement('p');
    productName.innerText = product.name ;

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    cartsContainer.appendChild(productCard);
}