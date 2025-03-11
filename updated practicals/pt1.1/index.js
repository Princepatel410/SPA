function generateNavigationMenu(pages) {
    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.style.listStyle = "none";
    menu.style.display = "flex";
    menu.style.justifyContent = "center"; 
    menu.style.gap = "20px"; 
    menu.style.padding = "0";
    menu.style.margin = "0";
    menu.style.backgroundColor = "lightgray";
    pages.forEach((page) => {
        const item = document.createElement("li");
        if (page !== "Home") {
            item.innerHTML = `<a href="./${page}.html">${page}</a>`;
            menu.appendChild(item);
        } else {
            item.innerHTML = `<a href="./index.html">Home</a>`;
            menu.appendChild(item);
        }
    });
    document.getElementById("menu-container").appendChild(menu);
    document.getElementById("menu").style.display = "flex";
}

generateNavigationMenu(["Home", "About", "Services", "Contact"]);


