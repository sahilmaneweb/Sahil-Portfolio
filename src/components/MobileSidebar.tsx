"use client";

import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, personal } from "@/data/site-data";

const iconMap = {
  About: User,
  Projects: Briefcase, 
  Experience: Award,
  Skills: Award,
  Contact: Mail,
};

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 hover:bg-primary/10 transition-colors"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-72 p-0 bg-background border-border">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-border">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                {personal.name}
              </button>
              <p className="text-sm text-muted-foreground mt-1">
                {personal.title}
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-2">
                <button
                  onClick={scrollToTop}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                >
                  <Home className="w-5 h-5 mr-3 text-primary" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    Home
                  </span>
                </button>
                
                {navigation.map((item) => {
                  const IconComponent = iconMap[item.name as keyof typeof iconMap] || User;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                    >
                      <IconComponent className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-border">
              <div className="flex space-x-4">
                {personal.socials.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                  >
                    <span className="w-4 h-4 block">📱</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}