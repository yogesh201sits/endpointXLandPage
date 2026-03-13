import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Cpu, Server, TestTube, Edit } from "lucide-react";
import logo from "@/assets/01.png";
import logo1 from "@/assets/02.png";
import logo2 from "@/assets/03.png";
import logo3 from "@/assets/04.png";


const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Describe Your API",
    description: "Write a prompt or define routes and data behavior.",
    image:
      logo,
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Generates Backend Code",
    description: "Controllers, routes, and logic are generated instantly.",
    image:
      logo1,
  },
  {
    icon: Server,
    step: "03",
    title: "Runs in E2B Sandbox",
    description: "Your backend runs in an isolated, secure E2B environment.",
    image:
      logo2,
  },
  {
    icon: TestTube,
    step: "04",
    title: "Test APIs Instantly",
    description: "Send GET/POST requests directly from the UI.",
    image:
      logo3,
  },
  {
    icon: Edit,
    step: "05",
    title: "Edit & Regenerate",
    description: "Modify code in the editor or re-prompt AI anytime.",
    image:
      "https://images.unsplash.com/photo-1772144040482-cdb26a51548f?q=80&w=764&auto=format&fit=crop",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            How EndpointX Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Prompt → Code → Live API</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* LEFT SIDE - SINGLE IMAGE */}
      <div className="rounded-3xl border border-primary/20 shadow-2xl flex justify-center items-center">
  <img
    src={steps[activeStep].image}
    alt="Step Preview"
    className="transition-all duration-500"
  />
</div>

          {/* RIGHT SIDE - STEPS */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-8 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div  className={`w-16 h-16 rounded-2xl bg-card border border-primary/50 
                        flex items-center justify-center transition-all duration-300
                        ${
                          activeStep === index
                            ? "shadow-[0_0_25px_rgba(34,197,94,0.6)] border-green-500"
                            : ""
                      }`}>
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;