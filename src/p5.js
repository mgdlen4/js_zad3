function zadanie5(n) {
  let tab = [];

  for (let i = 0; i < n; i++) {
    tab.push(Math.floor(Math.random() * 10) + 1);
  }
  console.table(tab);

  let even = tab.reduce((x, val) => (val % 2 == 0 ? x + 1 : x), 0);

  console.log("Parzyste: " + even);

  let multiplicated = tab.reduce((x, val) => (x *= val), 1);
  console.log("Iloczyn: " + multiplicated);
}

zadanie5(10);
