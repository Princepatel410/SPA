 
const pages = {
    home: `
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple SPA without using any frameworks.</p>
    `,
    about: `
      <h1>About Us</h1>
      <p>This SPA was built using plain HTML, CSS, and JavaScript!</p>
    `
  };
 
 
  function loadPage() {
    const contentDiv = document.getElementById('content');
    const page = window.location.hash.substring(1) || 'home';
 
    // Check if the page exists in our 'pages' object
    if (pages[page]) {
      contentDiv.innerHTML = pages[page];
    } else {
      contentDiv.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
  }
 
 
  window.addEventListener('hashchange', loadPage);
 
  window.addEventListener('DOMContentLoaded', loadPage);
 
 