import { motion } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import cn from "../unit/styleMerge";
import { useMediaQuery } from "../unit/useMediaQuery";
import { useEffect, useRef, useState } from "react";
const variants = {
  open: (height: number) => ({
    width: 250,
    top: height,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
      delay: 0.2,
    },
  }),
  closed: (height: number) => ({
    width: 0,
    top: height,
    x: -100,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
      delay: 0.2,
    },
  }),
};
const iconVariants = {
  open: {
    rotateY: 180,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
      delay: 0.2,
    },
  },
  closed: {
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
      delay: 0.2,
    },
  },
};

type Props = {
  children: React.ReactNode;
};
const Drawer = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);
  const { height } = useDimensions(drawerRef);
  const matches = useMediaQuery("(min-width: 768px)");

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (matches) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [matches]);
  return (
    <>
      <motion.div
        initial={true}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed top-50 left-0 z-50 bg-transparent md:static md:top-0 md:left-0 md:z-0 h-full"
      >
        <motion.div className="flex items-start rounded-e-sm bg-default h-full">
          <motion.ul
            variants={variants}
            ref={drawerRef}
            className="text-start text-sm text-default"
          >
            {children}
          </motion.ul>
          <motion.div
            variants={iconVariants}
            onClick={() => handleDrawerOpen()}
            className={cn("text-center cursor-pointer p-1 md:hidden")}
          >
            <AiOutlineMenuUnfold className="text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Drawer;
