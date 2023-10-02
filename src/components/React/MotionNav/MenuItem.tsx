import { motion } from "framer-motion";
import Button from "../Button";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,

    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  i: number;
  children: React.ReactNode;
};

export const MenuItem = ({ i, children }: Props) => {
  return <motion.li variants={variants}>{children}</motion.li>;
};
