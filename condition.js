// function voterage(){
//     var voterage
// }
function getagevalue(){
var voterage = document.getElementById("voterage").value;
console.log(voterage)


if(voterage >= 18){
    document.getElementById("eligible").innerHTML = "eligible for vote"
}else{
    document.getElementById("eligible").innerHTML = "not eligible"
}


}
// elseif
 (percentage == "pass")
if(percentage >=91 && percentage <=100){
    console.log("O")
    document.getElementById("percentage").innerHTML = "O"
}else if(percentage >= 81 && percentage <=90){
    console.log("A")
    document.getElementById("percentage").innerHTML = "A"
}else if(percentage >= 71 && percentage <=80){
    console.log("B")
    document.getElementById("percentage").innerHTML = "B"
}else if(percentage >= 61 && percentage <=70){
    console.log("C")
    document.getElementById("percentage").innerHTML = "C"
}