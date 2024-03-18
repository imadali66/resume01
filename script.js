const scroll = new LocomotiveScroll({
    el: document.querySelector('#mainBody'),
    smooth: true, 
});


//  // Example function to check if the user is authenticated
// function isAuthenticated() {
//     // Your authentication logic here
//     return true; // Return true if the user is authenticated, false otherwise
// }

// // Function to toggle visibility of login, signup, and logout buttons based on authentication status
// function toggleButtons() {
//     const loginButton = document.getElementById('loginButton');
//     const signupButton = document.getElementById('signupButton');
//     const logoutButton = document.getElementById('logoutButton');

//     if (isAuthenticated()) {
//         loginButton.style.display = 'none';
//         signupButton.style.display = 'none';
//         logoutButton.style.display = 'block';
//     } else {
//         loginButton.style.display = 'block';
//         signupButton.style.display = 'block';
//         logoutButton.style.display = 'none';
//     }
// }

// // Call the toggleButtons function when the page loads
// window.addEventListener('load', toggleButtons);
