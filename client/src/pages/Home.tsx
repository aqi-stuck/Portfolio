import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Linkedin, Download, Terminal, Cpu, Brain, ChartBar, Globe, Database, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const contactMutation = useContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8 border border-secondary/20"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight mb-6"
            >
              Hi, I'm <span className="text-gradient">Syed Aqdas</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8"
            >
              AI Student | <span className="text-foreground font-medium">Future AI Solutions Engineer</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10"
            >
              Bridging the gap between complex AI technology and user adoption. 
              I combine technical expertise in Artificial Intelligence with a background in 
              product marketing to build solutions that truly resonate.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5 hover:text-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" subtitle="Who I Am" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative z-10">
                 {/* 
                    Using a placeholder gradient since no user image was provided. 
                    In a real app, this would be: <img src={profileImage} /> 
                 */}
                 <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Terminal className="w-24 h-24 text-primary/40" />
                 </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary rounded-br-3xl z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                Second Year AI Undergrad at <span className="text-primary">PAF-IAST</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am actively pursuing a BS in Artificial Intelligence (expected graduation 2028). 
                My journey is defined by a self-driven path toward becoming an AI Solutions Engineer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond code, I bring real experience in product and social media marketing. 
                I've helped grow digital engagement and shape go-to-market strategies for early-stage 
                project development. This unique blend of technical skills and market awareness gives 
                me an edge in building products that don't just work—they succeed.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/10 px-3 py-1.5 rounded-md border border-secondary/20">
                  <Terminal className="w-4 h-4 text-secondary" />
                  <span>I use Arch by the way</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-foreground mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">BS Artificial Intelligence</p>
                  <p className="text-xs text-primary mt-1">2024 - 2028</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">Chakwal District, Pakistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Technical Expertise" subtitle="My Arsenal" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: <Brain className="w-8 h-8 text-primary" />, 
                title: "AI & ML", 
                skills: ["Neural Networks", "Transformers", "BERT", "Predictive Analytics", "Supervised Learning"] 
              },
              { 
                icon: <Code2 className="w-8 h-8 text-secondary" />, 
                title: "Programming", 
                skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"] 
              },
              { 
                icon: <Cpu className="w-8 h-8 text-indigo-400" />, 
                title: "Tools & Cloud", 
                skills: ["Git & GitHub", "Kubernetes", "Oracle Cloud", "Scikit-learn", "NLTK", "Raylib"] 
              },
              { 
                icon: <ChartBar className="w-8 h-8 text-pink-400" />, 
                title: "Marketing & Soft Skills", 
                skills: ["Social Media Strategy", "Affiliate Marketing", "Data Analysis", "English (Professional)"] 
              }
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 p-3 bg-background rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-display mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="What I've Built" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard 
              title="Celestial Pathfinding"
              description="Interactive visualization combining orbital mechanics simulation with Dijkstra's shortest path algorithm. A complex fusion of physics and CS theory."
              tags={["Python", "Algorithms", "Physics"]}
              delay={0}
            />
            <ProjectCard 
              title="Collatz-Lyapunov"
              description="Bridging Discrete Dynamical Systems and Continuous Optimization by training a Neural Network to find a Neural Lyapunov Surface."
              tags={["PyTorch", "Math Modeling", "Neural Networks"]}
              delay={0.1}
            />
            <ProjectCard 
              title="Predictive GDP Analysis"
              description="Machine learning system that predicts Pakistan's future GDP using historical data with 90% accuracy using regression models."
              tags={["Scikit-learn", "Linear Regression", "Data Science"]}
              delay={0.2}
            />
            <ProjectCard 
              title="Graphical Tic-Tac-Toe"
              description="Fully interactive game built from scratch using C++ and Raylib, demonstrating low-level graphics programming concepts."
              tags={["C++", "Raylib", "Game Dev"]}
              delay={0.3}
            />
            <ProjectCard 
              title="VADER Sentiment Analysis"
              description="Customized sentiment analyzer using NLTK's VADER with enhanced handling for intensifiers and negations in natural language."
              tags={["NLP", "Python", "NLTK"]}
              delay={0.4}
            />
            <ProjectCard 
              title="US Market Advisory Copilot"
              description="USA Market Advisory AI using RAG to answer questions on NYSE stock trends, GDP/macro data, and SEC/FED regulations with citations. Includes PDF/CSV ingestion, FastAPI, Docker deployment, logging, and evaluation."
              tags={["RAG", "FastAPI", "Docker", "LLM"]}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Experience & Education" subtitle="My Journey" />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience Column */}
              <div>
                <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" /> Professional Experience
                </h3>
                <div className="space-y-8 border-l-2 border-primary/20 pl-8 ml-3">
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                    <h4 className="text-lg font-bold">Social Media Strategist</h4>
                    <p className="text-primary font-medium text-sm">Ride Karo • Dec 2024 - Jan 2025</p>
                    <p className="text-muted-foreground mt-2 text-sm">Managed digital engagement and marketing strategies to boost brand visibility.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-secondary" />
                    <h4 className="text-lg font-bold">Affiliate Marketer</h4>
                    <p className="text-primary font-medium text-sm">Amazon (Remote) • May 2020 - May 2024</p>
                    <p className="text-muted-foreground mt-2 text-sm">Created strategies for affiliate sales and analyzed marketing data trends.</p>
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-2">
                  <Database className="w-6 h-6 text-secondary" /> Education
                </h3>
                <div className="space-y-8 border-l-2 border-secondary/20 pl-8 ml-3">
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-secondary" />
                    <h4 className="text-lg font-bold">BS Artificial Intelligence</h4>
                    <p className="text-secondary font-medium text-sm">PAF-IAST • 2024 - 2028</p>
                    <p className="text-muted-foreground mt-2 text-sm">Focusing on Deep Learning, Neural Networks, and AI Systems.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-background bg-muted-foreground" />
                    <h4 className="text-lg font-bold">High School</h4>
                    <p className="text-muted-foreground font-medium text-sm">Fazaia Inter College • 2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Certified Excellence</h3>
              <p className="text-muted-foreground">Oracle AI Foundations • Machine Learning Specialized • 10+ Tech Courses</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-background rounded-xl border border-border shadow-sm text-center">
                 <div className="text-2xl font-bold text-primary">90%</div>
                 <div className="text-xs text-muted-foreground uppercase tracking-wide">Model Accuracy</div>
               </div>
               <div className="px-6 py-3 bg-background rounded-xl border border-border shadow-sm text-center">
                 <div className="text-2xl font-bold text-secondary">10+</div>
                 <div className="text-xs text-muted-foreground uppercase tracking-wide">Courses Aced</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Let's Connect" />
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Let's build something amazing together</h3>
              <p className="text-muted-foreground mb-10 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:aqis20539@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">aqis20539@gmail.com</span>
                </a>
                
                <a href="tel:03115777063" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+92 311 5777063</span>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Chakwal District, Pakistan</span>
                </div>

                <a 
                  href="https://www.linkedin.com/in/syed-aqdas-munir-7291803127" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-2xl shadow-black/20">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-background/50 border-border/50 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-background/50 border-border/50 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="resize-none bg-background/50 border-border/50 focus:border-primary min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-primary hover:bg-primary/90 rounded-xl"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground">
        <div className="container px-4">
          <p className="mb-2">© {new Date().getFullYear()} Syed Aqdas Munir. All rights reserved.</p>
          <p className="text-sm flex items-center justify-center gap-2">
            Built with React, Tailwind & <Terminal className="w-3 h-3" /> Arch Linux
          </p>
        </div>
      </footer>
    </div>
  );
}
