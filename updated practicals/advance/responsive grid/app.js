const gridContainer = document.getElementById('grid-container');
 

function createGridItems() {
  gridContainer.innerHTML = ''; 
  for (let i = 1; i <= 8; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = `Item ${i}`;
    gridContainer.appendChild(gridItem);
  }
}
 
function adjustGridLayout() {
  const screenWidth = window.innerWidth;
 
  if (screenWidth >= 1300) {
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
  } else if (screenWidth >= 780) {
    gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; 
  } else if (screenWidth >= 500) {
    gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
  } else {
    gridContainer.style.gridTemplateColumns = '1fr'; 
  }
}
 

window.addEventListener('DOMContentLoaded', () => {
  createGridItems(12);   
  adjustGridLayout();    
});
 

window.addEventListener('resize', adjustGridLayout);
 
 //theme switcher
 const button = document.getElementById('theme-switcher');
        const body = document.body;

        button.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            button.innerText = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
        });

    // spa
    function showPage(pageId) {
      document.querySelector(".active")?.classList.remove("active"); // Hide the current page
      document.getElementById(pageId).classList.add("active"); // Show the selected page
  }
  