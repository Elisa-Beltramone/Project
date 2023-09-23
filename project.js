document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
});
