let player1 = "Player1";
let player2 = "Player2";
function startGame(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    console.log(player1);
    console.log(player2);
    document.getElementById("start-pop").classList.remove("start-pop");
}

let arr = Array(10);
for(var k =1; k<10; k++){
    arr[k]='n';
}
var c = 'X';
var j;
function myFunction(b){
        if(arr[b]=='X' || arr[b]=='Y'){
            alert("Can not repeat.");
        }else{
            let butt = document.getElementById("btn"+b);
            butt.setAttribute("value",c);
            butt.style.background="greenyellow";
            butt.innerHTML=c;
            arr[b]=c;
            if(c=='X'){
                c='O';
            }else{
                c='X';
            }
            checkWin();
        }
        //if((b[1]=='X' || b[1]=='O') && (b[2]=='X' || b[2]=='O') && (b[3]=='X' || b[3]=='O') && (b[4]=='X' || b[4]=='O') && (b[5]=='X' || b[5]=='O') && (b[6]=='X' || b[6]=='O') && (b[7]=='X' || b[7]=='O') && (b[8]=='X' || b[8]=='O') && (b[9]=='X' || b[9]=='O') ){
        //    alert("Game withdraw");
          //  restartGame();
        //}
}

var winPlayer;
function checkWin(){
    if(arr[1]==arr[2] && arr[2]==arr[3]){
            if(arr[1] == 'X' || arr[1]=='O'){
                if(arr[1]=='X'){
                    winPlayer = player1;
                }else{
                    winPlayer = player2;
                }
                document.getElementById("winner-name").innerHTML = winPlayer;
                document.getElementById("pop").classList.add("pop-display");
                
            }
    }
    if(arr[4]==arr[5] && arr[5]==arr[6]){
        if(arr[4] == 'X' || arr[4]=='O'){
            if(arr[4]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
            
        }
    }
    if(arr[7]==arr[8] && arr[8]==arr[9]){
        if(arr[7] == 'X' || arr[7]=='O'){
            if(arr[1]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }
    if(arr[1]==arr[4] && arr[4]==arr[7]){
        if(arr[1] == 'X' || arr[1]=='O'){
            if(arr[1]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }
    if(arr[2]==arr[5] && arr[5]==arr[8]){
        if(arr[2] == 'X' || arr[2]=='O'){
            if(arr[2]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }
    if(arr[3]==arr[6] && arr[6]==arr[9]){
        if(arr[3] == 'X' || arr[3]=='O'){
            if(arr[1]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }
    if(arr[1]==arr[5] && arr[5]==arr[9]){
        if(arr[1] == 'X' || arr[1]=='O'){
            if(arr[1]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }
    if(arr[3]==arr[5] && arr[5]==arr[7]){
        if(arr[3] == 'X' || arr[3]=='O'){
            if(arr[1]=='X'){
                winPlayer = player1;
            }else{
                winPlayer = player2;
            }
            document.getElementById("winner-name").innerHTML = winPlayer;
            document.getElementById("pop").classList.add("pop-display");
                
        }
    }

}
function restartGGGame(){
    for(var i =1;i<10;i++){
        document.getElementById("btn"+i).innerHTML = "";
        document.getElementById("btn"+i).style.background="rgb(231, 255, 255)";
        arr[i] = "";
        document.getElementById("pop").classList.remove("pop-display");
    }
    
}

function  restartGame(){
    document.getElementById("winner-name").innerHTML = "";
    window.location.reload();
}