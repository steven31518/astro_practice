
type valueType = "string" | "number";

export default function numberProcess<T>(number: number, type: T): T {
  if (type === "string") {
    return number.toString() as unknown as T;
  }

  return number as unknown as T;
}

// Usage:
