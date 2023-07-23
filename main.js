const turn = document.getElementById("turn")
// console.log(turn)
const replay = document.getElementById("replay")
replay.style.display="none"
// console.log(replay)

const boxes = document.querySelectorAll("#main div")

// console.log(boxes)
let x_o =0;



function selectWinnerBoxes(b1,b2,b3){
    b1.classList.add("win")
    b2.classList.add("win")
    b3.classList.add("win")
    
    turn.innerHTML = b1.innerHTML + " is a winner"
    turn.style.fontSize = "40px"
    turn.style.color ="green"
    replay.innerHTML= "Play Again"
 replay.style.display = "block"
}
function getwinner(){

    let box1 =document.getElementById("box1");
let box2 =document.getElementById("box2"),
box3 =document.getElementById("box3"),
box4 =document.getElementById("box4"),
box5 =document.getElementById("box5"),
box6 =document.getElementById("box6"),
box7 =document.getElementById("box7"),
box8 =document.getElementById("box8"),
box9 =document.getElementById("box9");




if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
selectWinnerBoxes(box1, box2, box3);

if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
selectWinnerBoxes(box4, box5, box6);

if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
selectWinnerBoxes(box7, box8, box9);

if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
selectWinnerBoxes(box1, box4, box7);

if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
selectWinnerBoxes(box2, box5, box8);

if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
selectWinnerBoxes(box3, box6, box9);

if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
selectWinnerBoxes(box1, box5, box9);

if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
selectWinnerBoxes(box3, box5, box7);

// console.log(getwinner).value
}

for( let i=0;i< boxes.length; i++){
  boxes[i].onclick= function(){
      if(this.innerHTML !== "X" && this.innerHTML !=="O"){
          if(x_o % 2 === 0){
            //   console.log(x_o)
              this.innerHTML="X";
              turn.innerHTML= "Now Turn Of  'O' "
              getwinner();
              x_o+=1;
            // console.log(boxes[i])
          }
          else {
            //   console.log(x_o);
              this.innerHTML = "O";
              turn.innerHTML = "Now Turn Of  'X' "
              getwinner();
              x_o+=1;

          }
         
          console.log(x_o)
          if(x_o==9){
             replayGame();
         }
        

         }

      };
     
    
    }
   console.log(x_o)

 replay.addEventListener("click",replayGame)

  function replayGame(){
    for(let i =0;i<boxes.length;i++){
       
        boxes[i].classList.remove("win")
        boxes[i].innerHTML =""
        
    }
    turn.innerHTML ="Tic Tac Toe"
    turn.style.fontSize = "40px"
    turn.style.color= "red"
    replay.style.display = "none"
    x_o=0;
}
