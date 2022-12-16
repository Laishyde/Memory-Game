let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export function getinputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;

}
addEventListener('keydown', e => {
   
    switch (e.key) {
        //1
        case "ArrowUp":
            if (lastInputDirection.y !== 0 ) break
        
            inputDirection = { x: 0, y: -1 }
            break
        //2

        case "ArrowDown":
            if (lastInputDirection.y !== 0 ) break
           
            inputDirection = { x: 0, y: 1 }
            break

        //3   

        case "ArrowLeft":
            if (lastInputDirection.x !== 0 ) break
           
            inputDirection = { x: -1, y: 0 }
            break

        //4   

        case "ArrowRight":
            if (lastInputDirection.x !== 0 ) break
           
            inputDirection = { x: 1, y: 0 }
            break

    }

})