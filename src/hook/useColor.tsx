import { useTheme } from "styled-components";
import type { DefaultTheme } from "styled-components";
export function useColor(): {
  ({
    themeColor,
    isDisabled,
  }: {
    themeColor?: string;
    isDisabled?: boolean;
  }): string;
} {
  const theme = useTheme();
  return function makeColor({
    themeColor,
    isDisabled,
  }: {
    [key: string]: string | boolean;
  }) {
    const madeColor =
      theme.color[themeColor as keyof DefaultTheme] || themeColor;
    return isDisabled ? theme.color.disable : madeColor;
  };
}

export default { useColor };
