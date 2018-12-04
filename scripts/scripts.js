function evaluateSides() {
  var x = document.getElementById("myDiv");
  document.getElementById('answerID').innerHTML = "";
  document.getElementById("triangleTypeID").innerHTML = "";
  var lengths = prompt("Enter lengths of a triangle to check it's type, seperated by a comma");

  var sides = lengths.split(",");
  if (sides.length == 0) {
    alert("Enter the sides please");
  } else if (sides.length != 3) {
    alert("Can't find the answer. Try again");
  } else if (isNaN(sides[0]) || isNaN(sides[1]) || isNaN(sides[2])) {
    alert("Works only on numbers");
  } else {
    var a = parseInt(sides[0]);
    var b = parseInt(sides[1]);
    var c = parseInt(sides[2]);
    if (isTriangle(a, b, c)) {
      if (isEquilateral(a, b, c)) {
        document.getElementById("triangleTypeID").innerHTML = "It's an EQUILATERAL TRIANGLE!!";
      } else if (isIsosceles(a, b, c)) {
        document.getElementById("triangleTypeID").innerHTML = "It's an ISOSCELES TRIANGLE!!";
      } else {
        document.getElementById("triangleTypeID").innerHTML = "It's a SCALENE TRIANGLE!!";
      }
      x.style.display = "block";

    } else {
      document.getElementById('answerID').innerHTML = "It is not a triangle!!";
      x.style.display = "none";
    }
  }
}
/*-------------------------------function definations----------------------------------------------------------------------------*/
function isTriangle(a, b, c) {
  if ((a + b > c) && (b + c > a) && (c + a > b)) {
    return true;
  } else {
    return false;
  }
}

function isEquilateral(a, b, c) {
  if (a == b && b == c && c == a) {
    return true;
  } else {
    return false;
  }
}

function isIsosceles(a, b, c) {
  if (a == b || b == c || c == a) {
    return true;
  } else {
    return false;
  }
}
