const array = [2, 5, 10, 2, -9, 0, 3, 12, 214, 86, -5, 18, 3];

const selectionSearch = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    let tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }

  return array;
};
