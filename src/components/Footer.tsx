import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#08070D] border-t border-purple-500/15 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-purple-500/15 gap-6">
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-[#F5F3FA]">
              <span className="font-mono text-purple-400 font-semibold">{'>'}</span>
              <span>{portfolioData.personal.name}</span>
            </div>
            <p className="text-xs text-[#AAA3B8] mt-1 font-mono">
              {portfolioData.personal.title} · Student Developer
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 text-xs text-[#AAA3B8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F5F3FA] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Profiles & Scroll-to-top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="p-2 rounded-lg bg-[#15111F] text-[#AAA3B8] hover:text-purple-300 border border-purple-500/20 transition-colors"
              title="Send email"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.contact.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#15111F] text-[#AAA3B8] hover:text-purple-300 border border-purple-500/20 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.contact.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#15111F] text-[#AAA3B8] hover:text-purple-300 border border-purple-500/20 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-950/60 text-purple-300 hover:text-white border border-purple-500/30 transition-colors ml-2 cursor-pointer"
              title="Scroll back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Closing Line & Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AAA3B8] gap-3">
          <p className="italic text-purple-300/90 font-serif">
            "Designed with curiosity and built to keep growing."
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>{currentYear}</span>
            <span aria-hidden="true">·</span>
            <span>Akshra Das</span>
            <span aria-hidden="true">·</span>
            <span className="text-purple-400">Carmel Convent School, Faridabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
