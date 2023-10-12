function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let numberArr: number[] = [1, 2, 3, 4, 5];
let stringArr: Array<string> = ["a", "b", "c", "d", "e"];
type StringArr2 = string[];

export const arr = ["2324", "@345", "245667", "23456y"] as const;

const arr2: (typeof arr)[number] = arr[0];

interface Todo {
  title: string;
  description: string;
}

function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {9
    result[i] = value;
  }
  return result;
}

createArray(3, 1);
