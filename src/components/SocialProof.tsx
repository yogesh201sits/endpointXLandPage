import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-y border-border/50 bg-card/30 mt-[30px]"
    >
      <div className="container mx-auto px-6 ">
        <div className="flex items-center justify-center gap-3 text-center">
          <Zap className="w-5 h-5 text-primary animate-pulse-glow" />
          <p className="text-lg md:text-xl font-medium text-foreground mt-30">
            Built for developers who want APIs fast—
            <span className="text-primary">without friction.</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;
