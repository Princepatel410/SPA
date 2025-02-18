const themeToggleButton = document.getElementById('theme-toggle');
 
// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');  // Toggle 'dark-mode' class on body
 
  // Save user's theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
 
// Load saved theme preference when the page loads
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
 
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
 
// Event listener for the button
themeToggleButton.addEventListener('click', toggleTheme);
 
// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', loadTheme);
 
 