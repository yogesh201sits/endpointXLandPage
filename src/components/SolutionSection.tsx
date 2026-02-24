import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
              The EndpointX Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Platform.{" "}
              <span className="text-gradient">Complete API Workflow.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border/50 glow-sm"
          >
            <Layers className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-foreground mb-6">
              EndpointX removes the busywork from backend development.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Describe your API → we generate the backend → run it live → test it instantly.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold">All in one place.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
