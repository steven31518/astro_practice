import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import cn from "../unit/styleMerge";
import useMediaQuery from "../unit/useMediaQuery";
import { useRef } from "react";
const variants = {
  open: (height: number) => ({
    width: 250,
    height: height,
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
    height: height,
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
  const [isOpen, toggleOpen] = useCycle(true, false);
  const drawerRef = useRef(null);
  const { height } = useDimensions(drawerRef);
  const { matches } = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className=""
      >
        <div className="flex items-start rounded-e-sm">
          <motion.ul
            variants={variants}
            ref={drawerRef}
            className="text-center bg-slate-50"
          >
            {children}
          </motion.ul>
          <motion.div
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            className={cn(
              "text-center cursor-pointer p-1 flex  bg-slate-50 border-2 border-solid border-slate-300",
            )}
            onClick={() => toggleOpen()}
          >
            <AiOutlineMenuUnfold className="text-4xl" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
