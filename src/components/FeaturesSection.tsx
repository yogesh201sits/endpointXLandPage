import { motion } from "framer-motion";
import { Zap, Brain, Monitor, TestTube, Code, Download } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant API Generation",
    description: "Create production-ready REST APIs in seconds using AI.",
  },
  {
    icon: Brain,
    title: "AI-Driven Code Understanding",
    description: "Update or extend APIs by simply changing the prompt.",
  },
  {
    icon: Monitor,
    title: "Live Execution with E2B",
    description: "Each API runs inside its own isolated E2B sandbox—safe, fast, disposable.",
  },
  {
    icon: TestTube,
    title: "Built-in API Testing",
    description: "Test endpoints directly without switching tools.",
  },
  {
    icon: Code,
    title: "In-Browser Code Editor",
    description: "View and edit generated files instantly with a VS-Code-like experience.",
  },
  {
    icon: Download,
    title: "Export Anytime",
    description: "Download your backend code and deploy it wherever you want.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to{" "}
            <span className="text-gradient">ship faster</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
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

export default FeaturesSection;
