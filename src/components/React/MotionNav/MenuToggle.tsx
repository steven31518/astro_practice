import { motion } from "framer-motion";
import Button from "../Button";
import cn from "../unit/styleMerge";
type Props = {
  toggle: () => void;
  className?: string;
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, className }: Props) => (
  <Button
    onClick={toggle}
    variant="text"
    themeColor="secondary"
    className={cn("m-auto rounded-sm", className)}
  >Home</Button>
);

export default MenuToggle;
