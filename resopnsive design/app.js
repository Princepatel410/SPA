const gridContainer = document.getElementById('grid-container');
 
// Create grid items dynamically
function createGridItems(numItems) {
  gridContainer.innerHTML = ''; // Clear existing items
  for (let i = 1; i <= numItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = `Item ${i}`;
    gridContainer.appendChild(gridItem);
  }
}
 
// Adjust grid layout based on screen size
function adjustGridLayout() {
  const screenWidth = window.innerWidth;
 
  if (screenWidth >= 1200) {
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; // 4 columns for large screens
  } else if (screenWidth >= 768) {
    gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columns for tablets
  } else if (screenWidth >= 480) {
    gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns for small devices
  } else {
    gridContainer.style.gridTemplateColumns = '1fr'; // 1 column for very small screens
  }
}
 
// Initialize the grid and layout
window.addEventListener('DOMContentLoaded', () => {
  createGridItems(12);   // Create 12 grid items
  adjustGridLayout();    // Set the initial grid layout
});
 
// Adjust grid when window is resized
window.addEventListener('resize', adjustGridLayout);
 
 