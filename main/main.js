document.addEventListener('DOMContentLoaded', function() {
    const welcomeButton = document.getElementById('welcomeButton');
    welcomeButton.addEventListener('click', function() {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/single%20product/single-product.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const product = document.getElementById('productsLink');
    product.addEventListener('click', function() {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/single%20product/single-product.html';
    });
});


const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/index.html'; // Update with your login page URL
});
const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/signup/signup.html'; // Update with your signup page URL
});
const Home = document.getElementById('Home');
Home.addEventListener('click', () => {
    event.preventDefault();
    window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/main.html';
});



let conatctBtn = document.getElementById('contactLink');
    conatctBtn.addEventListener('click', () => {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/products/products.html'; 
    });






    


