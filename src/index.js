module.exports = function solveEquation(equation) {
  
  var roots = [];
  var parts = equation.split(" ");
  
  var a = parts[0];
  var b = parts[3] + parts[4];
  var c = parts[7] + parts[8];
  
  var discriminant = b * b - 4 * a * c;
  
  if (discriminant === 0){
    var x = Math.round((-1*b)/(2*a));
    roots.push(x);
    
  }else if (discriminant > 0) {
    var x1 = Math.round((-1 * b + Math.sqrt(discriminant))/(2 * a));
    var x2 = Math.round((-1 * b - Math.sqrt(discriminant))/(2 * a));
    roots.push(x1,x2);
    
  }else {
    roots.push(0);
  }
  
  return roots.sort();
}
