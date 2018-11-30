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
