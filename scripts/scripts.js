function evaluateSides(){
  /*var display = document.query.Selector("#ID");*/

var lengths = prompt("Enter lengths of a triangle to check it's type, seperated by a comma");

var sides = lengths.split(", ");
if(sides.length == 1){
  sides = lengths.split(",");
}
alert(sides[0]);
alert(sides[1]);
alert(sides[2]);
var a=parseInt(sides[0]);
var b=parseInt(sides[1]);
var c=parseInt(sides[2]);
if(isTriangle(a,b,c)){
    document.getElementById('answerID').innerHTML = "It is a triangle!!";
}

else {
    document.getElementById('answerID').innerHTML = "It is not a triangle!!";
}
}
function isTriangle(a,b,c){
  if((a+b>c)&& (b+c>a)&&(c+a>b)){
    return true;
  }else{
    return false;
  }
}
function isEqilateral(a,b,c){
  if(a==b && b==c && c==a){
    return true;
  }else{
    return false;
  }
}
function isIsosceles(a,b,c){
  if((a==b && a==c)||(b==a && b==c)||(c==a && c==b)){
    return true;
  }else{
    return false;
  }
}
function isScalene(a,b,c){
  if(a!=b && b!=c && c!=a){
    return true;
  }else{
    return false;
  }
}
