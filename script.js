

function drawGrid(n) {

    const container = document.querySelector(".container");
    container.style.display = "flex";
    // container.style.boxSizing = "border-box"; 

    for(i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style", "border: 1px solid black");
        row.style.height = "35px";
        row.style.width = "35px";
        row.style.boxSizing = "border-box"; 
        container.appendChild(row);

    }
   
}
