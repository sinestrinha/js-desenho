function setup() {
    createCanvas(600, 600);
    background("white");  
  }
  
  function draw() {
    stroke("blue");
    fill ("black");
    
    //console.log(mouseIsPressed) 
    
    if(mouseIsPressed)  {
      rect(mouseX, mouseY, 10, 10)
    }
  }
  