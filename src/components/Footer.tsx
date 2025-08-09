import { Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="p-4 rounded-2xl bg-white/10 glass">
              <Mic className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-space font-bold">SpeakSmart AI</h3>
              <p className="text-white/80 font-light">Built for public speaking success</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/90 font-space">
              © 2024 SpeakSmart AI. All rights reserved.
            </p>
            <p className="text-white/70 text-sm mt-2 font-light">
              Empowering speakers with AI-powered feedback
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;