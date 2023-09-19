import { motion, useScroll } from "framer-motion";

const MotionTest = () => {
  return (
    <motion.div
      className={
        "w-[100px] h-[100px] bg-cyan-400 rounded-xl flex items-center justify-center"
      }
    >
      <h1>Test</h1>
    </motion.div>
  );
};

export default MotionTest;
