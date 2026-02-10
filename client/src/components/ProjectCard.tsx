import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  delay?: number;
}

export function ProjectCard({ title, description, tags, links, delay = 0 }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col bg-card border-border/50 hover:border-primary/50 transition-colors duration-300 overflow-hidden group">
        <div className="h-2 bg-gradient-to-r from-primary to-secondary w-full" />
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              {links?.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {links?.demo && (
                <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-normal">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
