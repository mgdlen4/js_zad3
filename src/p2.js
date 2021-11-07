function zadanie2(start, end) {
  //var i
  if (start < end) {
    return function () {
      if (start > end) {
        console.log("NaN");
      } else {
        console.log(start++);
      }
    };
  } else
    return function () {
      if (start < end) {
        console.log("NaN");
      } else {
        console.log(start--);
      }
    };
}

var num = zadanie2(3, 7);
num();
num();
num();
num();
num();
num();
