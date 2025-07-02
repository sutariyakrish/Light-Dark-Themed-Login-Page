document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const correctUsername = "Krish";
    const correctPassword = "7861926992";

    const usernameEntered = document.querySelector('#username').value.trim();
    const passwordEntered = document.querySelector('input[type="password"]').value.trim();

    if (usernameEntered !== correctUsername || passwordEntered !== correctPassword) {
        document.querySelector('.alert').textContent = '!Please Enter Correct Username/Password';
    } else {
        document.querySelector('.alert').textContent = '';
        alert("Login Successful");
        // Optionally redirect or do more
    }
});
