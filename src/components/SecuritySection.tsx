import { motion } from "framer-motion";
import { Shield, Lock, Trash2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Full isolation",
    description: "Every API runs in its own secure container.",
  },
  {
    icon: Lock,
    title: "No cross-project interference",
    description: "Your code and data stay completely separated.",
  },
  {
    icon: Trash2,
    title: "Automatic cleanup",
    description: "Sandboxes are disposed after execution.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative bg-card/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Security & Isolation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Safe by <span className="text-gradient">Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every generated API runs in a separate E2B sandbox, ensuring complete security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 glow-sm">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
