var boxIndex = 1;
var endOfBoxes = 21;

function addBox(){
    if (boxIndex == endOfBoxes){
        boxIndex = 1;
        updateBox();
    }else{
        boxIndex++;
        updateBox();
    }
}

function removeBox(){
    if(boxIndex == 1){
        boxIndex = endOfBoxes;
        updateBox();
    }else{
        boxIndex--;
        updateBox();
    }
}

function updateBox(){
    var innerHTML = null;
    var state = document.getElementById("box-id");
    var button = document.getElementById("box-btn");
    var img = document.getElementById("box-img");

    if (Math.floor(Math.random() * 2) == 1){
        innerHTML = "Box #" + boxIndex + " - Occupied";
        button.style.display = "none";
        state.classList.add("box-btn-neg");
        img.src = "assets/img/box_taken.png";
        img.classList.remove("scale-effect");
        img.style.cursor = "no-drop";
    }else{
        innerHTML = "Box #" + boxIndex + " - Free";
        button.style.display = "block"
        button.classList.remove("box-btn-neg");
        state.classList.remove("box-btn-neg");
        img.src = "assets/img/box_available.png";
        img.classList.add("scale-effect");
        img.style.cursor = "default";
    }
    state.innerHTML = innerHTML;
}