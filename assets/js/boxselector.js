var boxIndex = 1;
var endOfBoxes = 21;

function addBox(){
    if (boxIndex == endOfBoxes){
        boxIndex = 1;
        updateBox();
        alert(boxIndex);
    }else{
        boxIndex++;
        updateBox();
    }
}

function removeBox(){
    if(boxIndex == 1){
        boxIndex = endOfBoxes;
        updateBox();
        alert(boxIndex);
    }else{
        boxIndex--;
        updateBox();
    }
}

function updateBox(){
    
}