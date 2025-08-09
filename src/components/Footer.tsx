import { Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 rounded-lg bg-white/10">
              <Mic className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">SpeakSmart AI</h3>
              <p className="text-primary-foreground/80 text-sm">Built for public speaking success</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © 2024 SpeakSmart AI. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Empowering speakers with AI-powered feedback
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;