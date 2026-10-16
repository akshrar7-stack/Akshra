import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, BookOpen, Layers, Lightbulb, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<'whoami' | 'interests' | 'focus' | 'all'>('all');
  const [copied, setCopied] = useState(false);

  const terminalOutput = `$ whoami
${portfolioData.personal.terminalProfile.whoami}
Role: ${portfolioData.personal.terminalProfile.role}
School: ${portfolioData.personal.terminalProfile.school}

$ interests
${portfolioData.personal.terminalProfile.interests.join(" | ")}

$ current_focus
${portfolioData.personal.terminalProfile.currentFocus}

$ status
${portfolioData.personal.terminalProfile.status}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative tech-grid-pattern border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
            <span>Background</span>
            <span aria-hidden="true">·</span>
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3FA]">
            A little about me.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Biography & Core Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#AAA3B8] leading-relaxed">
              {portfolioData.personal.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Structured Interest Highlights */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-300 font-mono mb-4">
                What excites me about software:
              </h3>
              <div className="space-y-3">
                {portfolioData.personal.keyInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#100D18] border border-purple-500/15 hover:border-purple-500/35 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-purple-950/60 text-purple-400 shrink-0 mt-0.5">
                      {idx === 0 && <Layers className="w-4 h-4" />}
                      {idx === 1 && <Terminal className="w-4 h-4" />}
                      {idx === 2 && <Lightbulb className="w-4 h-4" />}
                      {idx === 3 && <BookOpen className="w-4 h-4" />}
                      {idx === 4 && <Compass className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-medium text-[#F5F3FA]">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal View */}
          <div className="lg:col-span-6">
            <div className="sticky top-24 rounded-2xl bg-[#100D18] border border-purple-500/25 shadow-xl shadow-purple-950/30 overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#15111F] border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#AAA3B8]">
                    akshra@portfolio: ~
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-[#AAA3B8] hover:text-purple-300 transition-colors p-1 rounded hover:bg-purple-950/40 cursor-pointer"
                  title="Copy terminal contents"
                  aria-label="Copy terminal text"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Command Quick Buttons */}
              <div className="p-3 bg-[#0D0A14] border-b border-purple-500/15 flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-[#AAA3B8] text-[11px] py-1 self-center">Run:</span>
                <button
                  onClick={() => setActiveCommand('whoami')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeCommand === 'whoami'
                      ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 font-semibold'
                      : 'bg-[#15111F] text-[#AAA3B8] hover:text-[#F5F3FA] border border-purple-500/15'
                  }`}
                >
                  $ whoami
                </button>
                <button
                  onClick={() => setActiveCommand('interests')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeCommand === 'interests'
                      ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 font-semibold'
                      : 'bg-[#15111F] text-[#AAA3B8] hover:text-[#F5F3FA] border border-purple-500/15'
                  }`}
                >
                  $ interests
                </button>
                <button
                  onClick={() => setActiveCommand('focus')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeCommand === 'focus'
                      ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 font-semibold'
                      : 'bg-[#15111F] text-[#AAA3B8] hover:text-[#F5F3FA] border border-purple-500/15'
                  }`}
                >
                  $ current_focus
                </button>
                <button
                  onClick={() => setActiveCommand('all')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeCommand === 'all'
                      ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 font-semibold'
                      : 'bg-[#15111F] text-[#AAA3B8] hover:text-[#F5F3FA] border border-purple-500/15'
                  }`}
                >
                  $ view all
                </button>
              </div>

              {/* Terminal Display */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-4 bg-[#08070D] min-h-[290px] overflow-y-auto">
                {(activeCommand === 'whoami' || activeCommand === 'all') && (
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>$</span>
                      <span>whoami</span>
                    </div>
                    <div className="mt-1 pl-4 text-[#F5F3FA] space-y-0.5">
                      <p className="text-purple-200 font-bold">{portfolioData.personal.terminalProfile.whoami}</p>
                      <p className="text-[#AAA3B8] text-xs">{portfolioData.personal.terminalProfile.role}</p>
                      <p className="text-[#AAA3B8] text-xs">
                        🏫 {portfolioData.personal.terminalProfile.school}
                      </p>
                    </div>
                  </div>
                )}

                {(activeCommand === 'interests' || activeCommand === 'all') && (
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>$</span>
                      <span>interests</span>
                    </div>
                    <div className="mt-1 pl-4 text-purple-200 text-xs">
                      {portfolioData.personal.terminalProfile.interests.join(" | ")}
                    </div>
                  </div>
                )}

                {(activeCommand === 'focus' || activeCommand === 'all') && (
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>$</span>
                      <span>current_focus</span>
                    </div>
                    <div className="mt-1 pl-4 text-violet-300 text-xs">
                      "{portfolioData.personal.terminalProfile.currentFocus}"
                    </div>
                  </div>
                )}

                {activeCommand === 'all' && (
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <span>$</span>
                      <span>status</span>
                    </div>
                    <div className="mt-1 pl-4 text-emerald-400 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {portfolioData.personal.terminalProfile.status}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center gap-1.5 text-purple-400/80">
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Terminal Footer Note */}
              <div className="px-4 py-2.5 bg-[#15111F] border-t border-purple-500/15 flex items-center justify-between text-[11px] text-[#AAA3B8]">
                <span>Environment: Student Developer</span>
                <span className="font-mono text-purple-400">Faridabad, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
