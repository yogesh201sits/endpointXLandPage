import { motion } from "framer-motion";
import { Code, Terminal, RefreshCw, Bug } from "lucide-react";

const problems = [
  {
    icon: Code,
    text: "Writing repetitive server code",
  },
  {
    icon: Terminal,
    text: "Managing local environments",
  },
  {
    icon: RefreshCw,
    text: "Switching between editor, terminal, and API clients",
  },
  {
    icon: Bug,
    text: "Debugging before you can even test a route",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Backend setup is still{" "}
              <span className="text-gradient">painfully slow</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Even today, creating an API means:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-destructive/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-5 h-5" />
                </div>
                <p className="text-lg text-foreground">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl font-medium text-muted-foreground"
          >
            That's time you should be{" "}
            <span className="text-primary font-semibold">shipping.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
