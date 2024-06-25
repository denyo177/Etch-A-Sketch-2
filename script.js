

function drawGrid(n) {

    const container = document.querySelector(".container");

    for(j = 0; j < n; j++) {
        const column = document.createElement("div");
        column.style.display = "flex";
        for(i = 0; i < n; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("style", "border: 1px solid black");
            row.style.height = "35px";
            row.style.width = "35px";
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


