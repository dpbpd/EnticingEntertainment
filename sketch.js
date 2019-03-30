

setup=()=>{
    createCanvas(windowWidth,windowHeight);
      
    noStroke();
}

var arrayTest = ['another testing thing'];
var secondArrayTest = ['this is a test', 'and this is the second part of the test to see how long it can go ', 'a', 'test', 'another test', 'as well as this'];

draw = () => {
    background('#76b0b6'); 
    rect(0, 0, width, height / 5, 5, 5, 5, 5);
    textBubble(arrayTest, arrayTest.length, 150);
    textBubble(secondArrayTest, secondArrayTest.length, height / 2);
}
windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
    console.log('window resized');
}

textBubble = (array, arrayLength, y) => {
    var lengthOfLongestString = array.sort(function (a, b) { return b.length - a.length; })[0].length;
    let xOffset = lengthOfLongestString * 9;
    let yOffset = arrayLength * 21 + 5;
    let textYOffset = y + 20
    let centerX = width / 2;
    rect(centerX - (xOffset / 2), y, xOffset, yOffset, 5, 5, 5, 5);
    for(let i = 0; i < array.length; i++){
       
        textSize(20);
        textAlign(CENTER);
        //fill(50);
        text(array[i], centerX, textYOffset);
        
        textYOffset+=20;
        //console.log('text test');
    }
    //console.log(lenghtOfLongestString.length);
}