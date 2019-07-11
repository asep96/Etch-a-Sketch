//x represents number of horizontal blocks
//y represents number of vertical blocks
function generateGrid(blocks){
    //subtracting by 10 due to the px values associated with the padding and margin properties
    var gridSquareHeightAndWidth = Math.floor(960/blocks)-10;
    var toAdd = document.createDocumentFragment();
    for(let x=1; x<=blocks; x++){
        for(let y=1; y<=blocks; y++){
            var gridSquare = document.createElement("div");
            gridSquare.id = "grid-square";
            gridSquare.style.width = gridSquareHeightAndWidth + "px";
            gridSquare.style.height = gridSquareHeightAndWidth + "px";
            gridSquare.style.backgroundColor = "white";
            gridSquare.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "black";
            })
            toAdd.appendChild(gridSquare);
        }
    }
    document.getElementById("container").appendChild(toAdd); 
}

var gridBtn = document.querySelector("#new-grid-btn");
gridBtn.addEventListener('click', () => {
    var canvasSizePrompt = prompt("How many blocks long do you want the sides of your" + 
    " canvas to be? (Between 1 and 60)");
    canvasSizePrompt = Number(canvasSizePrompt);
   if(typeof(canvasSizePrompt)=="number" && (canvasSizePrompt>0) && (canvasSizePrompt<61)){
        //in order to create a new grid, the current grid must be deleted
        var parent = document.getElementById("container");
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
        blocks = canvasSizePrompt;
        generateGrid(blocks);
   }
   else{
       alert("You must enter a valid number between 1 and 60!")
   }
});

/*
calling generateGrid with initial value of 16, as this is what the project
wanted me to do upon user start
*/
generateGrid(16);