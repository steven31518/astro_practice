import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";
type Props = {
  header: string | React.ReactNode;
  isExpand: boolean;
  onClick: (e: React.SyntheticEvent) => void;
};

const Header = ({ header, isExpand, onClick }: Props) => {
  return (
    <div
      className="cursor-pointer flex justify-between items-center py-2 px-4"
      onClick={onClick}
    >
      {header}
      <motion.div
        className="inline-flex align-middle header"
        animate={{
          rotate: isExpand ? 90 : 0,
        }}
        transition={{
          duration: 0.2,
          type: "tween",
          ease: "easeInOut",
        }}
      >
        <AiFillCaretRight className="text-2xl me-3 text-primary" />
      </motion.div>
    </div>
  );
};

export default Header;
