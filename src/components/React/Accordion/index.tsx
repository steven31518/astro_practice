import { useState } from "react";
import cn from "../unit/styleMerge";
import Header from "./Header";
import Panel from "./Panel";

type Props = {
  children?: React.ReactNode;
  header?: string | React.ReactNode;
  className?: string;
  id?: string;
};

const Accordion = ({ children, header, className, id }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      className={cn(
        "inline-flex flex-col border-t-1 border-solid border-default w-full",
        className,
      )}
      id={id}
    >
      <Header
        header={header}
        isExpand={isExpand}
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      />
      <Panel panel={children} isExpand={isExpand} />
    </div>
  );
};

export default Accordion;
