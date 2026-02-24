import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">

      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/bgImg.png')" }}
      />
      <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
      <div
        className="absolute top-100 text-center " style={{ top:"-15%", height:"100vh", width:"100%" }}>
                    <img className="inline-block " style={{  height:"100%", width:"55%" }}src={logo} alt="" />

      </div></motion.h1> 
      
      
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      {/* <div className="absolute inset-0 bg-radial-glow" /> */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto  text-center ">
          {/* Logo with name - large and prominent */}
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12 inline-block"
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="EndpointX" 
                className="w-72 md:w-96 mx-auto"
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div> */}
      
          {/* Main heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {/* <img className="inline-block " src={logo} alt="" /> */}
           
            <br />
            <br />
            <br />
            
            <br />
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            Generate, run, and test backend APIs in seconds.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground/80 mb-8"
          >
            No setup. No boilerplate. No local environment.
          </motion.p>

          {/* Tech badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              AI-powered API generation, executed in secure E2B sandboxes.
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-30"
          >
            <Button variant="hero" size="xl" className="group">
              Try EndpointX
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              View Live Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
