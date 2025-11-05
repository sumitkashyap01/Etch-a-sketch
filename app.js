

//Menu div
const main = document.createElement("div");
main.classList.add("menu");
document.body.prepend(main);

//Size customize
const range = document.createElement("input");
range.type = "range"
range.min = "8";
range.max = "64";
range.step = "8";
range.value = "16";
range.id = "rszrange";
main.append(range);

//Grid size customization
range.addEventListener("input",()=>{
    const size = range.value;
    makegrid(size);
    sizedp(size);
})

//Size display
const sizeDisplay = document.createElement("span");  
    sizeDisplay.style.marginLeft = "10px";
    sizeDisplay.textContent = `Grid Size: ${range.value} x ${range.value}`;
    main.append(sizeDisplay);

    //Size updates
    function sizedp(size){
    sizeDisplay.textContent = `Grid Size: ${size} x ${size}`;
}


//colorpicker button
const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.value = "#000000";
colorPicker.id = "color-picker";
colorPicker.style.marginLeft = "14px";
main.appendChild(colorPicker);

//Clear button
const reset = document.createElement("button");
reset.id = "resetbtn";
reset.textContent = "RESET"
reset.style.padding = "8px 16px";
reset.style.margin = "auto 20px";
main.appendChild(reset);

//Clear logic
function clear(){
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(cell=>{
        cell.style.backgroundColor = "white";
    })
}

reset.addEventListener("click",()=>{
    clear();
})

//major-Grid
const container = document.createElement("div");
container.id = "grid-container"
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "700px";
container.style.height = "700px";
container.style.border = "2px solid black";
container.style.margin = "20px auto";
document.body.appendChild(container);

//tracking mouse hold
let isClick = false;
container.addEventListener("mousedown",()=>{
    isClick = true;
});

container.addEventListener("mouseup",()=>{
    isClick = false;
});

// minor-Grids

function makegrid(size){
    container.innerHTML = "";

    for(let i=1;i<=size*size;i++)
{
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.backgroundColor = "white"
    square.style.width = `${700/size}px`;
    square.style.height = `${700/size}px`;
    square.style.border = "1px solid black";
    square.style.boxSizing = "border-box";
    
    //colorpicker logic
    square.addEventListener("mouseover",()=>{
        if(isClick){
            square.style.backgroundColor = colorPicker.value;
        }
    });

    container.appendChild(square);
}
}
makegrid(range.value);



