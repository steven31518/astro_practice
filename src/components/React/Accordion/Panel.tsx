import cn from "../unit/styleMerge";
import { motion } from "framer-motion";
import { useRef } from "react";

type PanelProps = {
  panel: React.ReactNode;
  isExpand: boolean;
  className?: string;
};

const Panel = ({ panel, isExpand, className }: PanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollHeight = panelRef.current?.scrollHeight;

  return (
    <motion.div
      ref={panelRef}
      className={cn("overflow-hidden mt-1 accordion__panel", className)}
      animate={{
        height: isExpand ? scrollHeight : 0,
        opacity: isExpand ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {panel}
    </motion.div>
  );
};

export default Panel;
