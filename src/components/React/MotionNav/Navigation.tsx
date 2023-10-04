import { motion } from "framer-motion";
import cn from "../unit/styleMerge";
const variants = {
  open: {
    y: 0,
    x: -50,
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: -50,
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Navigation = ({ children, className }: Props) => (
  <motion.ul variants={variants} className={cn("rounded-md", className)}>
    {children}
  </motion.ul>
);
