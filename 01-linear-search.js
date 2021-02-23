const array = [2, 4, 1, 29, 91, 3, 10, 7, 12, 100, 78];

let count = 0;

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count += 1;

    if (array[i] === item) {
      return i;
    }
  }

  return null;
}
