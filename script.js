



function drawGrid(n) {

    const container = document.querySelector(".container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(j = 0; j < n; j++) {
        const column = document.createElement("div");
        column.style.display = "flex";
        for(i = 0; i < n; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("style", "border: 1px solid black");
            row.style.height = 550 / n + "px";
            row.style.width = 550 / n + "px";
            row.style.boxSizing = "border-box"; 
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    const divs = document.querySelectorAll(".row");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
    })
}


const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
    
    let size = prompt("Please enter the Size you want:");
    while (size < 0 || size > 25) {
        size = prompt("Please enter a smaller or valid number");
    };  

    drawGrid(size);
    
    }
);


