function zadanie3(text) {
  text = text.replaceAll(" ", "");
  text = Array.from(text);
  let result = text.reduce((dict, element) => {
    dict[element] = (dict[element] ?? 0) + 1;
    return dict;
  }, {});

  return result;
}

console.table(zadanie3("abcd abc  abccc "));
