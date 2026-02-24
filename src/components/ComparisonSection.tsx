import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  { traditional: "Manual setup", endpointx: "One prompt" },
  { traditional: "Local environment", endpointx: "E2B sandbox" },
  { traditional: "Multiple tools", endpointx: "One platform" },
  { traditional: "Slow iteration", endpointx: "Instant regeneration" },
];

const ComparisonSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Why EndpointX?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">smarter</span> way to build APIs
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border/50"
        >
          {/* Header */}
          <div className="grid grid-cols-2 bg-card">
            <div className="p-4 text-center border-r border-border/50">
              <span className="text-muted-foreground font-medium">Traditional Backend</span>
            </div>
            <div className="p-4 text-center bg-primary/10">
              <span className="text-primary font-bold">EndpointX</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div key={index} className="grid grid-cols-2 border-t border-border/50">
              <div className="p-5 flex items-center justify-center gap-3 border-r border-border/50 bg-card/50">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-3 bg-primary/5">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{row.endpointx}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
