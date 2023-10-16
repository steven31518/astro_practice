import { motion } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillFastBackward } from "react-icons/ai";
import cn from "../unit/styleMerge";
import { useMediaQuery } from "../unit/useMediaQuery";
import { useEffect, useRef, useState } from "react";

const variants = {
  open: (height: number) => ({
    width: 251,
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

type Props = {
  children: React.ReactNode;
  isFixed?: boolean;
  menuName?: string;
};

const Drawer = ({ children, menuName }: Props) => {
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
      {!isOpen && (
        <motion.div
          onClick={() => handleDrawerOpen()}
          whileHover={{ opacity: 0.4 }}
          className={cn(
            "text-center cursor-pointer border-r-2 border-solid border-default p-1 fixed z-50 md:min-h-full md:bg-default md:static",
          )}
        >
          <AiOutlineMenuUnfold className="text-2xl" />
        </motion.div>
      )}
      <motion.div
        initial={true}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed top-50 left-0 z-50 h-full md:static"
      >
        <motion.ul
          variants={variants}
          ref={drawerRef}
          className="text-start text-sm text-default border-r-2 border-solid border-default bg-default min-h-full"
        >
          <motion.li
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
            whileHover={{ opacity: 0.5 }}
          >
            <motion.div className="p-2 w-full flex justify-center border-t-2 border-b-2 border-solid border-default">
              <AiFillFastBackward className="text-2xl" />
            </motion.div>
          </motion.li>
          {menuName}
          {children}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Drawer;
