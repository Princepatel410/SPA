function showPage(pageId) {
    document.querySelector(".active")?.classList.remove("active"); // Hide the current page
    document.getElementById(pageId).classList.add("active"); // Show the selected page
}
