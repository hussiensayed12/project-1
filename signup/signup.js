function registerUser() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    let user = {
        fullName: fullName,
        email: email,
        password: password
    };
    let userJSON = JSON.stringify(user);
    localStorage.setItem('currentUser', userJSON);
    alert("Registration successful!");
  
}
document.getElementById('loginLink').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/index.html';
});
