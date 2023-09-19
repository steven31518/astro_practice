import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

export default cn;
