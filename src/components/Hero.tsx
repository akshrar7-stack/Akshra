import React, { useState } from 'react';
import { ArrowDown, Code2, Database, Terminal, Sparkles, ChevronRight, FileSpreadsheet } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'skyflow' | 'dataframe' | 'web'>('skyflow');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden tech-grid-pattern"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] ambient-glow-purple pointer-events-none rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] ambient-glow-violet pointer-events-none rounded-full blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status & Role Pill-free Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-purple-300 mb-5 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-950/70 border border-purple-500/30 text-purple-300 font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                {portfolioData.personal.badge}
              </span>
              <span className="text-[#AAA3B8] hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-[#AAA3B8] font-sans font-medium tracking-wide">
                {portfolioData.personal.title}
              </span>
            </div>

            {/* Main Headings */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F3FA] text-balance mb-3">
              {portfolioData.personal.headline}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-300 via-violet-200 to-purple-400 bg-clip-text text-transparent text-balance mb-6">
              {portfolioData.personal.subheadline}
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#AAA3B8] leading-relaxed max-w-xl mb-8">
              {portfolioData.personal.bioParagraphs[0]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#F5F3FA] bg-[#15111F] hover:bg-[#1C162B] border border-purple-500/25 hover:border-purple-400/50 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Compact skill strip */}
            <div className="pt-6 border-t border-purple-500/15 w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#AAA3B8]">
                <span className="font-semibold text-purple-300/90 uppercase tracking-wider font-mono">
                  Current Focus:
                </span>
                <span className="flex items-center gap-1.5 text-[#F5F3FA]">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" /> HTML & CSS
                </span>
                <span className="text-purple-500/40" aria-hidden="true">/</span>
                <span className="flex items-center gap-1.5 text-[#F5F3FA]">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" /> Python Logic
                </span>
                <span className="text-purple-500/40" aria-hidden="true">/</span>
                <span className="flex items-center gap-1.5 text-[#F5F3FA]">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-purple-400" /> CSV & Pandas
                </span>
                <span className="text-purple-500/40" aria-hidden="true">/</span>
                <span className="flex items-center gap-1.5 text-[#F5F3FA]">
                  <Database className="w-3.5 h-3.5 text-purple-400" /> SQL Queries
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Futuristic Engineering Visual (Honest, no fake portrait) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-purple-900/40 blur-xl opacity-75" />

              {/* Main Visual Terminal Card */}
              <div className="relative rounded-2xl bg-[#100D18] border border-purple-500/30 p-5 shadow-2xl shadow-purple-950/50 overflow-hidden backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-500/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-[#AAA3B8]">
                      workspace // akshra-dev
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>interactive</span>
                  </div>
                </div>

                {/* Interactive Mode Selector Tabs */}
                <div className="flex items-center gap-1 bg-[#15111F] p-1 rounded-lg border border-purple-500/15 mb-4 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('skyflow')}
                    className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
                      activeTab === 'skyflow'
                        ? 'bg-purple-900/50 text-purple-200 font-medium border border-purple-500/30 shadow-sm'
                        : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
                    }`}
                  >
                    skyflow_core.py
                  </button>
                  <button
                    onClick={() => setActiveTab('dataframe')}
                    className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
                      activeTab === 'dataframe'
                        ? 'bg-purple-900/50 text-purple-200 font-medium border border-purple-500/30 shadow-sm'
                        : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
                    }`}
                  >
                    data_clean.csv
                  </button>
                  <button
                    onClick={() => setActiveTab('web')}
                    className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
                      activeTab === 'web'
                        ? 'bg-purple-900/50 text-purple-200 font-medium border border-purple-500/30 shadow-sm'
                        : 'text-[#AAA3B8] hover:text-[#F5F3FA]'
                    }`}
                  >
                    festival.html
                  </button>
                </div>

                {/* Content Preview based on tab */}
                {activeTab === 'skyflow' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#08070D] p-3 rounded-lg border border-purple-500/15 overflow-x-auto text-[11px] leading-relaxed">
                      <p className="text-purple-400"># Flight Record Registry Parser</p>
                      <p className="text-[#AAA3B8]">import csv</p>
                      <p className="text-purple-300">class FlightManager:</p>
                      <p className="text-[#AAA3B8] pl-3">def __init__(self, csv_file):</p>
                      <p className="text-slate-400 pl-6">self.file = csv_file</p>
                      <p className="text-[#AAA3B8] pl-3">def search(self, origin, dest):</p>
                      <p className="text-slate-400 pl-6">return [r for r in self.rows if ...]</p>
                    </div>

                    {/* Flight status telemetry badge preview */}
                    <div className="bg-[#15111F] p-3 rounded-lg border border-purple-500/20">
                      <div className="flex justify-between items-center text-[11px] text-[#AAA3B8] mb-1.5">
                        <span className="text-purple-300 font-semibold">SK-204 · Active Route</span>
                        <span className="text-emerald-400">Status: On Time</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-[#F5F3FA]">
                        <span>DEL (Delhi)</span>
                        <span className="text-purple-400 font-mono text-[10px]">────────✈────────</span>
                        <span>BOM (Mumbai)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'dataframe' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#08070D] p-3 rounded-lg border border-purple-500/15 overflow-x-auto text-[11px] leading-relaxed">
                      <p className="text-purple-400"># Pandas DataFrame Inspection</p>
                      <p className="text-[#AAA3B8]">import pandas as pd</p>
                      <p className="text-purple-300">df = pd.read_csv("metrics.csv")</p>
                      <p className="text-[#AAA3B8]">print(df.describe())</p>
                    </div>

                    <div className="bg-[#15111F] p-2.5 rounded-lg border border-purple-500/20 overflow-x-auto">
                      <table className="w-full text-[10px] text-left text-[#AAA3B8]">
                        <thead className="border-b border-purple-500/20 text-purple-300">
                          <tr>
                            <th className="pb-1 pr-2">ID</th>
                            <th className="pb-1 pr-2">Sector</th>
                            <th className="pb-1 pr-2">Metric</th>
                            <th className="pb-1">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-500/10">
                          <tr>
                            <td className="py-1 pr-2 text-[#F5F3FA]">001</td>
                            <td className="py-1 pr-2">Physics</td>
                            <td className="py-1 pr-2 text-purple-200">Vectors</td>
                            <td className="py-1 text-emerald-400">Verified</td>
                          </tr>
                          <tr>
                            <td className="py-1 pr-2 text-[#F5F3FA]">002</td>
                            <td className="py-1 pr-2">Informatics</td>
                            <td className="py-1 pr-2 text-purple-200">SQL Joins</td>
                            <td className="py-1 text-emerald-400">Active</td>
                          </tr>
                          <tr>
                            <td className="py-1 pr-2 text-[#F5F3FA]">003</td>
                            <td className="py-1 pr-2">Python</td>
                            <td className="py-1 pr-2 text-purple-200">File IO</td>
                            <td className="py-1 text-purple-400">Learning</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'web' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#08070D] p-3 rounded-lg border border-purple-500/15 overflow-x-auto text-[11px] leading-relaxed">
                      <p className="text-purple-400">&lt;!-- Festival Webpage Preview --&gt;</p>
                      <p className="text-purple-300">&lt;section class="celebration"&gt;</p>
                      <p className="text-[#AAA3B8] pl-3">&lt;h2&gt;Illumination Gala&lt;/h2&gt;</p>
                      <p className="text-[#AAA3B8] pl-3">&lt;div class="lights-grid"&gt;...&lt;/div&gt;</p>
                      <p className="text-purple-300">&lt;/section&gt;</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/40 via-violet-900/30 to-purple-950/50 p-3 rounded-lg border border-purple-500/30 text-center">
                      <p className="text-xs font-bold text-purple-200">Festival Lights & Stage Showcase</p>
                      <p className="text-[10px] text-[#AAA3B8] mt-1">
                        HTML5 structure + CSS3 flex/grid & atmospheric gradients
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom subtle note */}
                <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[10px] text-[#AAA3B8]">
                  <span className="font-mono">Akshra Das · Portfolio Visual</span>
                  <span className="text-purple-400">Student & Explorer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-xs text-[#AAA3B8] hover:text-purple-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-[11px] tracking-widest uppercase font-mono">Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 text-purple-400/80 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
