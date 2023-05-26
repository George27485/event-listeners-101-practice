// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

const color = document.getElementById('main-grid');

color.addEventListener("click", function(){
    for(let i = 0; i < color.children.length;i++){
        if(i===0 || i ===3|| i ===6){
            color.children[i].style.backgroundColor="red";
        }else if(i===1 || i === 4 || i === 7){
        color.children[i].style.backgroundColor="green";
        }else{
            color.children[i].style.backgroundColor="blue"
        }

        
    }


})

// Hint: Some sort of loop may be helpful to you in this process!