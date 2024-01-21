function loginUser() {
       let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let storedUserJSON = localStorage.getItem('currentUser');
    if (storedUserJSON) {
        let storedUser = JSON.parse(storedUserJSON);
        if (storedUser.email === email && storedUser.password === password) {
            window.location.href = 'file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/project%201/main/main.html';
            return;
        }
    }
    alert('Invalid email or password. Please try again.');
}