import React, { useState } from 'react';
import { X, Sparkles, Code, Palette, Calendar, MapPin, Music } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FestivalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSourceCode: () => void;
}

export const FestivalModal: React.FC<FestivalModalProps> = ({ isOpen, onClose, onOpenSourceCode }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');

  if (!isOpen) return null;

  const project = portfolioData.projects.find((p) => p.id === 'festival-website')!;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="festival-modal-title"
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#100D18] border border-purple-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#15111F] border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="festival-modal-title" className="text-lg font-bold text-[#F5F3FA]">
                {project.title}
              </h3>
              <p className="text-xs text-[#AAA3B8]">
                Frontend Layout & Visual Presentation Walkthrough
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#AAA3B8] hover:text-[#F5F3FA] hover:bg-purple-950/40 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-3 bg-[#0D0A14] border-b border-purple-500/15 text-xs font-mono">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            Live Component Preview
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'html'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            HTML5 Structure
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'css'
                ? 'bg-purple-900/60 text-purple-200 font-semibold border border-purple-500/30'
                : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
            }`}
          >
            CSS3 Layout & Styling
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Simulated Festival Website Interface */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1A0B2E] via-[#120824] to-[#0A0414] border border-purple-500/40 p-6 shadow-xl relative overflow-hidden">
                {/* Decorative festival ambient glowing lantern elements */}
                <div className="absolute top-2 right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Festival Hero Header */}
                <div className="relative z-10 text-center max-w-md mx-auto mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-amber-300 text-xs font-medium mb-3">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Annual Cultural & Music Festival</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F5F3FA] tracking-tight mb-2">
                    Lumina Festival 2026
                  </h4>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    Celebrating music, light installations, performing arts, and community joy.
                  </p>
                </div>

                {/* Interactive Event Stage Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                      <Music className="w-3.5 h-3.5" />
                      <span>Main Acoustic Amphitheater</span>
                    </div>
                    <p className="text-sm font-bold text-[#F5F3FA]">The Harmony Ensemble</p>
                    <p className="text-[11px] text-purple-300/80 mt-1">18:00 - 20:00 · Central Park Stage</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Lantern Glow Pavilion</span>
                    </div>
                    <p className="text-sm font-bold text-[#F5F3FA]">Interactive Light Sculptures</p>
                    <p className="text-[11px] text-purple-300/80 mt-1">20:30 - Midnight · Waterfront Meadow</p>
                  </div>
                </div>

                {/* Festival Footer Strip */}
                <div className="mt-5 pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between text-[11px] text-purple-300/80 relative z-10 gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" /> Seasonal Weekend Celebration
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-purple-400" /> City Grounds & Cultural Center
                  </span>
                </div>
              </div>

              {/* Learning Context */}
              <div className="p-4 rounded-xl bg-[#15111F] border border-purple-500/20 text-xs text-[#AAA3B8] leading-relaxed">
                <strong className="text-purple-300">Frontend Discovery:</strong> This project explored how to structure content using semantic HTML tags (`&lt;header&gt;`, `&lt;section&gt;`, `&lt;article&gt;`) and style responsive elements using CSS Flexbox, Grid, color contrast, and festive gradients.
              </div>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#AAA3B8]">
                <span className="font-mono text-purple-300">index.html (Semantic Structure)</span>
                <span>HTML5</span>
              </div>
              <pre className="bg-[#08070D] p-4 rounded-xl border border-purple-500/20 font-mono text-xs leading-relaxed text-purple-200 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumina Festival</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="festival-header">
    <div class="logo">LUMINA</div>
    <nav class="festival-nav">
      <a href="#events">Events</a>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main>
    <section class="hero-section">
      <h1>Lumina Festival 2026</h1>
      <p>Celebrating music, light, and unity.</p>
    </section>

    <section class="events-grid">
      <article class="event-card">
        <h3>The Harmony Ensemble</h3>
        <p>18:00 - Central Stage</p>
      </article>
    </section>
  </main>
</body>
</html>`}
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#AAA3B8]">
                <span className="font-mono text-purple-300">style.css (Styling & Layout)</span>
                <span>CSS3</span>
              </div>
              <pre className="bg-[#08070D] p-4 rounded-xl border border-purple-500/20 font-mono text-xs leading-relaxed text-purple-200 overflow-x-auto">
{`/* Festival Color Palette & Layout */
body {
  margin: 0;
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: #0d061a;
  color: #f7f2ff;
}

.festival-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(21, 11, 38, 0.85);
  backdrop-filter: blur(8px);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.event-card {
  background: #190f30;
  border: 1px solid rgba(192, 132, 252, 0.25);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  border-color: #c084fc;
}`}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#15111F] border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#AAA3B8]">
            <span>Key Technologies:</span>{' '}
            <span className="text-purple-300 font-mono">HTML5 · CSS3 Flexbox/Grid · Responsive Styling</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSourceCode}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F5F3FA] bg-purple-900/60 hover:bg-purple-800/70 border border-purple-500/30 rounded-lg transition-colors cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Inspect Source Code</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-[#AAA3B8] hover:text-[#F5F3FA] bg-[#100D18] border border-purple-500/20 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
