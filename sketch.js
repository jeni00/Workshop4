
let channelName = "welcomePage";

let answerInput 


function setup() {

    createCanvas(windowWidth, windowHeight);

    answerInput = createInput();
    answerInput.style('font-size', '30px');
    answerInput.position(windowWidth/3, 325);

    submitButton = createButton("Enter Site");
    submitButton.position(windowWidth/3, 400);
    submitButton.style('font-size', '30px');

    var textArray = [
      'Durian is the best fruit in the world.ogg',
      'Fries must come with salt and ketchup.ogg',
      'Cinnamon is the worst food I had.ogg',

  ];
  var randomNumber = Math.floor(Math.random()*textArray.length);
  
  }
  
function draw() {
  background(255);

  textSize(30);

  textAlign(CENTER);

  text("Welcome! Please make comments to the following statement.", windowWidth/2, 100);

  textSize(30);
  textAlign(LEFT);
  text(randomNumber, windowWidth/3, 300);


  // on submit enter the information
  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {

  // check to see if they enter their name
  if (answerInput.value() != "") { 
    // if they did, save their name to the variable "you"
    you = answerInput.value();
    // load a new page when you press submit
    window.location.href = "/../_pageTwo/index.html?you="+you+"&r="+redVal+"&g="+greenVal+"&b="+blueVal; 
  }
 

}
