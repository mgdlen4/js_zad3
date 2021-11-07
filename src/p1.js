function zadanie1(operation, ...arrays) {
  let tab = [...arrays[0]];
  const arrayLength = tab.length;
  for (let i = 1; i < arrays.length; i++) {
    for (let j = 0; j < arrayLength; j++) {
      operation(tab, arrays, i, j);
    }
  }
  return tab;
}

function sum(tab, arrays, i, j) {
  return (tab[j] += arrays[i][j]);
}
function multiplication(tab, arrays, i, j) {
  return (tab[j] *= arrays[i][j]);
}

function subtraction(tab, arrays, i, j) {
  return (tab[j] -= arrays[i][j]);
}
function division(tab, arrays, i, j) {
  return (tab[j] /= arrays[i][j]);
}

const a = [1, 2, 3];
const b = [5, 6, 7];
const c = [10, 20, 30];

console.log(zadanie1(sum, a, b, c));
console.log(zadanie1(subtraction, a, b, c));
console.log(zadanie1(multiplication, a, b, c));
console.log(zadanie1(division, a, b, c));
