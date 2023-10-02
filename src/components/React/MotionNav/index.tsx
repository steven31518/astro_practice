import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../unit/useDimansions";
import cn from "../unit/styleMerge";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
type Props = {
  children: React.ReactNode;
};
const MotionNav = ({ children }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);

  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="flex flex-col items-end"
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div className="background" variants={sidebar} />
      <Navigation className={cn("grid grid-rows-4 grid-flow-col gap-4 p-3")}>
        {children}
      </Navigation>
    </motion.nav>
  );
};

export default MotionNav;
