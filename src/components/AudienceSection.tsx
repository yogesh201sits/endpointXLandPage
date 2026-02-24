import { motion } from "framer-motion";
import { Rocket, Code, GraduationCap, Users } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Indie hackers & startup founders",
    description: "Ship MVPs faster than ever before.",
  },
  {
    icon: Code,
    title: "Backend & full-stack developers",
    description: "Skip the boilerplate, focus on logic.",
  },
  {
    icon: GraduationCap,
    title: "Students learning API development",
    description: "Learn by building real APIs instantly.",
  },
  {
    icon: Users,
    title: "Teams prototyping fast",
    description: "Iterate on ideas without setup overhead.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Who EndpointX Is For
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for{" "}
            <span className="text-gradient">builders like you</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
