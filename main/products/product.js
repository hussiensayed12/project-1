 const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', () => {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/index.html'; // Update with your login page URL
    });
    const signupBtn = document.getElementById('signupBtn');
    signupBtn.addEventListener('click', () => {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/signup/signup.html'; 
    });
    const Home = document.getElementById('Home');
    Home.addEventListener('click', () => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/main.html';
    });

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'profile.html'; 
    });
    

    
    let conatctBtn = document.getElementById('contactLink');
    conatctBtn.addEventListener('click', () => {
        window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/products/products.html'; 
    });


    


















    



