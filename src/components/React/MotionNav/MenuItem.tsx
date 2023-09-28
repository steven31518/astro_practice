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
};

export const MenuItem = ({ i }: Props) => {
  return (
    <motion.li variants={variants}>
      <Button
        variant="contained"
        themeColor="secondary"
        className="my-1 rounded-sm"
      >
        button
      </Button>
    </motion.li>
  );
};
