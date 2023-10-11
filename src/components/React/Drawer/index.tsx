import { motion } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillBackward } from "react-icons/ai";
import cn from "../unit/styleMerge";
import { useMediaQuery } from "../unit/useMediaQuery";
import { useEffect, useRef, useState } from "react";
const variants = {
  open: (height: number) => ({
    width: 220,
    top: height,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
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
    },
  },
  closed: {
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 40,
    },
  },
};

type Props = {
  children: React.ReactNode;
  isFixed?: boolean;
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
        variants={iconVariants}
        onClick={() => handleDrawerOpen()}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        className={cn("text-center cursor-pointer p-1 fixed z-50")}
      >
        <AiOutlineMenuUnfold className="text-2xl" />
      </motion.div>
      <motion.div
        initial={true}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed top-50 left-0 z-50 h-full md:static"
      >
        <motion.ul
          variants={variants}
          ref={drawerRef}
          className="text-start text-sm text-default bg-default min-h-full"
        >
          <motion.li
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-center cursor-pointer"
          >
            <motion.div className="p-2" variants={iconVariants}>
              <AiFillBackward className="text-2xl hover:rotate-180" />
            </motion.div>
          </motion.li>
          {children}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Drawer;
