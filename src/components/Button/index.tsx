import cn from "../unit/styleMerge";

interface Props {
  btnType?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  themeColor?: string;
  className?: string;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode | string;
  name?: string;
  onClick?: () => void;
}

("btn-contained btn-outlined btn-text bg-primary bg-secondary text-primary text-secondary border-primary border-secondary ring-primary/75 ring-secondary/75 bg-primary/75 active:bg-secondary/20 active:bg-primary/20 text-secondary/75");

const Button = ({
  className,
  variant,
  themeColor,
  isDisabled,
  startIcon,
  endIcon,
  btnType,
  children,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={btnType}
      className={cn("p-4", className, {
        [`bg-${themeColor} text-white active:ring-4 ring-${themeColor}/75`]:
          variant === "contained",
        [`border-2 border-solid border-${themeColor} text-${themeColor} bg-transparent active:ring-4 ring-${themeColor}/75`]:
          variant === "outlined",
        [`text-${themeColor} active:bg-${themeColor}/20`]: variant === "text",
        "bg-[#dadada] border-[#dadada] text-white cursor-not-allowed active:opacity-100 active:ring-0":
          isDisabled,
      })}
    >
      {startIcon && <span className="me-2">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="ms-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
