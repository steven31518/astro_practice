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

/** 
  * 1. btnType: button, submit, reset
  * 2. variant: contained, outlined, text
  * 3. themeColor: primary, secondary
  * 4. text for tailwind  : 
 ("btn-contained btn-outlined btn-text bg-primary bg-secondary text-primary text-secondary border-primary border-secondary ring-primary/75 ring-secondary/75 bg-primary/75 active:bg-secondary/20 active:bg-primary/20 text-secondary/75"); 
 */

const Button = ({
  className,
  variant = "contained",
  themeColor,
  isDisabled,
  startIcon,
  endIcon,
  btnType,
  children,
  onClick,
}: Props) => {
  const variantMap = {
    contained: `bg-${themeColor} text-white active:ring-4 ring-${themeColor}/75`,
    outlined: `border-2 border-solid border-${themeColor} text-${themeColor} bg-transparent active:ring-4 ring-${themeColor}/75`,
    text: `text-${themeColor} active:bg-${themeColor}/20`,
    isDisabled: `bg-[#dadada] border-[#dadada] text-white cursor-not-allowed active:opacity-100 active:ring-0`,
  } as const;

  return (
    <button
      onClick={onClick}
      type={btnType}
      className={cn("p-2", className, {
        [variantMap[variant]]: variant,
        [variantMap.isDisabled]: isDisabled,
      })}
    >
      {startIcon && <div>{startIcon}</div>}
      <span className={cn({ children: "mx-2" })}>{children}</span>
      {endIcon && <div>{endIcon}</div>}
    </button>
  );
};

export default Button;
