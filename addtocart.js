let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=> {
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=> {
    body.classList.remove('active');
})
let products = [
    {
        id : 1,
        name: 'Happy Ever After',
        images: '1.jpg',
        price: 29.99

    },
    {
        id : 2,
        name: 'Forever Pink',
        images: '2.jpg',
        price: 29.99

    },
    {
        id : 3,
        name: '4Lifer',
        images: '3.jpg',
        price: 29.99

    },
    {
        id : 4,
        name: 'Its a forever thing',
        images: '4.jpg',
        price: 29.99

    },
    {
        id : 5,
        name: 'Sure Thing',
        images: '5.jpg',
        price: 29.99

    },
    {
        id : 6,
        name: 'Forever Yours',
        images: '6.jpg',
        price: 29.99

    },
];

function initApp(){
    products.forEach((value, key)=>{
       let newDiv = document.createElement('div');
       newDiv.classList.add('item');
       newDiv.innerHTML = `
          <img src="images/${value.images}"/>
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCart(${key})">Add To Cart</button>
       `;
       list.appendChild(newDiv);
    })
}
initApp();

// Use an object instead of an array for cart items
let cart = {};

function addToCart(key) {
    if (cart[key] == null) {
        cart[key] = products[key];
        cart[key].quantity = 1;
    } else {
        cart[key].quantity++;
    }
    reloadCart();
}

function reloadCart() {
    let listCart = document.querySelector('.listCart');
    
    listCart.innerHTML = '';
    
    let count = 0;
    let totalPrice = 0;
    
    for (const key in cart) {
        if (cart.hasOwnProperty(key)) {
            const product = cart[key];
            
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <div><img src="images/${product.images}"/></div>
                <div>${product.name}</div>
                <div>$${(product.price * product.quantity).toFixed(2)}</div>
                <div>${product.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                    <div class="count">${product.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
                </div>
            `;
            
            listCart.appendChild(cartItem);
            
            totalPrice += product.price * product.quantity;
            count += product.quantity;
        }
    }
    
    total.innerText = totalPrice.toFixed(2);
    quantity.innerText = count;
}


function reloadCart() {
    let listCart = document.querySelector('.listCart');
    
    listCart.innerHTML = '';
    
    let count = 0;
    let totalPrice = 0;
    
    for (const key in cart) {
        if (cart.hasOwnProperty(key)) {
            const product = cart[key];
            
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <div><img src="images/${product.images}"/></div>
                <div>${product.name}</div>
                <div>$${(product.price * product.quantity).toFixed(2)}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                    <div class="count">${product.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
                </div>
                <div>
                    <button onclick="deleteItem(${key})">Delete</button>
                </div>
            `;
            
            listCart.appendChild(cartItem);
            
            totalPrice += product.price * product.quantity;
            count += product.quantity;
        }
    }
    
    total.innerText = totalPrice.toFixed(2);
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (cart[key]) {
        if (newQuantity >= 0) {
            cart[key].quantity = newQuantity;
            reloadCart();
        }
    }
}

function deleteItem(key) {
    if (cart[key]) {
        delete cart[key];
        reloadCart();
    }
}




