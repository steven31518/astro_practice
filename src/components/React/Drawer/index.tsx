import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../unit/useDimansions";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import cn from "../unit/styleMerge";
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

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed top-50 left-0 z-10 bg-transparent md:static md:top-0 md:left-0 md:z-0"
      >
        <motion.div
          className="flex items-center rounded-e-sm bg-slate-50"
          onClick={() => toggleOpen()}
          whileHover={{ scale: 1.1 }}
        >
          <motion.ul
            variants={variants}
            ref={drawerRef}
            className="text-start text-sm max-h-screen overflow-y-scroll"
          >
            {children}
          </motion.ul>
          <motion.div
            variants={iconVariants}
            className={cn("text-center cursor-pointer p-1 md:hidden ")}
          >
            <AiOutlineMenuUnfold className="text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Drawer;
