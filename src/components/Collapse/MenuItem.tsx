import { motion } from "framer-motion";
import React, { Children } from "react";

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
  children: React.ReactNode;
};

export const MenuItem = ({ children }: Props) => {
  return (
    <motion.li
      variants={variants}
      className="grid grid-rows-2 grid-flow-col gap-4"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.li>
  );
};
