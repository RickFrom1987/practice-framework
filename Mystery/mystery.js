/*
  What value should you replace the '?' with to make the output read 10?
  var x = 6;
  var y = 4;
  var a = function(b) { return function(c) { return y + b + c; } };
  x = 2;
  y = 5;
  var fn = a(x);
  x = 1;
  y = 3;
  var unknown = ?;
  console.log(fn(unknown));*
*/

class Mystery {
  constructor() {}
  solve(){
    var x = 6; // assign x to 6 
    var y = 4; // assign y to 4
    var a = function(b) { 
      return function(c) { 
        // console.log('b', b);
        // console.log('c', c);
        // console.log('y', y);
        return y + b + c; 
      }
    }; // assign a to a function, but do not invoke
    x = 2; // point x to 2
    y = 5; // point y to 5
    var fn = a(x); // x is 2, fn is now a function with b set to 2
    x = 1; // point x to 1
    y = 3; // point y to 3
    var unknown = 5; // set an unknown
    // At this point... y = 3, b = 2, c must 5. 3 + 2 +5 = 10
    // call previous def function with b set to 2 and c set to 5
    return fn(unknown); 
  }

}

module.exports = Mystery;