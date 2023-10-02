import { motion } from "framer-motion";

const variants = {
  open: {
    backgroundColor: "#ffffff10",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      y: { stiffness: 1000, velocity: -100 },
    },
    y: 0,
    opacity: 1,
  },
  closed: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      y: { stiffness: 1000 },
    },
    y: 50,
    opacity: 0,
  },
};

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Navigation = ({ children, className }: Props) => (
  <motion.ul variants={variants} className={className}>
    {children}
  </motion.ul>
);
