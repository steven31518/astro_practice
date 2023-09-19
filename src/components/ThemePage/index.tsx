import { ThemeProvider } from "styled-components";
import theme from "../../assets/theme";
import Button from "../Button";

const ThemePage = () => {
  const clickHandler = () => {
    console.log("click theme button");
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div>Theme Page</div>
      <div className="bg-slate-50 w-full h-60">
        <button
          type="button"
          className="bg-blue-600 border-2 border-blue-600 p-2 m-2 hover:bg-blue-500 hover:border-blue-200 text-white rounded-md font-bold"
          onClick={clickHandler}
        >
          tailwind button
        </button>
      </div>
    </ThemeProvider>
  );
};

export default ThemePage;
