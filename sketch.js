var arrayTest = ['Welcome to Enticing Entertainment', ' Care to creat your own adventure','Please make a selection below'];
let secondArrayTest = ['1: Hey Justen, click in this box', '2: This is a test ','3: to see how the text box', '4: scales', '5: to the amount of letters', '6: as well as the length of the list','7: and moves when you click on it'];
let textB;
let textHeader;
setup=()=>{
    createCanvas(windowWidth,windowHeight);
    noStroke();
    textHeader = new TextBubble(width / 2, 0, arrayTest);
    textB = new TextBubble(width / 2.5, height / 3, secondArrayTest);
    //loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
}
gotData = (data) => {
    print(data);
}
draw = () => {

    background('#76b0b6');
    push();
    
  
    //textHeader.display();
    textB.display();
    textB.move();
}
mousePressed = () => {
    textB.clicked(mouseX, mouseY);
}
windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
    console.log('window resized');
}

class TextBubble {

    constructor(x, y, array){
        this.x = x;
        this.y = y;
        this.w;
        this.h;
        this.array = array;
        this.arrayLength = array.length;
        this.selected = false;
        this.dynamicHeight;
        //print(this.arrayLength)
    }
    display(){
        var sortedArray = this.array.slice();
        var lengthOfLongestString = sortedArray.sort(function (a, b) { return b.length - a.length; })[0].length;
        let dynamicWidth = lengthOfLongestString * 9;
        let dynamicHeight = this.array.length * 22 + 5;

        let yOffsetText = this.y + 20;
        this.w = dynamicWidth;
        this.h = dynamicHeight;
        rect(this.x, this.y, dynamicWidth, dynamicHeight, 5, 5, 5, 5);
        for(let i = 0; i < this.arrayLength; i++){
            textSize(20);
            textAlign(CENTER);
            text(this.array[i], this.x + (dynamicWidth / 2), yOffsetText);
            yOffsetText += 22;
        }
    }
    
    move(){
        if(this.selected){
            if(this.x > 50){
               this.x = this.x -=7;
            }
            if(this.y > 100){
                this.y = this.y -=3;
            }
        }
    }
    clicked(x, y){
        //print(x, y);
        if(x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h){
            print(x,y);
            this.selected = true;
            for(let i = 0; i < this.arrayLength - 1; i++){
                this.array.pop();
            }

        }
    }
    

    
}

