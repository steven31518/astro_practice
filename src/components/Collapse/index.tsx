import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import MenuToggle from "./MenuToggle";
import { MenuItem } from "./MenuItem";
import Button from "../Button";
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
const itemVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Collapse = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollHeight = containerRef.current?.scrollHeight;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={scrollHeight}
      className="p-4"
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div
        className="background bg-transparent"
        variants={sidebar}
        ref={containerRef}
      >
        <motion.ul variants={itemVariants}>
          <MenuItem>
            <Button variant="text" themeColor="primary">
              text
            </Button>
            <Button variant="text" themeColor="primary">
              sceond text
            </Button>
          </MenuItem>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Collapse;
