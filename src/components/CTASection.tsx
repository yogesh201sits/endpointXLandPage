import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Ready to transform your workflow?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Build APIs at the{" "}
            <span className="text-gradient glow-text">Speed of Thought</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
            Stop setting up. Start shipping.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="hero" size="xl" className="group text-lg">
              Launch EndpointX Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
