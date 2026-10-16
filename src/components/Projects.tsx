import React, { useState } from 'react';
import { 
  Plane, 
  Sparkles, 
  Code, 
  ExternalLink, 
  ArrowRight, 
  Database, 
  FileSpreadsheet,
  Globe,
  Terminal,
  Calendar,
  Layers
} from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { SkyflowModal } from './SkyflowModal';
import { FestivalModal } from './FestivalModal';
import { GitHubNoticeModal } from './GitHubNoticeModal';

export const Projects: React.FC = () => {
  const [selectedProjectModal, setSelectedProjectModal] = useState<'skyflow' | 'festival' | null>(null);
  const [githubNotice, setGithubNotice] = useState<{ isOpen: boolean; title: string; url: string }>({
    isOpen: false,
    title: '',
    url: ''
  });

  const handleOpenSourceCode = (title: string, url: string) => {
    setGithubNotice({
      isOpen: true,
      title,
      url
    });
  };

  return (
    <section id="projects" className="py-20 relative tech-grid-pattern border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Code className="w-3.5 h-3.5" />
              <span>Portfolio Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3FA]">
              Projects I've been working on.
            </h2>
          </div>
          <p className="text-sm text-[#AAA3B8] max-w-md">
            Hands-on implementations demonstrating programming logic, structured data storage in CSV flat files, and semantic frontend styling.
          </p>
        </div>

        {/* Projects Grid: 2 Distinct Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Skyflow — Airline Management Software */}
          {(() => {
            const skyflow = portfolioData.projects.find((p) => p.id === 'skyflow-airline')!;
            return (
              <div
                key={skyflow.id}
                className="group rounded-2xl bg-[#100D18] border border-purple-500/25 hover:border-purple-400/50 shadow-xl shadow-purple-950/20 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Preview: Dark Airline Route & Data Matrix */}
                <div className="relative h-60 bg-gradient-to-br from-[#0B0813] via-[#140F22] to-[#0A0711] border-b border-purple-500/20 p-5 overflow-hidden flex flex-col justify-between">
                  {/* Subtle Flight Radar Grid Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />

                  {/* Top Bar inside preview */}
                  <div className="flex items-center justify-between relative z-10 text-xs">
                    <div className="flex items-center gap-2 font-mono text-purple-300">
                      <Plane className="w-4 h-4 text-purple-400 rotate-45" />
                      <span className="font-semibold tracking-wider">SKYFLOW DISPATCH</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      CSV Database Active
                    </span>
                  </div>

                  {/* Center Flight Route Graphic */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="flex items-center justify-between px-2 sm:px-6">
                      <div className="text-center">
                        <span className="text-xl sm:text-2xl font-black text-[#F5F3FA] font-mono">DEL</span>
                        <p className="text-[10px] text-[#AAA3B8]">Indira Gandhi Intl</p>
                      </div>

                      {/* Flight Path with Animated Plane */}
                      <div className="flex-1 mx-4 relative flex items-center justify-center">
                        <div className="w-full h-[1px] bg-gradient-to-r from-purple-500/30 via-purple-400 to-purple-500/30 border-t border-dashed border-purple-400/60" />
                        <div className="absolute p-1.5 rounded-full bg-purple-950 border border-purple-400/60 shadow-lg shadow-purple-500/50 text-purple-300">
                          <Plane className="w-3.5 h-3.5 rotate-45" />
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-xl sm:text-2xl font-black text-[#F5F3FA] font-mono">BOM</span>
                        <p className="text-[10px] text-[#AAA3B8]">Chhatrapati Shivaji</p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-4 text-[11px] font-mono text-purple-300/80">
                      <span>Flight SK-204</span>
                      <span aria-hidden="true">·</span>
                      <span>Status: On Time</span>
                      <span aria-hidden="true">·</span>
                      <span>Capacity: 18 Seats</span>
                    </div>
                  </div>

                  {/* Bottom mini status bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#AAA3B8] pt-2 border-t border-purple-500/15">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <FileSpreadsheet className="w-3.5 h-3.5" /> flights_registry.csv
                    </span>
                    <span>Format: UTF-8 DictReader</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata tags (unboxed text discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-300 mb-3">
                      <span>Python</span>
                      <span className="text-purple-500/40" aria-hidden="true">/</span>
                      <span>CSV File Handling</span>
                      <span className="text-purple-500/40" aria-hidden="true">/</span>
                      <span>Console UI</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#F5F3FA] group-hover:text-purple-200 transition-colors mb-2">
                      {skyflow.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAA3B8] leading-relaxed mb-4">
                      {skyflow.description}
                    </p>

                    {/* Architectural Highlights */}
                    <ul className="space-y-1.5 text-xs text-[#AAA3B8] mb-6">
                      {skyflow.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 font-mono">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProjectModal('skyflow')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg shadow-sm shadow-purple-900/40 transition-all cursor-pointer"
                    >
                      <span>Explore Project & Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleOpenSourceCode(skyflow.title, skyflow.links.githubUrl)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-purple-300 hover:text-white bg-[#15111F] hover:bg-purple-950/60 border border-purple-500/25 rounded-lg transition-colors cursor-pointer"
                      title="Inspect GitHub Source Code"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Card 2: Festival Website */}
          {(() => {
            const festival = portfolioData.projects.find((p) => p.id === 'festival-website')!;
            return (
              <div
                key={festival.id}
                className="group rounded-2xl bg-[#100D18] border border-purple-500/25 hover:border-purple-400/50 shadow-xl shadow-purple-950/20 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Preview: Vibrant Festival Ambience */}
                <div className="relative h-60 bg-gradient-to-br from-[#180A2B] via-[#10061E] to-[#0A0413] border-b border-purple-500/20 p-5 overflow-hidden flex flex-col justify-between">
                  {/* Glowing celebration lights accent */}
                  <div className="absolute top-0 right-1/4 w-36 h-36 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-10 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Bar inside preview */}
                  <div className="flex items-center justify-between relative z-10 text-xs">
                    <div className="flex items-center gap-2 font-mono text-amber-300">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span className="font-semibold tracking-wider">FESTIVAL SHOWCASE</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                      HTML5 & CSS3
                    </span>
                  </div>

                  {/* Festival Visual Content */}
                  <div className="relative z-10 my-auto py-2">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                        Cultural & Music Gala
                      </p>
                      <h4 className="text-xl sm:text-2xl font-black text-[#F5F3FA] tracking-tight">
                        Lumina Festival
                      </h4>
                      <p className="text-xs text-purple-200/70 mt-1">
                        Responsive Stage Cards · Ambient Glow · Event Highlights
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-purple-300/80">
                      <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-500/30">
                        Central Stage
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-500/30">
                        Lantern Meadow
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-500/30">
                        Art Pavilion
                      </span>
                    </div>
                  </div>

                  {/* Bottom mini status bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#AAA3B8] pt-2 border-t border-purple-500/15">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <Globe className="w-3.5 h-3.5" /> festival_index.html
                    </span>
                    <span>Responsive Flex & Grid</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata tags (unboxed text discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-300 mb-3">
                      <span>HTML5</span>
                      <span className="text-purple-500/40" aria-hidden="true">/</span>
                      <span>CSS3 Layouts</span>
                      <span className="text-purple-500/40" aria-hidden="true">/</span>
                      <span>Responsive Design</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#F5F3FA] group-hover:text-purple-200 transition-colors mb-2">
                      {festival.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAA3B8] leading-relaxed mb-4">
                      {festival.description}
                    </p>

                    {/* Architectural Highlights */}
                    <ul className="space-y-1.5 text-xs text-[#AAA3B8] mb-6">
                      {festival.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 font-mono">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProjectModal('festival')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg shadow-sm shadow-purple-900/40 transition-all cursor-pointer"
                    >
                      <span>Live Preview & Markup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleOpenSourceCode(festival.title, festival.links.githubUrl)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-purple-300 hover:text-white bg-[#15111F] hover:bg-purple-950/60 border border-purple-500/25 rounded-lg transition-colors cursor-pointer"
                      title="Inspect GitHub Source Code"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Modals */}
        <SkyflowModal
          isOpen={selectedProjectModal === 'skyflow'}
          onClose={() => setSelectedProjectModal(null)}
          onOpenSourceCode={() => {
            const skyflow = portfolioData.projects.find((p) => p.id === 'skyflow-airline')!;
            handleOpenSourceCode(skyflow.title, skyflow.links.githubUrl);
          }}
        />

        <FestivalModal
          isOpen={selectedProjectModal === 'festival'}
          onClose={() => setSelectedProjectModal(null)}
          onOpenSourceCode={() => {
            const festival = portfolioData.projects.find((p) => p.id === 'festival-website')!;
            handleOpenSourceCode(festival.title, festival.links.githubUrl);
          }}
        />

        <GitHubNoticeModal
          isOpen={githubNotice.isOpen}
          onClose={() => setGithubNotice({ isOpen: false, title: '', url: '' })}
          projectTitle={githubNotice.title}
          repoUrl={githubNotice.url}
        />
      </div>
    </section>
  );
};
