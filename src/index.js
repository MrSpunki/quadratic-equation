module.exports = function solveEquation(equation) {
  // your implementation
  
    var roots = [];
  
  var parts = equation.split(" ");
  //console.log(parts);
  
  var discriminant = parts[4] * parts[4] - 4 * parts[0] * parts[8];
  //console.log("discriminant " + discriminant);
  
  if (discriminant === 0){
    var x = Math.round((-1*parts[4])/(2*parts[0]));
    roots.push(x);
    
  }else if (discriminant > 0) {
    var x1 = Math.round((-1*parts[4]+Math.sqrt(discriminant))/(2*parts[0]));
    var x2 = Math.round((-1*parts[4]-Math.sqrt(discriminant))/(2*parts[0]));
    roots.push(x1,x2);
    
  }else {
    roots.push(0);
  }
  
  roots.sort();
  //console.log("roots " + roots);
}
