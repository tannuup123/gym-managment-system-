// Function to toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById('password');
  const eyeIcon = document.getElementById('eyeIcon');
  
  // Toggle between 'password' and 'text' type
  if (passwordField.type === 'password') {
    passwordField.type = 'text'; // Show password
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash'); // Change icon to eye-slash
  } else {
    passwordField.type = 'password'; // Hide password
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye'); // Change icon back to eye
  }
}

// Function to toggle between login and signup forms
function toggleSignup() {
  // Create and dynamically inject the signup form
  const loginContent = document.querySelector('.login_content');

  // Check if the signup form already exists on the page
  let signupForm = document.getElementById('signupForm');
  if (!signupForm) {
    // If the signup form does not exist, create it
    signupForm = document.createElement('div');
    signupForm.id = 'signupForm';
    signupForm.innerHTML = `
      <label for="signupName"><b>Username</b></label>
      <input type="text" id="signupName" placeholder="Enter Username" required>

      <label for="signupEmail"><b>Email</b></label>
      <input type="email" id="signupEmail" placeholder="Enter Email" required>

      <label for="signupPassword"><b>Password</b></label>
      <input type="password" id="signupPassword" placeholder="Enter Password" required>

      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="#" onclick="toggleSignup()">Login here</a></p>
    `;

    // Hide the login form and show the signup form
    loginContent.classList.add('hidden');
    document.body.appendChild(signupForm);
  } else {
    // If the signup form already exists, remove it and show login form
    signupForm.remove();
    loginContent.classList.remove('hidden');
  }
}
// Event listener for login button
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the script runs after DOM content is fully loaded
  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
    loginBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission
      // Get the selected role from the dropdown
      const role = document.querySelector('select[name="role"]').value;

      // Redirect based on role
      if (role === 'admin') {
        window.location.href = 'admin_dashboard.html'; // Redirect to Admin dashboard
      } else if (role === 'member') {
        window.location.href = 'member_dashboard.html'; // Redirect to Member dashboard
      } else if (role === 'user') {
        window.location.href = 'user_dashboard.html'; // Redirect to User dashboard
      } else {
        alert('Please select a valid role.');
      }
    });
  } else {
    console.error('Login button not found. Check your HTML structure.');
  }
});
