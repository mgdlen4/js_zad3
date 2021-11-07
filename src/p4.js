function zadanie4(arr) {
  arr = arr.filter(function (value, index) {
    if (index % 2 == 0) {
      return value;
    }
  });
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.table(arr);
  arr = arr.map((val) => (val - min) / (max - min));
  console.table(arr);
}

let tab = [2, 35, 43, 123, 12, 12, 1, 12, 1, 15, 166, 12];
zadanie4(tab);
