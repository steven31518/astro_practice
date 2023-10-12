import cn from "../unit/styleMerge";
import Header from "./Header";
import Panel from "./Panel";

type Props = {
  children?: React.ReactNode;
  header: string | React.ReactNode;
  isExpand: boolean;
  onClick: (e: React.SyntheticEvent) => void;
  className?: string;
  id?: string;
};

const Accordion = ({
  children,
  header,
  isExpand,
  onClick,
  className,
  id,
}: Props) => {
  return (
    <div
      className={cn(
        "inline-flex flex-col border-t-1 border-solid border-default w-full",
        className,
      )}
      id={id}
    >
      <Header header={header} isExpand={isExpand} onClick={onClick} />
      <Panel panel={children} isExpand={isExpand} />
    </div>
  );
};

export default Accordion;
