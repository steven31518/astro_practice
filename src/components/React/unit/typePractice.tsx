function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let numberArr: number[] = [1, 2, 3, 4, 5];
let stringArr: Array<string> = ["a", "b", "c", "d", "e"];

export const arr = ["2324", "@345", "245667", "23456y"] as const;

const arr2: (typeof arr)[number] = arr[0];
