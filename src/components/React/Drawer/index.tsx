import Portal from "../Portal";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import Button from "../Button";
import React, { useRef } from "react";
const variants = {
  open: (width = 100) => ({
    opacity: 1,
    width: width,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
  closed: {
    opacity: 0,
    width: 0,
    height: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

const Drawer = ({ children }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const drawerRef = useRef(null);
  const { width } = useDimensions(drawerRef);
  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={width}
        ref={drawerRef}
      >
        <div className="flex">
          <motion.ul variants={variants} className="bg-white">
            {children}
          </motion.ul>
          <Button
            variant="text"
            themeColor="primary"
            onClick={() => toggleOpen()}
          >
            {">>"}
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
